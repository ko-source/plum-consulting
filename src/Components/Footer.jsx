import { motion } from "framer-motion";
import { Facebook, Twitter, Mail, ArrowRight } from "lucide-react";
import logo from "../assets/images/logo.webp";
const Footer = () => {
    const inputClasses = `
    p-3 rounded-full bg-transparent border border-white/70 dark:border-gray-400 
    text-white dark:text-gray-200 placeholder-white/70 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#A500B3] transition focus:border-none duration-300 ease-in-out
  `;
  return (
    <footer className="bg-black text-white py-12 px-4  md:px-[70px] md:py-16 md:pb-8  dark:bg-gray-900">
      <div className="border-b border-gray-700 pb-10 pt-3">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between md:items-start  "
      >
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
         <img
                       src={logo}
                       alt="Logo"
                       className="h-12"
                     />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-start space-y-4 mb-4 md:mb-0"
        >
          <span className="text-lg font-medium">Subscribe Newsletter</span>
          <div className="flex items-center space-x-3">
            <input
              type="email"
              placeholder="Enter your email address..."
              className={inputClasses}
            />
            <button className="p-4 bg-white w-full text-black transition duration-300 ease-in-out rounded-full hover:bg-[#A500B3] hover:text-white cursor-pointer dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex space-x-3"
            >
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center bg-[#101828] text-white hover:bg-[#A500B3] p-2 rounded-full transition-colors duration-200 dark:hover:bg-pink-600"
            >
                <Facebook size={24} />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center bg-[#101828] text-white hover:bg-[#A500B3] p-2 rounded-full transition-colors duration-200 "
            >
                <Twitter size={24} />
            </a>
            </motion.div>
      </motion.div>
      </div>

      <div className="border-b border-gray-700 pt-8">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="max-w-6xl min-h-72 mx-auto flex flex-col md:flex-row justify-between mt-6 space-y-6 md:space-y-0"
      >
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-6">Support</h3>
          <ul className="space-y-3 ">
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200  font-medium">Home</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Pricing Plan</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">About Us</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Our Services</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-6">Explore Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Contact Us</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Team Member</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Latest Portfolio</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Shop Page</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">News & Media</a></li>
          </ul>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-6">Follow Me</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Facebook</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Twitter</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium">Instagram</a></li>
            <li><a href="#" className="text-[#99A1AF] hover:text-white  transition-colors duration-200 font-medium ">LinkedIn</a></li>
          </ul>
        </div>
        <div className="text-left mb-10 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <ul className="space-y-1 text-[#99A1AF] font-medium">
            <li>2025 Rockledge</li>
            <li>130 Rockledge, Block D</li>
            <li>United States, California</li>
          </ul>
        </div>
      </motion.div>
      </div>

     <div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className=" max-w-6xl mx-auto flex items-center justify-start text-left mt-6"
      >
        <p className="text-sm pt-3 text-[#99A1AF]">© Copyright 2025 <span className="text-white">Plum Consulting</span>. All Rights Reserved</p>
      </motion.div>
     </div>
    </footer>
  );
};

export default Footer;