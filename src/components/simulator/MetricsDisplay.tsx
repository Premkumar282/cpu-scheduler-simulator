import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Zap, Activity, Cpu } from "lucide-react";

interface Metrics {
  avgWaiting: number;
  avgTurnaround: number;
  avgResponse: number;
  throughput: number;
  cpuUtilization: number;
}

interface MetricsDisplayProps {
  metrics: Metrics;
}

export const MetricsDisplay = ({ metrics }: MetricsDisplayProps) => {
  const metricCards = [
    {
      label: "Avg Waiting Time",
      value: `${metrics.avgWaiting} ms`,
      icon: Clock,
      color: "text-accent"
    },
    {
      label: "Avg Turnaround Time",
      value: `${metrics.avgTurnaround} ms`,
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      label: "Avg Response Time",
      value: `${metrics.avgResponse} ms`,
      icon: Zap,
      color: "text-secondary"
    },
    {
      label: "Throughput",
      value: `${metrics.throughput} proc/ms`,
      icon: Activity,
      color: "text-accent"
    },
    {
      label: "CPU Utilization",
      value: `${metrics.cpuUtilization}%`,
      icon: Cpu,
      color: "text-primary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {metricCards.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card
            key={index}
            className="p-6 bg-background/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start justify-between mb-2">
              <Icon className={`h-8 w-8 ${metric.color}`} />
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">
              {metric.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {metric.label}
            </div>
          </Card>
        );
      })}
    </div>
  );
};
