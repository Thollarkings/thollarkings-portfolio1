
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Oyeniyi Omotola</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Contact Information:</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Phone: +234-8065970017, +234-9071333340</li>
                  <li>Email: mediaxtreme1@gmail.com</li>
                  <li>Address: Apartment 11B, Zone D, BCGA, off Queens School, Ibadan</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-gray-700">
                Front-end developer with 5+ years of experience Web development and React.
                Skilled in building scalable, user-friendly applications.
                Transitioned from agricultural research to pursue software development.
                Seeking front-end role in forward-thinking IT company, particularly in SaaS or e-commerce.
                Actively engaged in professional development and open-source projects, expanding skills to
                become proficient backend developer and aspiring full-stack developer.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="border-0 shadow-lg mt-8">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-semibold text-gray-900">Technical Skills:</p>
                <p className="text-gray-700">HTML, CSS, JavaScript, React, Python, Node.js, Express, Git, GitHub, AWS, IBM Cloud, Figma</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Soft Skills:</p>
                <p className="text-gray-700">Problem-solving, teamwork, communication, project management, UI/UX, web design, graphic design</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
