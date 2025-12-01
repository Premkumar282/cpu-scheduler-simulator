import { Code2, PieChart, Table, Github } from "lucide-react";

export const TechStackSection = () => {
  const technologies = [
  {
    icon: Code2,
    name: "React",
    description: "Frontend UI library",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Code2,
    name: "TypeScript",
    description: "Typed JavaScript for reliability",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Code2,
    name: "Vite",
    description: "Fast dev server & build tool",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Code2,
    name: "Tailwind CSS",
    description: "Utility-first styling framework",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Code2,
    name: "shadcn/ui",
    description: "Modern component framework",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Code2,
    name: "Lucide Icons",
    description: "Icon library used across UI",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: Code2,
    name: "Node.js + npm",
    description: "Package manager & runtime",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Github,
    name: "GitHub",
    description: "Version control & hosting",
    color: "from-gray-400 to-gray-600",
  },
];


  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-primary">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built with modern, reliable technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            
            return (
              <div
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:-translate-y-2 cursor-pointer">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex flex-col items-center gap-4 min-w-[160px]">
                    <div className={`p-5 rounded-xl bg-gradient-to-br ${tech.color} bg-opacity-20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="h-10 w-10 text-foreground" />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner highlight */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
