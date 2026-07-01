import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";


function Contact() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Request sent successfully!");
        },
        () => {
          alert("Failed to send. Try again.");
        }
      );

    e.target.reset();
  };

  const faqs = [
    {
      q: "Is East Africa safe to visit?",
      a: "Yes. Safari regions are well managed with trained guides ensuring safe travel throughout your trip.",
    },
    {
      q: "When is the best time to go on safari?",
      a: "June to October is ideal for wildlife viewing and the Great Migration, but safaris run all year.",
    },
    {
      q: "What is included in your safari packages?",
      a: "Transport, guide, park fees, accommodation and game drives depending on your package.",
    },
    {
      q: "How do I book and is a deposit required?",
      a: "A small deposit confirms booking. Balance is paid before or on arrival.",
    },
  ];

  return (
    <div className="bg-black text-white">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[6px] text-yellow-400 mb-4">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Plan Your Safari Experience
            </h1>

            <p className="text-gray-400 leading-8 mb-10">
              Custom safari planning, professional guides, and unforgettable East African adventures tailored to your needs.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>📍 Kajiado, Kenya</p>
              <p>📞  +254717554177</p>
              <p>✉ info@renlentours.com</p>
            </div>

            <a
              href="https://wa.me/+254717554177"
              className="inline-block mt-10 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* FORM */}
          <div className="bg-white text-black rounded-3xl p-10 shadow-2xl">
            <h2 className="text-2xl font-bold mb-6">
              Request Safari Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
                required
              />

              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
                required
              />

              <select
                name="vehicle"
                className="w-full border rounded-xl px-4 py-3"
                required
              >
                <option>Select Safari Type</option>
                <option>Private Safari</option>
                <option>Group Safari</option>
                <option>Luxury Safari</option>
                <option>Budget Safari</option>
              </select>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us your safari dream"
                className="w-full border rounded-xl px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-xl"
              >
                Send Request
              </button>

            </form>
          </div>
        </div>
      </motion.section>

      {/* ================= MAP ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Visit Our Office
          </h2>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800">
            <iframe
              title="Map"
               src="https://www.google.com/maps?q=Renlen%20Tours%20and%20Safaris%20Kajiado&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black">

        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-extrabold mb-4">
            Common Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know before your safari.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-2xl bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between px-6 py-5 text-left"
              >
                <span className="text-yellow-300 font-semibold">
                  {item.q}
                </span>
                <span>{openFAQ === i ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-300 overflow-hidden"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 px-6 text-center relative">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready for Your Africa Adventure?
          </h2>

          <p className="text-gray-400 mb-10">
            Get a custom safari itinerary designed for your budget and travel style.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="https://wa.me/+254717554177"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl"
            >
              Get Free Quote
            </a>

            <a
              href="https://wa.me/+254717554177"
              className="bg-white/10 border border-white/20 hover:bg-white hover:text-black px-8 py-4 rounded-xl"
            >
              Speak to Expert
            </a>

          </div>

          <p className="text-xs text-gray-500 mt-6">
            Free consultation · Response within 1 hour
          </p>
        </div>
      </section>

      {/* ================= FLOAT WHATSAPP ================= */}
      
      {/* ================= FOOTER ================= */}
<footer className="relative overflow-hidden bg-black text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
  
      {/* Brand */}
      <div>
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">
          Renlen Tours and safaris
        </h2>
  
        <p className="text-xs text-gray-500 mb-1">
          Website designed & developed by Dennis Musa
        </p>
  
        <p className="text-gray-400 leading-8 mb-3">
          Professional safari vehicle hire services in kajiado ,kenya. Safe, comfortable, and unforgettable safari experiences.
        </p>
  
        <a
          href="https://dennismusa.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-500 hover:underline text-sm font-semibold"
        >
          View Developer Portfolio
        </a>
      </div>
  
      {/* Links */}
      <div>
        <h3 className="text-xl font-bold mb-5">Quick Links</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition">
              Home
            </Link>
          </li>
  
          <li>
            <Link to="/vehicles" className="hover:text-yellow-500 transition">
              Fleet
            </Link>
          </li>
  
          <li>
            <Link to="/gallery" className="hover:text-yellow-500 transition">
              Gallery
            </Link>
          </li>
  
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
  
      {/* Services */}
      <div>
        <h3 className="text-xl font-bold mb-5">Services</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>Safari Vehicle Hire</li>
          <li>Airport Transfers</li>
          <li>Group Tours</li>
          <li>Private Safari Trips</li>
        </ul>
      </div>
  
      {/* Contact */}
      <div>
        <h3 className="text-xl font-bold mb-5">Contact Info</h3>
  
        <ul className="space-y-4 text-gray-400">
          <li>📍 Kajiado, Kenya</li>
          <li>📞 +254717554177</li>
          <li>✉ renlentours@gmail.com</li>
        </ul>
  
        <a
          href="https://wa.me/+254717554177"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-lg transition"
        >
          WhatsApp Booking
        </a>
      </div>
    </div>
  
    {/* Bottom */}
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
      © 2026 Renlen Tours and safaris . All Rights Reserved.
    </div>
  </footer>

    </div>
  );
}

export default Contact;