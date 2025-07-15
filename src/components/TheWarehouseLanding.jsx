"use client"

import { ArrowRight, CheckCircle, Package, BarChart3, Truck, RotateCcw, MapPin } from "lucide-react"
import { useNavigate } from "react-router-dom";

// Simple Button component
const Button = ({ children, className = "", size = "default", variant = "default", ...props }) => {

  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

  const sizeClasses = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 rounded-md",
  }

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Simple Card components
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
)

const TheWarehouseLanding = () => {
  const services = [
    {
      icon: Package,
      title: "Stock Reception & Storage",
      description:
        "We receive your stock directly from factories and store it in our secure, organized warehouse with real-time inventory updates.",
    },
    {
      icon: BarChart3,
      title: "Inventory Management",
      description:
        "Stay informed with real-time inventory tracking. Maintain accurate stock levels with our shared dashboard for full visibility.",
    },
    {
      icon: Truck,
      title: "Order Fulfillment",
      description:
        "From packing to dispatch, we handle customer orders with precision, ensuring fast and error-free fulfillment.",
    },
    {
      icon: RotateCcw,
      title: "Returns Management",
      description:
        "We handle returns for you—receiving, inspecting, and restocking returned items to keep operations smooth.",
    },
    {
      icon: MapPin,
      title: "Stock Distribution & Allocation",
      description:
        "Efficiently allocate stock to retail locations, ensuring the right quantities reach the right stores on time.",
    },
  ]
const navigate = useNavigate();

  const benefits = [
    "End-to-end logistics support",
    "Accurate & real-time inventory tracking",
    "Faster, hassle-free fulfillment",
    "Scalability to grow with your brand",
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/wh-logo-primary.jpg" alt="The Warehouse Logo" className="h-12 w-12 mr-3" />
            <div className="text-3xl font-bold text-white">
            <span className="text-yellow-400">The Warehouse</span>
            <span className="flex items-left px-1 text-xs text-grey">The Engine Behind Your Business</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>
          <Button
  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
  onClick={() => navigate("/get-started")}
>
  Get Started
</Button>

        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black-700 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            From Stock to Ship,
            <br />
            <span className="text-yellow-400">We Handle It All</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From stock reception to smart warehousing, seamless distribution, and precise order fulfillment— The
            Warehouse gets it stored, sorted, and shipped!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-3"
              onClick={() => navigate("/get-started")}
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="border-yellow-600 text-yellow-600 hover:bg-yellow-400 hover:text-white text-lg px-8 py-3 bg-transparent cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <br>
      </br>
      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At The Warehouse, we streamline inventory management, warehousing, and order fulfillment, allowing
              business owners to focus on growth while we handle their logistics & operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-black-900 border-yellow-800 hover:border-yellow-400 transition-colors duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-xl text-yellow-400">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose The Warehouse */}
      <section className="py-20 bg-black-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-6">Why Choose The Warehouse?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let us handle the operations while you focus on building your business. Our end-to-end solutions ensure
                efficiency, accuracy, and reliability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-200 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-950 p-8 rounded-2xl shadow-lg border border-gray-700">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="h-10 w-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Join businesses across Egypt who trust The Warehouse with their logistics operations.
                </p>
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold" onClick={() => navigate("/get-started")} >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
<hr></hr>
      {/* Trusted By Section */}
<section className="py-16 bg-black-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Trusted by Leading Brands</h2>
      <p className="text-gray-300 text-lg">
        Join the growing list of successful businesses that trust The Warehouse with their logistics operations
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
      {[...Array(17)].map((_, i) => (
        <div
          key={i}
          className="bg-white p-3 rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center justify-center w-24 h-24"
        >
          <img
            src={`/images/client-logo-${i + 1}.png`}
            alt={`Client Logo ${i + 1}`}
            className="max-h-16 object-contain"
          />
        </div>
      ))}

      {/* Plus Sign Slot */}
      <div className="bg-white p-3 rounded-lg hover:shadow-lg transition-shadow duration-300 flex items-center justify-center w-24 h-24">
        <span className="text-3xl font-bold text-gray-700">+</span>
            </div>
            </div>
        </div>
    </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8">Who We Are</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              The Warehouse is a leading warehousing and fulfillment partner based in Egypt, dedicated to streamlining
              inventory management, distribution, and order fulfillment for all businesses. Built with a vision to
              optimize supply chain operations, we offer end-to-end logistics solutions.
            </p>

            <div className="bg-gray-600/20 rounded-2xl p-8 mb-8 border border-yellow-600/30">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                At The Warehouse, our mission is to redefine warehousing and fulfillment with a focus on efficiency,
                accuracy, and seamless operations. We are committed to providing businesses with transparent, reliable,
                and scalable logistics solutions that empower them to grow with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let The Warehouse handle your warehousing and fulfillment while you focus on growing your business.
          </p>
            <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-3"
                onClick={() => navigate("/get-started")}
            >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/images/wh-logo-primary.jpg" alt="The Warehouse Logo" className="h-8 w-8 mr-2" />
                <div className="text-2xl font-bold">
                <span className="text-yellow-400">The Warehouse</span>
                </div>
              </div>
              <p className="text-gray-400">Your trusted warehousing and fulfillment partner in Egypt.</p>
              <p className="text-gray-500 text-sm mt-2">Backend Operations</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Stock Reception</li>
                <li>Inventory Management</li>
                <li>Order Fulfillment</li>
                <li>Returns Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Mission</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <a href="https://maps.app.goo.gl/3Nhc6VMTe4PqxM4i8?g_st=com.google.maps.preview.copy" target="_blank" className="hover:underline text-gray-400">First Settlement, 8th district</a>
                <li>
                  <a href="mailto:thewarehouse.ops@outlook.com" className="hover:underline text-gray-400">
                    thewarehouse.ops@outlook.com
                  </a>
                </li>
                <li>
                  <a href="tel:+201008766506" className="hover:underline text-gray-400">
                    +20 1008766506
                  </a>
                </li>
             </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Warehouse. All rights reserved.</p>
            <br></br>
            <a href="mailto:ahmedhabdelfattah2@gmail.com" className="hover:underline text-gray-400">Contact Developer</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TheWarehouseLanding
