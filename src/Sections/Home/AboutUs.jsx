import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import aboutUs from "../../assets/images/about-us.webp";


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
const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
    }),
};

export default function AboutUs() {
    return (
        <section className=" py-12 lg:py-20">
            <div className=" bg-gray-50 px-4 py-12 sm:p-10 lg:px-[75px] lg:py-[75px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
                    {/* Left: Text */}
                    <div className="flex flex-col gap-5 lg:gap-8">

                        <motion.div
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={0}
                        >
                            <Title
                                text={`Plum Consulting, The Best\nSolution For Your Business`}
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
                            We help businesses grow with tailored strategies. Our experts focus on real results,
                            sustainable growth, and measurable impact.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            className=" grid grid-cols-2 md:gap-18 md:max-w-xl max-w-full"
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={2}
                        >
                            <div>
                                <div className="text-3xl sm:text-3xl font-bold text-[#000]">
                                    <CountUp to={500} duration={2.2} />
                                </div>
                                <div className=" text-[#4A5565]">Projects Completed</div>
                            </div>

                            <div>
                                <div className="text-3xl sm:text-3xl font-bold text-[#000]">
                                    <CountUp to={40} duration={2} />
                                </div>
                                <div className="text-[#4A5565]">Expert Team Members</div>
                            </div>
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
                            className="w-full h-[238px] sm:h-[420px] lg:h-[450px] object-cover rounded-[28px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
