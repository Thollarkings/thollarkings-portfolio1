
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import Certifications from '@/components/Certifications';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <AboutSection />
          <div className="mt-16">
            <Certifications />
          </div>
          <div className="my-12 text-center">
            <a 
              href="https://drive.google.com/file/d/1m8QuPXPUgqljib4kWXzAJE1I0bi9CG8k/view" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
