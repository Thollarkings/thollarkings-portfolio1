
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product catalog, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Dashboard Application",
      description: "A data visualization dashboard with real-time updates, filters, and interactive charts and graphs.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Social Media App",
      description: "A social platform with user authentication, profiles, posts, comments, and real-time messaging.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Express", "Socket.io", "PostgreSQL"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
