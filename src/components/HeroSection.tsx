import { Button } from "@/components/ui/button";
import { Github, Play } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Intelligent CPU Scheduler Simulator";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-neon-flicker">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Real-Time Visualization Tool for <span className="text-primary font-semibold">FCFS</span>, 
            <span className="text-secondary font-semibold"> SJF</span>, 
            <span className="text-accent font-semibold"> Round Robin</span> & 
            <span className="text-primary font-semibold"> Priority Scheduling</span>
          </p>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.location.href = '/simulator'}
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Try Simulator
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary-glow opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 text-lg px-8 py-6"
              onClick={() => window.open("https://github.com/Premkumar282/cpu-scheduler-simulator", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Code
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
            {[
              { value: "4+", label: "Algorithms" },
              { value: "Real-time", label: "Visualization" },
              { value: "AI", label: "Powered Advisor" },
              { value: "Open", label: "Source" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
