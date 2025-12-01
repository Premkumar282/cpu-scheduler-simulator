interface GanttItem {
  process: string;
  start: number;
  end: number;
}

interface GanttChartProps {
  ganttChart: GanttItem[];
}

const colors = [
  "bg-primary",
  "bg-secondary", 
  "bg-accent",
  "bg-primary/70",
  "bg-secondary/70",
  "bg-accent/70"
];

export const GanttChart = ({ ganttChart }: GanttChartProps) => {
  const maxTime = Math.max(...ganttChart.map(g => g.end));
  const processColors = new Map<string, string>();
  
  ganttChart.forEach((item, index) => {
    if (!processColors.has(item.process)) {
      processColors.set(item.process, colors[processColors.size % colors.length]);
    }
  });

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="flex h-24 rounded-lg border border-border overflow-hidden">
          {ganttChart.map((item, index) => {
            const width = ((item.end - item.start) / maxTime) * 100;
            return (
              <div
                key={index}
                className={`${processColors.get(item.process)} flex flex-col items-center justify-center text-background font-bold transition-all duration-300 hover:opacity-80 border-r border-background/20`}
                style={{ width: `${width}%` }}
              >
                <span className="text-lg">{item.process}</span>
                <span className="text-xs opacity-80">{item.end - item.start}ms</span>
              </div>
            );
          })}
        </div>
        
        {/* Timeline */}
        <div className="flex mt-2">
          {ganttChart.map((item, index) => {
            const width = ((item.end - item.start) / maxTime) * 100;
            return (
              <div
                key={index}
                className="text-xs text-muted-foreground font-mono"
                style={{ width: `${width}%` }}
              >
                <div className="flex justify-between">
                  <span>{item.start}</span>
                  {index === ganttChart.length - 1 && <span>{item.end}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3">
        {Array.from(processColors.entries()).map(([process, color]) => (
          <div key={process} className="flex items-center gap-2">
            <div className={`w-6 h-6 ${color} rounded`} />
            <span className="text-sm text-muted-foreground">{process}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
