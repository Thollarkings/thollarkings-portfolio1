
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          <div className="mb-8 text-lg text-gray-700">
            <p>Feel free to reach out to me directly:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Email: mediaxtreme1@gmail.com</li>
              <li>Phone: +234-8065970017, +234-9071333340</li>
            </ul>
          </div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
