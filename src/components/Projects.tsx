
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
  {
    title: "InvoiceMax",
    description: "InvoiceMax streamlines billing with customizable invoices, receipts, logo uploads, and watermark features for a professional, secure touch. Its user-friendly, responsive design ensures effortless financial management.",
    image: "images/Invoicemax.png",  // Removed leading slash
    tags: ["React", "CSS", "JavaScript"],
    githubLink: "https://github.com/thollarkings/InvoiceMax",
    liveLink: "https://thollarkings.github.io/InvoiceMax/"
  },
  {
    title: "Unit Converter",
    description: "Unit Converter React Web App is an interactive tool that simplifies the conversion of measurement units. It features a responsive, user-friendly interface that allows users to input values and instantly see their equivalents in another unit.",
    image: "images/unitconverter.png",  // Removed leading slash
    tags: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/thollarkings/quantify-the-cosmos-converter",
    liveLink: "https://thollarkings.github.io/quantify-the-cosmos-converter/"
  },
  {
    title: "My Tailor's Logbook",
    description: "This app is an essential tool for accurately recording client measurements, tracking key details, and ensuring precise fittings and timely delivery.",
    image: "images/Tailorslogs.png",  // Removed leading slash
    tags: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/thollarkings/stitch-scribe-tracker",
    liveLink: "https://thollarkings.github.io/stitch-scribe-tracker//"
  },
  {
    title: "Budget App",
    description: "User-friendly budget management tool with React. This app is an essential tool for accurately recording client measurements, tracking key details, and ensuring precise fittings and timely delivery.",
    image: "images/Budgetapp.png",  // Removed leading slash
    tags: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/thollarkings/kings_budget_app",
    liveLink: "https://thollarkings.github.io/kings_budget_app/"
  },
  {
    title: "Kings-Calc",
    description: "This app is a Simple Working Calculator designed with React. Its primary goal is to provide basic arithmetic operations.",
    image: "images/simplecalculator.png",  // Removed leading slash
    tags: ["React", "JavaScript", "CSS"],
    githubLink: "https://github.com/thollarkings/clever-react-calculator/",
    liveLink: "https://thollarkings.github.io/clever-react-calculator/"
  },
  {
    title: "Measurements Recorder",
    description: "This application serves as a measurement tracking tool. Similar to the My Tailor's Logbook app, this was developed using vanilla JavaScript.",
    image: "images/Measurementrecorder.png",  // Removed leading slash
    tags: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/thollarkings/Tailors_Log_Book",
    liveLink: "https://thollarkings.github.io/Tailors_Log_Book/"
  }
];


  return (
    <section className="py-16 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-1300">
              <div className="aspect-video overflow-hidden" style={{ boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-70% h-70% object-cover transition-transform duration-500 hover:scale-105"
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
                <CardDescription className="text-gray-800 text-base">{project.description}</CardDescription>
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
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
