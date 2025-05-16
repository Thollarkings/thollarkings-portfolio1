
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 flex items-center gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} /> Back to Home
          </Button>
          
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
              <div className="relative">
                <div className="h-32 w-32 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Profile" 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Your Name</h1>
                <p className="text-gray-600 mt-1">Full Stack Web Developer</p>
                <div className="mt-4">
                  <Button className="gap-2">
                    <Download size={16} /> Download Resume
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-700">
                    I'm a passionate full-stack web developer with over 5 years of experience creating modern web applications.
                    I specialize in React, TypeScript, Node.js, and modern front-end frameworks. My focus is on building
                    clean, efficient, and user-friendly applications that solve real-world problems.
                  </p>
                  <p className="text-gray-700 mt-4">
                    I enjoy working on challenging projects that push my skills to new heights and allow me to learn new
                    technologies. When I'm not coding, you can find me hiking, reading, or exploring new coffee shops.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Experience</h2>
                  <div className="space-y-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">Senior Frontend Developer</h3>
                            <p className="text-gray-600">Tech Company Inc.</p>
                          </div>
                          <div className="text-gray-600">2020 - Present</div>
                        </div>
                        <p className="text-gray-700">
                          Led the frontend development team in building a modern SaaS application using React, TypeScript, and Tailwind CSS.
                          Implemented CI/CD pipelines and improved application performance by 40%.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">Web Developer</h3>
                            <p className="text-gray-600">Digital Agency LLC</p>
                          </div>
                          <div className="text-gray-600">2018 - 2020</div>
                        </div>
                        <p className="text-gray-700">
                          Developed and maintained client websites and web applications using React, Node.js, and MongoDB.
                          Collaborated with designers to implement responsive and accessible user interfaces.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-2xl font-bold mb-4">Education</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg">Bachelor of Science in Computer Science</h3>
                          <p className="text-gray-600">University Name</p>
                        </div>
                        <div className="text-gray-600">2014 - 2018</div>
                      </div>
                      <p className="text-gray-700">
                        Graduated with honors. Specialized in Web Development and Software Engineering.
                      </p>
                    </CardContent>
                  </Card>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
