import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import aboutUs from "../../assets/images/about-us.webp";
import { BarChart2, Globe, Lightbulb } from "lucide-react";
import Badge from "../../Components/Badge";


// ---- Count-up number using Framer Motion ----
function CountUp({ from = 0, to = 100, duration = 2, className = "", suffix = "+" }) {
    const [value, setValue] = useState(from);

    useEffect(() => {
        const controls = animate(from, to, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.floor(v)),
        });
        return () => controls.stop();
    }, [from, to, duration]);

    return (
        <span className={className}>
            {value}
            {suffix}
        </span>
    );
}

// ---- Variants ----
export const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
};

const features = [
    {
        icon: Lightbulb,
        text: "Innovative Solutions",
    },
    {
        icon: Globe,
        text: "Global Expertise",
    },
    {
        icon: BarChart2,
        text: "Tailored Strategies",
    },
];

export default function OfferSection() {
    return (
        <section className=" ">
            <div className=" px-4 py-12 sm:p-10 lg:px-[75px] lg:py-[75px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
                    {/* Left: Text */}
                    <div className="flex flex-col gap-5 lg:gap-8">
                        <div className="max-w-sm mb-1">

                        <Badge textPart1={'Helping'} textPart2={'businesses'} shadow={`-10px 10px 15px 3px rgba(0, 0, 0, 0.1)`}/>
                        </div>
                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0}
                        >
                            <Title
                                text={`We Are Offering Our Creative Business Idea`}
                                className="text-3xl! sm:text-4xl! lg:text-5xl!"
                            />
                        </motion.div>


                        <motion.p
                            className="text-[#4A5565] mb-5"
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                        >
                            At Plum Consulting Agency, we specialize in delivering innovative business strategies that drive growth and success. Our expert team provides tailored solutions to meet your unique challenges, ensuring sustainable results in a competitive market.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className=" space-y-4"
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                        >
                            {features.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex items-center gap-3">
                                        <Icon className="w-5 h-5 text-gray-500" />
                                        <span className="text-gray-800 font-medium">{item.text}</span>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            className="mt-1"
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                        >
                            <Button
                                padding={"16px 30px"}
                                text="Learn More"
                                showCircle={true}
                            />
                        </motion.div>
                    </div>

                    {/* Right: Image */}
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={1}
                        className="relative"
                    >
                        <img
                            src={aboutUs}
                            alt="Team collaborating"
                            className="w-full h-[238px] sm:h-[420px] lg:h-[550px] object-cover rounded-[28px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
