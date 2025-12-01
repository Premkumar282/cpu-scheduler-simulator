import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Premkumar282", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/prem-kumar05/", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="relative py-12 px-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
      {/* Neon line divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                CPU Scheduler
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Intelligent Visualization Platform
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group p-3 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:-translate-y-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Intelligent CPU Scheduler Simulator. Built with{" "}
            <span className="text-primary">Python</span> and{" "}
            <span className="text-secondary">AI</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
