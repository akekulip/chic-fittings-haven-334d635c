
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import { Clock, Calendar, CreditCard, Scissors } from "lucide-react";

const Booking = () => {
  const bookingSteps = [
    {
      icon: <Calendar className="w-10 h-10" />,
      title: "Schedule",
      description: "Choose your preferred date and time for your appointment.",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Consultation",
      description: "Meet with our designers to discuss your vision and requirements.",
    },
    {
      icon: <Scissors className="w-10 h-10" />,
      title: "Creation",
      description: "Our team carefully crafts your design with precision and care.",
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Fitting",
      description: "Return for a fitting to ensure your garment is perfect in every detail.",
    },
  ];

  return (
    <main className="page-transition">
      <HeroSection
        title="Book Your Appointment"
        subtitle="Schedule a personalized consultation with our design team to bring your vision to life."
        backgroundImage="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
        minHeight="min-h-[60vh]"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium">Our Process</h2>
            <div className="divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From consultation to creation, we ensure a seamless and enjoyable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-black mb-5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium">Request an Appointment</h2>
            <div className="divider"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the form below to schedule your consultation. Our team will contact you to confirm your appointment.
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-100 p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-medium mb-4 text-center">Appointment Information</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Location:</strong> Design Studio, Sunyani Accra, Ghana
              </p>
              <p className="text-gray-700">
                <strong>Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Duration:</strong> Initial consultations typically last 60-90 minutes
              </p>
              <p className="text-gray-700">
                <strong>What to Bring:</strong> Any inspiration images, fabric samples, or existing garments that inspire your vision
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Booking;
