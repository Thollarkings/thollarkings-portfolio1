
import { Code, Layers, Layout, RefreshCcw, Server, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillsList = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
      icon: <Layout className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and database integrations.",
      icon: <Server className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting beautiful and intuitive user experiences with a focus on usability and accessibility.",
      icon: <Sparkles className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, well-tested code following best practices and design patterns.",
      icon: <Code className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Full Stack Development",
      description: "Integrating frontend and backend technologies to build complete web applications.",
      icon: <Layers className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Continuous Learning",
      description: "Staying up-to-date with the latest technologies and constantly improving my skills.",
      icon: <RefreshCcw className="w-10 h-10 text-blue-600" />,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Skills</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the technologies and methodologies I specialize in.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsList.map((skill, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{skill.icon}</div>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
