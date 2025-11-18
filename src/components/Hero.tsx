import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">Hello I am</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <span className="neon-text">&lt;</span> John{" "}
                <span className="text-foreground">Doe</span>{" "}
                <span className="neon-text">/&gt;</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Fullstack Developer
              </p>
            </div>

            {/* Tech Icons */}
            <div className="flex gap-4 flex-wrap items-center pt-4">
              <span className="text-muted-foreground">Tech Stack:</span>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover-glow">
                  <span className="text-xl">⚛️</span>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover-glow">
                  <span className="text-xl">🎨</span>
                </div>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover-glow">
                  <span className="text-xl">⚙️</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:john@example.com"
                className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-glow"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 neon-border">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="John Doe - Fullstack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
