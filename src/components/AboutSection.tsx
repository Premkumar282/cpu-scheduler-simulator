import { Cpu, Calendar, BarChart3, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "CPU Scheduling",
      description: "Simulates real CPU scheduling algorithms with accurate process management"
    },
    {
      icon: Calendar,
      title: "Multiple Algorithms",
      description: "FCFS, SJF, Round Robin, and Priority scheduling implementations"
    },
    {
      icon: BarChart3,
      title: "Visual Analytics",
      description: "Interactive Gantt charts and performance metrics dashboard"
    },
    {
      icon: Lightbulb,
      title: "AI Advisor",
      description: "Intelligent recommendations for optimal algorithm selection"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              About the Project
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An advanced operating system simulator that visualizes CPU scheduling algorithms in real-time, 
            providing insights into process management, performance metrics, and intelligent algorithm selection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
