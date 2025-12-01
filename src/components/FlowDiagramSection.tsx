import { ArrowRight } from "lucide-react";

export const FlowDiagramSection = () => {
  const nodes = [
    { id: 1, label: "Process Input", desc: "Enter burst time, arrival time, priority" },
    { id: 2, label: "Algorithm Engine", desc: "FCFS, SJF, RR, Priority" },
    { id: 3, label: "Visualization", desc: "Gantt Chart & Ready Queue" },
    { id: 4, label: "AI Advisor", desc: "Algorithm recommendation" },
    { id: 5, label: "Output Metrics", desc: "Wait time, Turnaround, CPU utilization" }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              System Flow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From input to intelligent recommendations
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {nodes.map((node, index) => (
              <div key={node.id} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="group relative">
                  {/* Node */}
                  <div className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:-translate-y-2 cursor-pointer">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-background shadow-lg group-hover:scale-110 transition-transform">
                      {node.id}
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300 -z-10" />

                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {node.label}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {node.desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector (hidden on last item and mobile) */}
                  {index < nodes.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-20">
                      <ArrowRight className="h-8 w-8 text-primary animate-float" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
