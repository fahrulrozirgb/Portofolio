import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Server, Wrench } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 70, category: "frontend" },
  { name: "JavaScript", level: 50, category: "frontend" },
  { name: "React", level: 45, category: "frontend" },
  { name: "Tailwind CSS", level: 45, category: "frontend" },

  // Backend
  { name: "Node.js", level: 50, category: "backend" },
  { name: "MongoDB", level: 50, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const getIcon = (category) => {
    switch (category) {
      case "frontend":
        return <Code className="w-5 h-5 text-purple-500" />;
      case "backend":
        return <Server className="w-5 h-5 text-green-500" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 text-sm rounded-full border transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-background/60 border border-border backdrop-blur-lg rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  {getIcon(skill.category)}
                </div>
                <h3 className="font-semibold text-lg text-foreground">
                  {skill.name}
                </h3>
              </div>

              <div className="relative w-full h-3 bg-secondary/40 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-sm text-muted-foreground text-right mt-2">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
