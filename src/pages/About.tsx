
import HeroSection from "@/components/HeroSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Craftsmanship",
      description: "We honor traditional techniques while embracing innovation, ensuring each piece meets the highest standards of quality.",
    },
    {
      title: "Individuality",
      description: "We celebrate uniqueness, creating designs that reflect and enhance your personal style and character.",
    },
    {
      title: "Sustainability",
      description: "We prioritize ethical practices and mindful resource use, creating timeless pieces meant to last.",
    },
    {
      title: "Attention to Detail",
      description: "We believe that perfection lies in the details, meticulously crafting every element of our designs.",
    },
  ];

  return (
    <main className="page-transition">
      <HeroSection
        title="About Derby"
        subtitle="Meet the designer behind the brand and discover our philosophy and approach to fashion."
        backgroundImage="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
        minHeight="min-h-[60vh]"
      />

      {/* Designer Bio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">The Designer</h2>
              <p className="text-gray-700 mb-4">
                Derby, the creative force behind Design By Derby, has been passionate about fashion since childhood. With formal training at prestigious fashion schools and years of industry experience, Derby has developed a signature style that blends contemporary aesthetics with timeless elegance.
              </p>
              <p className="text-gray-700 mb-4">
                Based in Sunyani Accra, Derby's designs have been featured in numerous fashion events and publications across Ghana and internationally. Each creation reflects Derby's commitment to exceptional craftsmanship and attention to detail.
              </p>
              <p className="text-gray-700">
                "Fashion is not just about creating beautiful garments; it's about crafting experiences and memories. When someone wears one of my designs, I want them to feel confident, beautiful, and true to themselves."
              </p>
              <p className="text-gray-500 mt-4 italic">— Derby</p>
            </div>
            <div>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                  alt="Designer Derby" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium mb-6">Our Story</h2>
            <div className="divider"></div>
            <p className="text-gray-700 mb-4">
              Design By Derby was founded in 2015 with a vision to create bespoke fashion that celebrates individuality and craftsmanship. What began as a small atelier creating custom pieces for friends and family quickly grew into a respected brand known for its distinctive designs and personalized service.
            </p>
            <p className="text-gray-700 mb-4">
              Through the years, we've had the privilege of designing for special occasions that mark significant moments in our clients' lives – from wedding gowns that make brides feel radiant on their special day to evening wear that gives confidence for important events.
            </p>
            <p className="text-gray-700">
              Today, Design By Derby continues to grow, but our foundational values remain unchanged. Each garment is still crafted with the same care, attention to detail, and passion for creating something truly special and meaningful.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium">Our Values</h2>
            <div className="divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our creative process and business practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-medium mb-6">Experience the Difference</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the Design By Derby difference with a personalized consultation. Let us help you create a piece that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
            >
              <span>Explore Collections</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center bg-white border border-black text-black px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              <span>Book Appointment</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
