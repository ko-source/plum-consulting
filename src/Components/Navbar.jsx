import React, { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.webp";
import Button from "../Components/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="bg-[#1A1A1A] leading-[21px]  font-medium text-sm py-2 text-white px-[20px] md:px-[74px] flex justify-center md:justify-end items-center gap-4 dark:bg-gray-900">
        <div className="flex items-center gap-2 ">
          <Phone size={16} />
          <span>(1) 245 - 45678</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>help.info@gmail.com</span>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800">
        <div className="md:px-[74px] px-[20px] mx-auto flex items-center justify-between py-4">

          <div className="flex items-center md:pl-12">
            <img
              src={logo}
              alt="Logo"
              className="h-12"
            />
          </div>

          <nav className="hidden md:flex items-center gap-9">
            <a href="#services" className="hover:text-[#A500B3] transition-colors duration-300 ease-in-out tracking-tight  uppercase leading-[22px] text-lg font-medium text-[#364153] dark:text-gray-200">
              SERVICES
            </a>
            <a href="#about" className="hover:text-[#A500B3] transition-colors duration-300 ease-in-out tracking-tight  uppercase leading-[22px] text-lg font-medium text-[#364153] dark:text-gray-200">
              ABOUT US
            </a>
            <a href="#pricing" className="hover:text-[#A500B3] transition-colors duration-300 ease-in-out tracking-tight  uppercase leading-[22px] text-lg font-medium text-[#364153] dark:text-gray-200">
              PRICING
            </a>
            <a href="#team" className="hover:text-[#A500B3] transition-colors duration-300 ease-in-out tracking-tight  uppercase leading-[22px] text-lg font-medium text-[#364153] dark:text-gray-200">
              OUR TEAM
            </a>
            <a href="#contact" className="hover:text-[#A500B3] transition-colors duration-300 ease-in-out tracking-tight  uppercase leading-[22px] text-lg font-medium text-[#364153] dark:text-gray-200">
              CONTACT
            </a>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              text="Free Consultation" 
              color="#BB00C9" 
              padding="12px 21px"
              showCircle={false} 
            />
          </div>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
           <Menu size={24} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                className="fixed inset-0 bg-opacity-50 z-40"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%", transition: { delay: 0.9 } }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.div
                className="fixed top-0 left-0 w-64 h-full text-left bg-white dark:bg-gray-800 shadow-lg z-50 flex flex-col items-left px-3 gap-4 py-4"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
              >
                <a href="#services" className="mt-12 text-gray-800 dark:text-gray-200">
                  SERVICES
                </a>
                <a href="#about" className="text-gray-800 dark:text-gray-200">
                  ABOUT US
                </a>
                <a href="#pricing" className="text-gray-800 dark:text-gray-200">
                  PRICING
                </a>
                <a href="#team" className="text-gray-800 dark:text-gray-200">
                  OUR TEAM
                </a>
                <a href="#contact" className="text-gray-800 dark:text-gray-200">
                  CONTACT
                </a>
                <button
                  className="absolute top-4 right-4"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;