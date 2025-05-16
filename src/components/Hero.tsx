
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
              <span className="block">Hi, I'm</span>
              <span className="block text-blue-600 mt-1">Your Name</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              I build beautiful, responsive, and user-friendly web applications.
              My passion is creating digital experiences that leave a lasting impression.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => navigate('/projects')}
                className="gap-2"
              >
                View My Work <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
            <div className="relative bg-white rounded-lg shadow-xl p-4 border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Developer"
                className="rounded w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
