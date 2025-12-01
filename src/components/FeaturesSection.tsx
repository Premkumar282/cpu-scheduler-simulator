import { BarChart3, Clock, Brain, TrendingUp, GitCompare, Layers } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Gantt Chart",
      description: "Visualize process execution with interactive, color-coded Gantt charts that update in real-time"
    },
    {
      icon: Clock,
      title: "Ready Queue Visualization",
      description: "Track process states and queue dynamics with animated, easy-to-understand visualizations"
    },
    {
      icon: Brain,
      title: "Intelligent Advisor",
      description: "AI-powered recommendations for optimal algorithm selection based on workload characteristics"
    },
    {
      icon: TrendingUp,
      title: "Performance Metrics",
      description: "Comprehensive analytics including average waiting time, turnaround time, and CPU utilization"
    },
    {
      icon: GitCompare,
      title: "Algorithm Comparison",
      description: "Side-by-side comparison of different scheduling algorithms for the same process set"
    },
    {
      icon: Layers,
      title: "Multi-level Queue",
      description: "Support for priority-based queuing and multi-level feedback queue implementations"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to understand and analyze CPU scheduling algorithms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator line */}
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
