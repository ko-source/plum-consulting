import React from "react";
import { motion } from "framer-motion";
import Button from "../../Components/Button";
import { StepCard } from "../../Components/StepCard";
import Badge from "../../Components/Badge";
import { sectionVariants } from "./OfferSection";

export default function StepsSection() {
    const steps = [
        {
            number: "01",
            title: "Contact With Our Help Desk",
            description:
                "Reach out to our team, and we’ll assist you with any questions or challenges you face.",
        },
        {
            number: "02",
            title: "Get Expert Advice & Solution",
            description:
                "Our specialists analyze your needs and provide tailored strategies to achieve the best results.",
        },
        {
            number: "03",
            title: "Achieve Business Growth",
            description:
                "Implement our solutions, optimize processes, and watch your business reach new heights.",
        },
    ];

    return (
        <section className="">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start px-4 py-12 sm:p-10 lg:px-[75px] lg:py-[75px]">
                {/* Left: heading + CTA */}
                <div className="flex flex-col gap-6 lg:gap-8">
                    <div className="max-w-sm">

                        <Badge textPart1={'Success'} textPart2={'in Action'} shadow={`-10px 10px 15px 3px rgba(0, 0, 0, 0.1)`} />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
                    >
                        3 Easy Step To Task System
                    </motion.h2>

                    <motion.div
                            className=""
                            variants={sectionVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={3}
                        >
                            <Button
                                padding={"16px 30px"}
                                text="Contact Expert"
                                showCircle={true}
                            />
                        </motion.div>
                </div>

                {/* Right: stacked Step cards */}
                <div className="flex flex-col gap-6">
                    {steps.map((s, i) => (
                        <StepCard
                            key={s.number}
                            number={s.number}
                            title={s.title}
                            description={s.description}
                            delay={0.05 * (i + 1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}