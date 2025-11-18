import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Contact = () => {
  const experiences = [
    {
      id: 1,
      title: "SENIOR DEVELOPER",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading development team and architecting scalable solutions",
    },
    {
      id: 2,
      title: "FULLSTACK DEVELOPER",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: "Built modern web applications with React and Node.js",
    },
    {
      id: 3,
      title: "FRONTEND DEVELOPER",
      company: "Startup Inc",
      period: "2018 - 2020",
      description: "Created responsive user interfaces and improved UX",
    },
    {
      id: 4,
      title: "JUNIOR DEVELOPER",
      company: "Web Studio",
      period: "2016 - 2018",
      description: "Learned web development and built client websites",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">
          contacts<span className="text-foreground">()</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block neon-border"></div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="bg-secondary border-border p-6 hover-glow">
                    <h3 className="text-xl font-bold mb-2 neon-text">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Download size={16} className="mr-2" />
                      Download CV
                    </Button>
                  </Card>
                </div>

                {/* Spacer for timeline */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
