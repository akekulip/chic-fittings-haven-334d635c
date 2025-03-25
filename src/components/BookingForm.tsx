
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "bridal-consultation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Booking request submitted successfully! We'll contact you soon to confirm your appointment.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        serviceType: "bridal-consultation",
        message: "",
      });
    }, 1500);
  };

  const serviceTypes = [
    { id: "bridal-consultation", label: "Bridal Consultation" },
    { id: "custom-design", label: "Custom Design Session" },
    { id: "fitting", label: "Fitting Session" },
    { id: "styling", label: "Personal Styling" },
    { id: "alterations", label: "Alterations" },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              placeholder="Your full name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              placeholder="Your email address"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              placeholder="Your phone number"
            />
          </div>
        </div>

        {/* Service Type */}
        <div className="space-y-2">
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700">
            Service Type
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="block w-full px-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
          >
            {serviceTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Preferred Date
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
          </div>
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Preferred Time
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Clock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Additional Information
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            <MessageSquare className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-black focus:border-black sm:text-sm"
            placeholder="Tell us about your requirements or any specific details"
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full bg-black text-white py-3 px-6 transition-all duration-300",
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
        )}
      >
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By submitting this form, you agree to be contacted regarding your appointment request.
        We'll reach out to you within 24 hours to confirm your booking.
      </p>
    </form>
  );
};

export default BookingForm;
