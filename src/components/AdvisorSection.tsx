import { Card } from "@/components/ui/card";
import { Brain, Sparkles, TrendingUp, Zap } from "lucide-react";

export const AdvisorSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-glow-pulse" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="h-4 w-4 text-primary animate-neon-flicker" />
            <span className="text-sm font-mono text-primary">AI-Powered</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-accent">
              Intelligent Advisor
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let AI analyze your workload and recommend the optimal scheduling algorithm
          </p>
        </div>

        <Card className="relative overflow-hidden bg-card/30 backdrop-blur-sm border-2 border-primary/20 animate-scale-in">
          {/* Animated waveforms */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
              <path
                d="M0,100 Q25,80 50,100 T100,100 T150,100 T200,100"
                stroke="url(#wave-gradient)"
                strokeWidth="2"
                fill="none"
                className="animate-float"
              />
            </svg>
          </div>

          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* AI Brain Visualization */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-full opacity-20 blur-2xl animate-glow-pulse" />
                  <div className="absolute inset-4 bg-card rounded-full border-2 border-primary/50 flex items-center justify-center">
                    <Brain className="h-20 w-20 text-primary animate-float" />
                  </div>
                  
                  {/* Orbiting particles */}
                  <div className="absolute inset-0">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5"
                        style={{
                          animation: `float 3s ease-in-out infinite`,
                          animationDelay: `${i * 1}s`,
                          transform: `rotate(${i * 120}deg) translateX(80px)`
                        }}
                      >
                        <div className="w-full h-full rounded-full bg-primary animate-glow-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Smart Algorithm Selection
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Our intelligent advisor analyzes your process characteristics including burst time distribution, 
                  arrival patterns, and priority levels to recommend the most efficient scheduling algorithm for 
                  your specific workload.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  {[
                    { icon: TrendingUp, text: "Analyzes Patterns", color: "primary" },
                    { icon: Zap, text: "Fast Recommendations", color: "secondary" },
                    { icon: Brain, text: "ML-Powered", color: "accent" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300"
                      >
                        <div className={`p-2 rounded-lg bg-${item.color}/20`}>
                          <Icon className={`h-5 w-5 text-${item.color}`} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* How it works */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Input Processes", desc: "Enter process details and characteristics" },
            { step: "02", title: "AI Analysis", desc: "Advisor evaluates workload patterns" },
            { step: "03", title: "Get Recommendation", desc: "Receive optimal algorithm suggestion" }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-block mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary opacity-30">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
