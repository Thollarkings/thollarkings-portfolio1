
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to Cloud Computing",
      image: "https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-3830.jpg",
      link: "https://www.coursera.org/account/accomplishments/records/9SQHNYJ4N4DH"
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      image: "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
      link: "https://www.coursera.org/account/accomplishments/records/BKWBZ2895DCU"
    },
    {
      title: "Getting Started with Git and GitHub",
      image: "https://img.freepik.com/free-vector/code-typing-concept-illustration_114360-3866.jpg",
      link: "https://www.coursera.org/account/accomplishments/records/ASWDZD5MPDST"
    },
    {
      title: "Developing Front-End Apps with React",
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
      link: "https://www.coursera.org/account/accomplishments/records/RDW29KQZQQRT"
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      image: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg",
      link: "https://www.coursera.org/account/accomplishments/records/F0RIYAXPDVJ1"
    },
    {
      title: "Python for Data Science, AI & Development",
      image: "images/python.png",
      link: "https://www.coursera.org/account/accomplishments/records/31M8ZIEZ7XIN"
    },
    {
      title: "React Basics",
      image: "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg",
      link: "https://www.coursera.org/account/accomplishments/records/WXY6NZ7658N5"
    },
    {
      title: "Advanced React",
      image: "images/reactw.png",
      link: "https://www.coursera.org/account/accomplishments/records/WXY6NZ7658N5"
    },
    {
      title: "JavaScript Basics",
      image: "images/javascript.png",
      link: "https://www.coursera.org/account/accomplishments/records/ORLFTEB8SXKR"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Certifications</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and courses I've completed to advance my skills and knowledge.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <a 
              key={index} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transform transition hover:scale-105"
            >
              <Card className="h-full overflow-hidden border hover:shadow-lg transition-shadow duration-300">
                <div className="w-full">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-sm text-blue-600">
                  View Certificate
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
