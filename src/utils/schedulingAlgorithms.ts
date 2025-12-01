interface Process {
  id: string;
  arrival: number;
  burst: number;
  priority?: number;
}

interface ProcessResult extends Process {
  completion: number;
  turnaround: number;
  waiting: number;
  response: number;
}

interface GanttItem {
  process: string;
  start: number;
  end: number;
}

interface ScheduleResult {
  processes: ProcessResult[];
  ganttChart: GanttItem[];
  metrics: {
    avgWaiting: number;
    avgTurnaround: number;
    avgResponse: number;
    throughput: number;
    cpuUtilization: number;
  };
}

export const scheduleFCFS = (processes: Process[]): ScheduleResult => {
  const sorted = [...processes].sort((a, b) => a.arrival - b.arrival);
  const ganttChart: GanttItem[] = [];
  const results: ProcessResult[] = [];
  let currentTime = 0;

  sorted.forEach((process) => {
    const start = Math.max(currentTime, process.arrival);
    const end = start + process.burst;
    
    ganttChart.push({
      process: process.id,
      start,
      end
    });

    results.push({
      ...process,
      completion: end,
      turnaround: end - process.arrival,
      waiting: start - process.arrival,
      response: start - process.arrival
    });

    currentTime = end;
  });

  return {
    processes: results,
    ganttChart,
    metrics: calculateMetrics(results)
  };
};

export const scheduleSJF = (processes: Process[]): ScheduleResult => {
  const ganttChart: GanttItem[] = [];
  const results: ProcessResult[] = [];
  const remaining = [...processes];
  let currentTime = 0;
  const completed: ProcessResult[] = [];

  while (remaining.length > 0) {
    const available = remaining.filter(p => p.arrival <= currentTime);
    
    if (available.length === 0) {
      currentTime = Math.min(...remaining.map(p => p.arrival));
      continue;
    }

    const shortest = available.reduce((min, p) => 
      p.burst < min.burst ? p : min
    );

    const start = currentTime;
    const end = start + shortest.burst;

    ganttChart.push({
      process: shortest.id,
      start,
      end
    });

    completed.push({
      ...shortest,
      completion: end,
      turnaround: end - shortest.arrival,
      waiting: start - shortest.arrival,
      response: start - shortest.arrival
    });

    currentTime = end;
    remaining.splice(remaining.indexOf(shortest), 1);
  }

  return {
    processes: completed,
    ganttChart,
    metrics: calculateMetrics(completed)
  };
};

export const scheduleRoundRobin = (processes: Process[], quantum: number): ScheduleResult => {
  const ganttChart: GanttItem[] = [];
  const results: Map<string, Partial<ProcessResult>> = new Map();
  const queue: Array<Process & { remainingBurst: number }> = [];
  let currentTime = 0;
  const arrived = [...processes].sort((a, b) => a.arrival - b.arrival);
  let nextArrivalIndex = 0;

  processes.forEach(p => {
    results.set(p.id, { ...p, response: -1 });
  });

  while (queue.length > 0 || nextArrivalIndex < arrived.length) {
    while (nextArrivalIndex < arrived.length && arrived[nextArrivalIndex].arrival <= currentTime) {
      queue.push({ ...arrived[nextArrivalIndex], remainingBurst: arrived[nextArrivalIndex].burst });
      nextArrivalIndex++;
    }

    if (queue.length === 0) {
      currentTime = arrived[nextArrivalIndex].arrival;
      continue;
    }

    const current = queue.shift()!;
    const processData = results.get(current.id)!;
    
    if (processData.response === -1) {
      processData.response = currentTime - current.arrival;
    }

    const executeTime = Math.min(quantum, current.remainingBurst);
    const start = currentTime;
    const end = start + executeTime;

    ganttChart.push({
      process: current.id,
      start,
      end
    });

    current.remainingBurst -= executeTime;
    currentTime = end;

    while (nextArrivalIndex < arrived.length && arrived[nextArrivalIndex].arrival <= currentTime) {
      queue.push({ ...arrived[nextArrivalIndex], remainingBurst: arrived[nextArrivalIndex].burst });
      nextArrivalIndex++;
    }

    if (current.remainingBurst > 0) {
      queue.push(current);
    } else {
      processData.completion = currentTime;
      processData.turnaround = currentTime - current.arrival;
      processData.waiting = processData.turnaround! - current.burst;
    }
  }

  const completed: ProcessResult[] = Array.from(results.values()).map(p => p as ProcessResult);

  return {
    processes: completed,
    ganttChart,
    metrics: calculateMetrics(completed)
  };
};

export const schedulePriority = (processes: Process[]): ScheduleResult => {
  const ganttChart: GanttItem[] = [];
  const results: ProcessResult[] = [];
  const remaining = [...processes];
  let currentTime = 0;
  const completed: ProcessResult[] = [];

  while (remaining.length > 0) {
    const available = remaining.filter(p => p.arrival <= currentTime);
    
    if (available.length === 0) {
      currentTime = Math.min(...remaining.map(p => p.arrival));
      continue;
    }

    const highest = available.reduce((max, p) => 
      (p.priority || 0) < (max.priority || 0) ? p : max
    );

    const start = currentTime;
    const end = start + highest.burst;

    ganttChart.push({
      process: highest.id,
      start,
      end
    });

    completed.push({
      ...highest,
      completion: end,
      turnaround: end - highest.arrival,
      waiting: start - highest.arrival,
      response: start - highest.arrival
    });

    currentTime = end;
    remaining.splice(remaining.indexOf(highest), 1);
  }

  return {
    processes: completed,
    ganttChart,
    metrics: calculateMetrics(completed)
  };
};

const calculateMetrics = (processes: ProcessResult[]) => {
  const n = processes.length;
  const avgWaiting = processes.reduce((sum, p) => sum + p.waiting, 0) / n;
  const avgTurnaround = processes.reduce((sum, p) => sum + p.turnaround, 0) / n;
  const avgResponse = processes.reduce((sum, p) => sum + p.response, 0) / n;
  const totalTime = Math.max(...processes.map(p => p.completion));
  const totalBurst = processes.reduce((sum, p) => sum + p.burst, 0);
  const throughput = n / totalTime;
  const cpuUtilization = (totalBurst / totalTime) * 100;

  return {
    avgWaiting: parseFloat(avgWaiting.toFixed(2)),
    avgTurnaround: parseFloat(avgTurnaround.toFixed(2)),
    avgResponse: parseFloat(avgResponse.toFixed(2)),
    throughput: parseFloat(throughput.toFixed(2)),
    cpuUtilization: parseFloat(cpuUtilization.toFixed(2))
  };
};
