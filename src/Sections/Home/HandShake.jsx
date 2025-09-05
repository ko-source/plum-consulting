import React from "react";
import background from "../../assets/images/handshake.webp";
import Badge from "../../Components/Badge";
import Button from "../../Components/Button";
import { motion } from "framer-motion";
export default function HandShake() {
    return (
        <section
          id="home"
          className="h-screen px-5   sm:px-10 md:px-[74px] mx-auto flex flex-col md:flex-row items-center justify-center text-white bg-cover bg-center bg-no-repeat dark:text-gray-200"
          style={{
            backgroundImage: `url(${background})`,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            backgroundBlendMode: 'multiply',
          }}
        >
            <div className="flex flex-col items-center justify-center gap-y-4">
                <Badge textPart1="We're for Brands" textPart2="Ready to" color1="#BB00C9" color2="#000000" />
                <motion.h2 className="text-7xl font-extrabold text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}    
                >Capitalize Website</motion.h2>
                <motion.div  initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay: 0.5, duration: 1 }}>
                    <Button 
                    text="Contct Expert" 
                    showCircle={true} 
                    />
                </motion.div>
            </div>

        </section>
    );
}