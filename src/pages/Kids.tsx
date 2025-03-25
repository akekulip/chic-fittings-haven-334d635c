
import { Baby, Star, Heart, Gift } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Kids = () => {
  // Sample kids collection data
  const kidsCollections = [
    {
      id: "kids-1",
      title: "Playful Elegance",
      description: "Comfortable yet stylish outfits perfect for special occasions",
      imageUrl: "/lovable-uploads/9bb61cf7-d6f5-4a65-bbdc-4546c5eeb00f.png",
      category: "Formal",
    },
    {
      id: "kids-2",
      title: "Casual Comfort",
      description: "Everyday wear that combines comfort and durability",
      imageUrl: "/lovable-uploads/76befe32-22eb-4360-8722-ce0e62f04767.png",
      category: "Casual",
    },
    {
      id: "kids-3",
      title: "Celebration Attire",
      description: "Beautiful designs for birthdays and celebrations",
      imageUrl: "/lovable-uploads/e764a0b5-b039-4f31-8551-ecf8414840ab.png",
      category: "Party",
    },
    {
      id: "kids-4",
      title: "Traditional Touch",
      description: "Cultural designs with modern comfort for little ones",
      imageUrl: "/lovable-uploads/8cf8ac07-701f-43a8-a009-4710b938538f.png",
      category: "Traditional",
    },
    {
      id: "kids-5",
      title: "School Style",
      description: "Durable and comfortable uniforms and school attire",
      imageUrl: "/lovable-uploads/e8e8b45a-7085-48e5-ad4b-55c7dcb3758b.png",
      category: "School",
    },
    {
      id: "kids-6",
      title: "Family Match",
      description: "Coordinated outfits for the whole family",
      imageUrl: "/lovable-uploads/a886495d-861a-409f-8788-c3c281fc558c.png",
      category: "Family",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with the logo */}
      <HeroSection 
        title=""
        subtitle=""
        backgroundImage="/lovable-uploads/dae44d6a-a313-458d-860a-3f1ab738b729.png"
        overlay={false}
        minHeight="min-h-[60vh]"
      />

      {/* Welcome Section */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/dae44d6a-a313-458d-860a-3f1ab738b729.png" 
              alt="Derby's Kids Avenue Logo" 
              className="h-32 mx-auto"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-display text-purple-800 mb-6">Welcome to Our Kids' Fashion World</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
            At Derby's Kids Avenue, we create adorable, comfortable, and stylish clothing for children of all ages. 
            Our designs combine playful elements with quality craftsmanship to ensure your little ones look and feel their best.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <div className="flex flex-col items-center max-w-xs p-6 bg-white rounded-lg shadow-md">
              <Baby className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-medium text-purple-700 mb-2">Comfort First</h3>
              <p className="text-gray-600 text-center">Soft fabrics and child-friendly designs for maximum comfort</p>
            </div>
            <div className="flex flex-col items-center max-w-xs p-6 bg-white rounded-lg shadow-md">
              <Star className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-medium text-purple-700 mb-2">Quality Materials</h3>
              <p className="text-gray-600 text-center">Durable, breathable fabrics that withstand active play</p>
            </div>
            <div className="flex flex-col items-center max-w-xs p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-medium text-purple-700 mb-2">Thoughtful Designs</h3>
              <p className="text-gray-600 text-center">Age-appropriate styles that children love to wear</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <GalleryGrid 
            collections={kidsCollections}
            title="Our Kids Collections"
            subtitle="Discover our range of children's fashion for every occasion"
            columns={3}
          />
        </div>
      </section>

      {/* Special Orders Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-100 to-pink-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-purple-800 mb-6">Special Orders</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
            Need something unique for a special occasion? We offer custom-designed children's outfits 
            for birthdays, cultural events, and celebrations.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <Gift className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-medium text-purple-700 mb-4">Celebrate in Style</h3>
            <p className="text-gray-600 mb-8">
              From birthday parties to religious ceremonies, we create memorable outfits 
              that make your little ones feel special while ensuring they stay comfortable throughout the event.
            </p>
            <Link to="/booking">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-full">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Size Guide and Care Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display text-purple-800 mb-6">Size Guide</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Age</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Height (cm)</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Chest (cm)</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-purple-800">Waist (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">1-2 years</td>
                      <td className="px-4 py-3 text-sm text-gray-700">80-92</td>
                      <td className="px-4 py-3 text-sm text-gray-700">50-52</td>
                      <td className="px-4 py-3 text-sm text-gray-700">48-50</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">3-4 years</td>
                      <td className="px-4 py-3 text-sm text-gray-700">92-104</td>
                      <td className="px-4 py-3 text-sm text-gray-700">53-55</td>
                      <td className="px-4 py-3 text-sm text-gray-700">51-53</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">5-6 years</td>
                      <td className="px-4 py-3 text-sm text-gray-700">104-116</td>
                      <td className="px-4 py-3 text-sm text-gray-700">56-58</td>
                      <td className="px-4 py-3 text-sm text-gray-700">54-56</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">7-8 years</td>
                      <td className="px-4 py-3 text-sm text-gray-700">116-128</td>
                      <td className="px-4 py-3 text-sm text-gray-700">59-63</td>
                      <td className="px-4 py-3 text-sm text-gray-700">57-59</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">9-10 years</td>
                      <td className="px-4 py-3 text-sm text-gray-700">128-140</td>
                      <td className="px-4 py-3 text-sm text-gray-700">64-68</td>
                      <td className="px-4 py-3 text-sm text-gray-700">60-62</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display text-purple-800 mb-6">Care Instructions</h3>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-pink-600 text-sm font-medium">1</span>
                    </div>
                    <p className="text-gray-700">Machine wash using cold water (30°C) on a gentle cycle</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-pink-600 text-sm font-medium">2</span>
                    </div>
                    <p className="text-gray-700">Use mild detergents specifically made for children's clothing</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-pink-600 text-sm font-medium">3</span>
                    </div>
                    <p className="text-gray-700">Avoid using bleach or harsh chemicals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-pink-600 text-sm font-medium">4</span>
                    </div>
                    <p className="text-gray-700">Tumble dry on low heat or air dry for best results</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-1">
                      <span className="text-pink-600 text-sm font-medium">5</span>
                    </div>
                    <p className="text-gray-700">Iron on low heat if necessary, and always from the inside</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kids;
