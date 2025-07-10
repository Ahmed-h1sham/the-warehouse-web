import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import emailjs from "emailjs-com";

const GetStarted = () => {
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7etjxpb',
        'template_yce1az9',
        e.target,
        'k8SZP28IWIUPKcGOT'
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
          navigate("/");
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  const Button = ({ children, className = "", size = "default", variant = "default", ...props }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    const sizeClasses = {
      default: "h-10 py-2 px-4",
      lg: "h-11 px-8 rounded-md",
    };

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/wh-logo-primary.jpg" alt="The Warehouse Logo" className="h-12 w-12 mr-3" />
            <div className="text-2xl font-bold text-white">
              The <span className="text-yellow-400">Warehouse</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => navigate("/")} className="text-gray-400 hover:text-white">Home</button>
            <button onClick={() => navigate("/#services")} className="text-gray-400 hover:text-white">Services</button>
            <button onClick={() => navigate("/#contact")} className="text-gray-400 hover:text-white">Contact</button>
          </nav>
          <Button onClick={() => navigate("/get-started")} className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
            Get Started
          </Button>
        </div>
      </header>

      {/* Form Section */}
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-2xl bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-800">
          <h2 className="text-4xl font-bold mb-8 text-yellow-400 text-center">Get In Touch With Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1 text-gray-300">Name</label>
              <input name="name" type="text" placeholder="Your name" required className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Phone Number</label>
              <input name="phone" type="text" placeholder="+20 123 456 789" required className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Company Name</label>
              <input name="company" type="text" placeholder="Your company" required className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Email</label>
              <input name="email" type="email" placeholder="you@example.com" required className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <div>
              <label className="block text-sm mb-1 text-gray-300">Subject</label>
              <textarea name="message" rows={4} placeholder="Tell us how we can help you" required className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-500 text-lg transition-transform hover:scale-105">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Logistics?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let The Warehouse handle your warehousing and fulfillment while you focus on growing your business.
        </p>
        <Button
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-3"
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
        >
          Back to Home
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/wh-logo-primary.jpg" alt="The Warehouse Logo" className="h-8 w-8 mr-2" />
                <div className="text-2xl font-bold">
                  The <span className="text-yellow-400">Warehouse</span>
                </div>
              </div>
              <p className="text-gray-400">Your trusted warehousing and fulfillment partner in Egypt.</p>
              <p className="text-gray-500 text-sm mt-2">Backend Operations</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Stock Reception</li>
                <li>Inventory Management</li>
                <li>Order Fulfillment</li>
                <li>Returns Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <a href="https://maps.app.goo.gl/3Nhc6VMTe4PqxM4i8?g_st=com.google.maps.preview.copy" target="_blank" className="hover:underline text-gray-400">First Settlement, 8th district</a>
                <li><a href="mailto:thewarehouse.ops@outlook.com" className="hover:underline text-gray-400">thewarehouse.ops@outlook.com</a></li>
                <li><a href="tel:+201008766506" className="hover:underline text-gray-400">+20 1008766506</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Warehouse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
