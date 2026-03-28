"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      values: ["+91 9953101176", "+91 8700170483"],
      href: "tel:+919953101176",
    },
    {
      icon: Mail,
      label: "Email",
      values: ["ravindrasiasdelhi@gmail.com"],
      href: "mailto:ravindrasiasdelhi@gmail.com",
    },
    {
      icon: MapPin,
      label: "Locations",
      values: [
        "Delhi: Ansal Building, Mukherjee Nagar",
        "Gwalior: Krishna Tower, Phoolbagh Chauraha",
      ],
      href: "#",
    },
  ];

  return (
    <>
      {/* Desktop Sticky Bar */}
      <div className="hidden lg:fixed lg:right-6 lg:bottom-6 lg:z-40 lg:block">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-4 glass rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-xl max-w-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-semibold">Get In Touch</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {contactDetails.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={index}
                      href={detail.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-[#22D3EE] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-300 group-hover:text-white">
                          {detail.label}
                        </p>
                        <div className="text-xs text-gray-400">
                          {detail.values.map((value, idx) => (
                            <p key={idx}>{value}</p>
                          ))}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] text-white shadow-lg hover:shadow-xl transition-shadow glow"
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: 0 }}
                exit={{ rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronUp className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="phone"
                initial={{ rotate: 0 }}
                exit={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Phone className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <a
              href="tel:+919953101176"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 group-hover:from-[#6366F1]/30 group-hover:to-[#22D3EE]/30 transition-colors">
                <Phone className="w-5 h-5 text-[#22D3EE]" />
              </div>
              <span className="text-xs text-gray-300 group-hover:text-white text-center">
                Call Now
              </span>
            </a>

            <a
              href="mailto:ravindrasiasdelhi@gmail.com"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 group-hover:from-[#6366F1]/30 group-hover:to-[#22D3EE]/30 transition-colors">
                <Mail className="w-5 h-5 text-[#22D3EE]" />
              </div>
              <span className="text-xs text-gray-300 group-hover:text-white text-center">
                Email
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center space-y-1 p-2 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 group-hover:from-[#6366F1]/30 group-hover:to-[#22D3EE]/30 transition-colors">
                <MapPin className="w-5 h-5 text-[#22D3EE]" />
              </div>
              <span className="text-xs text-gray-300 group-hover:text-white text-center">
                Visit Us
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
