
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 flex items-center gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} /> Back to Home
          </Button>
          
          <h1 className="text-4xl font-bold mb-8">All Projects</h1>
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
