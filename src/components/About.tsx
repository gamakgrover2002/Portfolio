import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">
          aboutMe<span className="text-foreground">()</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Text */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          {/* Badges */}
          <div className="space-y-4">
            <Badge className="w-full justify-center py-3 text-sm bg-secondary hover:bg-secondary border border-primary/30">
              FRONTEND DEVELOPER
            </Badge>
            <Badge className="w-full justify-center py-3 text-sm bg-secondary hover:bg-secondary border border-primary/30">
              FREELANCER
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
