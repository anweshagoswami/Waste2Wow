import React, { useState, useEffect } from "react";
import { Sparkles, Package, RefreshCw, ArrowRight, Camera, Leaf, Globe } from "lucide-react";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Testimonial rotation
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const testimonials = [
    {
      text: "The lamp made from my old computer parts is now the statement piece in my living room!",
      author: "Sarah K."
    },
    {
      text: "I never thought my broken smartphone could become such beautiful jewellery. Absolutely stunning!",
      author: "Michael T."
    },
    {
      text: "The desk organizer made from recycled electronics is both functional and a conversation starter.",
      author: "Jamie L."
    }
  ];

  const products = [
    {
      name: "Home Decor",
      price: "$129",
      description: "Art from ICs, motherboards",
      image: "/images/Electronic Tree of Life.png"
    },
    {
      name: "Necklace",
      price: "$59",
      description: "Where tech meets creativity",
      image: "/images/Necklace.jpeg"
    },
    {
      name: "Lamp",
      price: "$89",
      description: "Illuminated design from obsolete boards",
      image: "/images/product1.jpg"
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <header className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? "py-2 bg-white/90 shadow-md backdrop-blur-sm" : "py-4 bg-transparent"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            
           <img
             src="/images/logo.png"
             alt="Waste2Wow logo"
             className="w-10 h-10 object-contain"
           />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-500 bg-clip-text text-transparent">
              Waste2Wow
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["How It Works", "Products", "Impact", "Donate"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-emerald-800 hover:text-emerald-600 font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Join Us
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-medium text-sm mb-4">
                Sustainable • Creative • Impactful
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-emerald-800 via-teal-600 to-green-500 bg-clip-text text-transparent">
                Think Beyond the Bin – <br />Think Wow! <span className="relative">
                  
                  <span className="absolute -top-6 right-0 text-yellow-400">
                    <Sparkles size={24} />
                  </span>
                </span>
              </h2>
              <p className="text-lg text-emerald-700 max-w-lg">
                From discarded electronics to stunning creations – we transform today's waste into tomorrow's treasures. Join our mission to revolutionize recycling.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Sell/Customize Your E-Waste <ArrowRight size={16} />
                </button>
                <button className="border-2 border-emerald-600 text-emerald-700 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-all duration-300">
                  Explore Products
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-emerald-${400 + i * 100}`}></div>
                  ))}
                </div>
                <p className="text-sm text-emerald-700">
                  <span className="font-bold">2,500+</span> items recycled this month
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400 to-teal-300 rounded-full absolute blur-3xl opacity-20 -z-10 top-0 right-0"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img src="\images\Bracelet.jpeg" alt="Bracelet" className="rounded-lg object-cover w-full h-32" />
                  <p className="mt-2 font-medium text-emerald-800">Bracelet</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
                  <img src="\images\Tech Jewellery.jpeg" alt="Trendy Necklace" className="rounded-lg object-cover w-full h-32" />
                  <p className="mt-2 font-medium text-emerald-800">Trendy Necklace</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img src="\images\Electronic Tree of Life.png" alt="Home Decor" className="rounded-lg object-cover w-full h-32" />
                  <p className="mt-2 font-medium text-emerald-800">Home Decor</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
                  <img src="\images\Earring.jpeg" alt="Earring" className="rounded-lg object-cover w-full h-32" />
                  <p className="mt-2 font-medium text-emerald-800">Earring</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="how-it-works" className="py-20 px-6 bg-gradient-to-br from-white to-emerald-50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-emerald-600 text-lg font-medium mb-2">OUR PROCESS</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">How We Create the Wow</h2>
              <p className="text-emerald-700 max-w-lg mx-auto">
                Our three-step journey transforms electronic waste into stunning, functional art pieces that inspire and amaze.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Package className="text-emerald-500" />,
                  title: "Collect",
                  description: "We gather e-waste from individuals and businesses, diverting it from landfills.",
                  number: "01"
                },
                {
                  icon: <RefreshCw className="text-emerald-500" />,
                  title: "Transform",
                  description: "Our skilled artisans disassemble and repurpose components into beautiful designs.",
                  number: "02"
                },
                {
                  icon: <Sparkles className="text-emerald-500" />,
                  title: "Wow",
                  description: "The final pieces showcase the beauty hidden within discarded technology.",
                  number: "03"
                }
              ].map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 text-9xl font-bold text-emerald-50 group-hover:text-emerald-100 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {React.cloneElement(step.icon, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">{step.title}</h3>
                  <p className="text-emerald-700">{step.description}</p>
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-teal-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section id="products" className="py-20 px-6 bg-emerald-900 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-emerald-300 text-lg font-medium mb-2">OUR CREATIONS</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Extraordinary Products</h2>
              <p className="text-emerald-100 max-w-lg mx-auto">
                Each piece tells a story of transformation and sustainability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-emerald-800/50 backdrop-blur-sm rounded-2xl p-6 hover:shadow-emerald-900/50 hover:shadow-lg transition-all group">
                  <div className="h-56 rounded-xl bg-emerald-700/50 mb-6 overflow-hidden relative">
                  <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
                    <div className="absolute top-3 right-3 bg-emerald-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera size={18} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-emerald-200 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <button className="bg-emerald-500 hover:bg-emerald-400 px-4 py-2 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-white text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-100 transition-colors">
                Browse All Products
              </button>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-emerald-600 text-lg font-medium mb-2">OUR IMPACT</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Making a Difference</h2>
              <p className="text-emerald-700 max-w-lg mx-auto">
                Every item diverts waste from landfills and reduces the need for new resource extraction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex gap-8 mb-8">
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-emerald-600">15K+</h4>
                    <p className="text-emerald-800">Pounds of E-Waste</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-emerald-600">3K+</h4>
                    <p className="text-emerald-800">Items Created</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-4xl font-bold text-emerald-600">25+</h4>
                    <p className="text-emerald-800">Local Jobs</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Leaf size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-emerald-800">Environmental Protection</h5>
                      <p className="text-emerald-700">Diverting harmful materials from landfills</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <Globe size={24} className="text-emerald-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-emerald-800">Resource Conservation</h5>
                      <p className="text-emerald-700">Reducing the need for new raw materials</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-100 rounded-2xl -rotate-3 transform"></div>
                <div className="absolute inset-0 bg-emerald-200 rounded-2xl rotate-1 transform"></div>
                <div className="relative bg-white rounded-2xl shadow-lg p-8 z-10">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-6">What Our Customers Say</h3>
                  
                  <div className="relative h-40">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ${
                          index === activeTestimonial 
                            ? "opacity-100 translate-x-0" 
                            : "opacity-0 translate-x-8"
                        }`}
                      >
                        <p className="text-emerald-700 italic mb-4">"{testimonial.text}"</p>
                        <p className="font-medium text-emerald-800">— {testimonial.author}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {testimonials.map((_, index) => (
                      <button 
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeTestimonial ? "bg-emerald-500" : "bg-emerald-200"
                        }`}
                        onClick={() => setActiveTestimonial(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-emerald-800 to-teal-700 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Waste into Wonder?</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
              Whether you're donating e-waste or shopping for unique creations, you're part of the solution.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-100 transition-colors shadow-lg hover:shadow-xl">
                Sell/Customize Your E-Waste
              </button>
              <button className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Shop Our Collection
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-emerald-900 text-emerald-100 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
               
           <img
             src="/images/logo.png"
             alt="Waste2Wow logo"
             className="w-10 h-10 object-contain"
           />
                <h3 className="text-xl font-bold text-white">Waste2Wow</h3>
              </div>
              <p className="mb-6">
                Transforming electronic waste into beautiful, functional art pieces while making a positive impact on our planet.
              </p>
              <div className="flex gap-4">
                {["facebook", "instagram", "twitter", "youtube"].map(social => (
                  <a key={social} href="#" className="bg-emerald-800 p-2 rounded-full hover:bg-emerald-700 transition-colors">
                    <div className="w-5 h-5 bg-emerald-100 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "How It Works", "Products", "Impact", "FAQ"].map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>hello@waste2wow.com</li>
                <li>(555) 123-4567</li>
                <li>123 Green Street, Eco City</li>
              </ul>
            </div>
            
            <div className="md:w-1/4">
              <h4 className="font-bold text-white mb-4">Newsletter</h4>
              <p className="mb-4">Stay updated with our latest creations and sustainability tips.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-lg flex-grow text-emerald-800 focus:outline-none" 
                />
                <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-300">
            <p>&copy; 2025 Waste2Wow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}