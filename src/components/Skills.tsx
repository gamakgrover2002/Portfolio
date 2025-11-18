const Skills = () => {
  const skills = [
    { name: "HTML5", emoji: "📄", color: "#E34F26" },
    { name: "CSS3", emoji: "🎨", color: "#1572B6" },
    { name: "JavaScript", emoji: "⚡", color: "#F7DF1E" },
    { name: "React", emoji: "⚛️", color: "#61DAFB" },
    { name: "TypeScript", emoji: "📘", color: "#3178C6" },
    { name: "Node.js", emoji: "🟢", color: "#339933" },
    { name: "MongoDB", emoji: "🍃", color: "#47A248" },
    { name: "Express", emoji: "🚂", color: "#000000" },
    { name: "Git", emoji: "🔀", color: "#F05032" },
    { name: "GitHub", emoji: "🐙", color: "#181717" },
    { name: "VS Code", emoji: "💻", color: "#007ACC" },
    { name: "Figma", emoji: "🎭", color: "#F24E1E" },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 neon-text">
          skills<span className="text-foreground">()</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative aspect-square bg-secondary rounded-lg flex items-center justify-center hover-glow cursor-pointer"
            >
              <span className="text-4xl">{skill.emoji}</span>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
