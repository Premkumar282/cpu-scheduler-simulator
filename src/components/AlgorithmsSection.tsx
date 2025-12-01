import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, Zap, RotateCw, Star } from "lucide-react";

export const AlgorithmsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const algorithms = [
    {
      icon: Clock,
      name: "FCFS",
      fullName: "First Come First Serve",
      color: "from-primary to-primary-glow",
      description: "Processes are executed in order of arrival. Simple and fair but can lead to convoy effect.",
      ganttPreview: [
        { name: "P1", duration: 8, color: "bg-primary" },
        { name: "P2", duration: 4, color: "bg-primary/80" },
        { name: "P3", duration: 9, color: "bg-primary/60" },
      ]
    },
    {
      icon: Zap,
      name: "SJF",
      fullName: "Shortest Job First",
      color: "from-secondary to-secondary-glow",
      description: "Shortest process executes first. Minimizes average waiting time but requires burst time prediction.",
      ganttPreview: [
        { name: "P2", duration: 4, color: "bg-secondary" },
        { name: "P1", duration: 8, color: "bg-secondary/80" },
        { name: "P3", duration: 9, color: "bg-secondary/60" },
      ]
    },
    {
      icon: RotateCw,
      name: "Round Robin",
      fullName: "Time Slice Scheduling",
      color: "from-accent to-primary",
      description: "Each process gets a fixed time quantum. Ensures fairness and prevents starvation.",
      ganttPreview: [
        { name: "P1", duration: 4, color: "bg-accent" },
        { name: "P2", duration: 4, color: "bg-accent/80" },
        { name: "P3", duration: 4, color: "bg-accent/60" },
        { name: "P1", duration: 4, color: "bg-accent" },
      ]
    },
    {
      icon: Star,
      name: "Priority",
      fullName: "Priority Scheduling",
      color: "from-primary via-secondary to-accent",
      description: "Processes are executed based on priority levels. Critical tasks execute first.",
      ganttPreview: [
        { name: "P3", duration: 9, color: "bg-gradient-to-r from-primary to-secondary" },
        { name: "P1", duration: 8, color: "bg-secondary" },
        { name: "P2", duration: 4, color: "bg-primary" },
      ]
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
              Scheduling Algorithms
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore different CPU scheduling strategies and their impact on system performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {algorithms.map((algo, index) => {
            const Icon = algo.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Neon glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${algo.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${algo.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-10 w-10 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2 text-foreground">
                        {algo.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{algo.fullName}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {algo.description}
                  </p>

                  {/* Gantt Chart Preview */}
                  <div className={`transition-all duration-500 ${isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <p className="text-xs text-muted-foreground mb-3 font-mono">GANTT CHART PREVIEW</p>
                      <div className="flex gap-1 h-12">
                        {algo.ganttPreview.map((process, idx) => (
                          <div
                            key={idx}
                            className={`${process.color} rounded flex items-center justify-center text-xs font-bold text-background transition-all duration-300 animate-gantt-slide`}
                            style={{ 
                              flex: process.duration,
                              animationDelay: `${idx * 0.1}s`
                            }}
                          >
                            {process.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${algo.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
