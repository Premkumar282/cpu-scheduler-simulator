import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface Process {
  id: string;
  arrival: number;
  burst: number;
  color: string;
}

export const LiveAnimationSection = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [runningProcess, setRunningProcess] = useState(0);

  const processes: Process[] = [
    { id: "P1", arrival: 0, burst: 8, color: "bg-primary" },
    { id: "P2", arrival: 1, burst: 4, color: "bg-secondary" },
    { id: "P3", arrival: 2, burst: 9, color: "bg-accent" },
    { id: "P4", arrival: 3, burst: 5, color: "bg-primary/70" },
  ];

  const readyQueue = processes.filter(p => p.arrival <= currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prev) => (prev + 1) % 30);
      setRunningProcess((prev) => (prev + 1) % processes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
              Live Animation Preview
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch scheduling algorithms in action with real-time visualization
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-scale-in">
          {/* Time Counter */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-muted-foreground font-mono">
              Current Algorithm: <span className="text-primary font-bold">FCFS</span>
            </div>
            <div className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
              <span className="text-sm text-muted-foreground font-mono">Time: </span>
              <span className="text-2xl font-bold text-primary font-mono">{currentTime}</span>
            </div>
          </div>

          {/* Gantt Chart Animation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Gantt Chart</h3>
            <div className="relative h-24 rounded-lg bg-background/50 border border-border overflow-hidden">
              <div className="flex h-full">
                {processes.map((process, index) => (
                  <div
                    key={process.id}
                    className={`${process.color} flex items-center justify-center text-background font-bold transition-all duration-500`}
                    style={{
                      flex: process.burst,
                      opacity: index <= runningProcess ? 1 : 0.3,
                      transform: index === runningProcess ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {process.id}
                  </div>
                ))}
              </div>
              
              {/* Running indicator */}
              <div 
                className="absolute top-0 h-full w-1 bg-foreground animate-glow-pulse"
                style={{
                  left: `${(processes.slice(0, runningProcess).reduce((acc, p) => acc + p.burst, 0) / 
                           processes.reduce((acc, p) => acc + p.burst, 0)) * 100}%`,
                  transition: 'left 1s linear'
                }}
              />
            </div>
          </div>

          {/* Ready Queue Animation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Ready Queue</h3>
            <div className="flex flex-wrap gap-3">
              {readyQueue.map((process, index) => (
                <div
                  key={process.id}
                  className={`px-6 py-3 rounded-lg ${process.color} text-background font-bold animate-slide-in-right transition-all duration-300 hover:scale-110`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-sm">Process {process.id}</div>
                  <div className="text-xs opacity-80">Burst: {process.burst}ms</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {processes.map((process, index) => (
              <div
                key={process.id}
                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                  index === runningProcess 
                    ? 'border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.3)]' 
                    : 'border-border bg-background/30'
                }`}
              >
                <div className="text-xs text-muted-foreground mb-1">Process</div>
                <div className="text-xl font-bold text-foreground">{process.id}</div>
                <div className="text-xs text-muted-foreground mt-2">
                  {index === runningProcess ? 'Running...' : 'Waiting'}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
