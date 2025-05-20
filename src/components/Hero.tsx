
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-purple-100 to-blue-50 pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-indigo-800 to-purple-700 bg-clip-text text-transparent mt-2 leading-relaxed">Oyeniyi Omotola</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl">
              I build fast, responsive, and visually compelling web applications. With a strong eye for design and a focus on user experience, I turn ideas into clean, scalable digital products.
            </p>
            <div className="flex flex-wrap gap-4 [&>button]:min-h-[48px]">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500 transition-all py-4 px-6 pointer-events-auto"
                asChild
              >
                <Link to="/projects">
                  View My Work <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-600 hover:bg-purple-50 shadow-md hover:shadow-purple-300/20 transition-all py-4 px-6 pointer-events-auto"
                asChild
              >
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative z-0">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            <div className="relative bg-white rounded-lg shadow-2xl p-4 border border-gray-200 shadow-purple-700/50 z-10">
              <img 
                src="images/Omotola 2.png" 
                alt="Developer"
                className="rounded w-full object-cover aspect-square hover:scale-[1.01] transition-transform duration-300"
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
