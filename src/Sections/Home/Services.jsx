import { motion } from "framer-motion";
import { Code, GraduationCap, Globe, Users } from "lucide-react";
export default function Services() {
  const services = [
    {
      title: "Web Development & Consulting",
      description: "Custom solutions for your business.",
      iconName: "Code", 
      isPurple: false,
    },
    {
      title: "Online Courses for UX/UI Design",
      description: "Learn from the best experts.",
      iconName: "GraduationCap", 
      isPurple: true,
    },
    {
      title: "Digital Marketing & Branding Design",
      description: "Boost your online presence.",
      iconName: "Globe", 
      isPurple: false,
    },
  ];
  const IconComponent = ({ iconName }) => {
  const iconMap = {
    Code: <Code className="w-7 h-7 text-gray-500" />,
    GraduationCap: <GraduationCap className="w-7 h-7 text-white" />,
    Globe: <Globe className="w-7 h-7 text-gray-500" />,
  };

  const Icon = iconMap[iconName] || <Code className="w-6 h-6 text-gray-500" />; 
  return <div >{Icon}</div>;
};

  return (
    <section id="services" className="py-20 px-5 bg-white text-center relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center bg-white rounded-lg shadow-xl p-4 mb-8 w-72 mx-auto"
      >
        <div className="flex items-center space-x-2">
          <IconComponent iconName="Users" />
          <span className="text-pink-500 text-sm font-medium">2,000+ Global Clients Worldwide</span>
        </div>
      </motion.div>


      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-20 heading-title"
      >
        Expert Services, Tailored For You
      </motion.h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            className={`bg-white p-8 min-h-64 rounded-2xl shadow-xl hover:shadow-3xl gap-y-8 transition-all duration-300 flex flex-col
              ${service.isPurple ? "bg-purple-600" : ""} 
              ${index === 2 ? "md:col-span-2 md:justify-self-center lg:col-span-1 lg:justify-self-auto" : ""}
            `}
            style={service.isPurple ? { backgroundColor: "#BB00C9" } : {}}
          >
            <div className={`rounded-2xl w-[56px] h-[56px] flex items-center justify-center ${service.isPurple ? "bg-[#D33AE0]" : "bg-[#F3F4F6]"}`}>
              <IconComponent iconName={service.iconName} />
            </div>
            <div>
              <h2 className={`text-2xl text-left leading-7 font-extrabold ${service.isPurple ? "text-white" : "text-black"}`}>
                {service.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}  

