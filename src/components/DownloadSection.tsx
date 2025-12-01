import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Github, FileText, ExternalLink } from "lucide-react";

export const DownloadSection = () => {
  const resources = [
    {
      icon: Github,
      title: "GitHub Repository",
      description: "Access the full source code",
      buttonText: "View on GitHub",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Download,
      title: "Download ZIP",
      description: "Get the complete project",
      buttonText: "Download Now",
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Read the user manual",
      buttonText: "View Docs",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl animate-glow-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">
              Get Started Now
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download the simulator or explore the source code to start learning about CPU scheduling
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 p-8 text-center">
                  <div className={`inline-block p-6 rounded-2xl bg-gradient-to-br ${resource.gradient} bg-opacity-20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="h-12 w-12 text-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {resource.description}
                  </p>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${resource.gradient} hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group/btn`}
                  >
                    {resource.buttonText}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-2 border-primary/30 animate-fade-in-up">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
          
          <div className="relative z-10 p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Explore CPU Scheduling?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download the simulator now and start experimenting with different scheduling algorithms. 
              Perfect for students, educators, and OS enthusiasts.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Simulator
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
