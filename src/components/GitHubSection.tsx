import { Card } from "@/components/ui/card";
import { GitBranch, GitCommit, GitMerge } from "lucide-react";

export const GitHubSection = () => {
  const revisions = [// { id: 1, title: "Initial Setup", desc: "Project structure and basic UI", commits: 12 },
    // { id: 2, title: "FCFS Algorithm", desc: "First scheduling implementation", commits: 8 },
    // { id: 3, title: "SJF & Priority", desc: "Added more algorithms", commits: 15 },
    // { id: 4, title: "Round Robin", desc: "Time quantum scheduling", commits: 10 },
    // { id: 5, title: "Gantt Charts", desc: "Visual representation", commits: 20 },
    // { id: 6, title: "AI Advisor", desc: "Intelligent recommendations", commits: 18 },
    // { id: 7, title: "Final Polish", desc: "UI improvements & testing", commits: 25 }
    ];
  

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <GitBranch className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary">7 Major Revisions</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-primary">
              Development Timeline
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Track our development journey through GitHub commits
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

          <div className="space-y-12">
            {revisions.map((revision, index) => (
              <div
                key={revision.id}
                className={`relative animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Card */}
                  <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform">
                        <GitCommit className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {revision.title}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                            v{revision.id}.0
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">
                          {revision.desc}
                        </p>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <GitMerge className="h-4 w-4" />
                          <span className="font-mono">{revision.commits} commits</span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Timeline node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-transform" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
