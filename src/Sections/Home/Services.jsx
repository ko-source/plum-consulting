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
    Code: <Code className="w-6 h-6 text-gray-500" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-white" />,
    Globe: <Globe className="w-6 h-6 text-gray-500" />,
    Users: <Users className="w-6 h-6 text-pink-500" />,
  };

  const Icon = iconMap[iconName] || <Code className="w-6 h-6 text-gray-500" />; 
  return <div >{Icon}</div>;
};

  return (
    <section id="services" className="py-20 bg-white text-center relative">
      {/* Header with Client Count */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 mb-8 w-72 mx-auto"
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
        className="mb-12 heading-title"
      >
        Expert Services, Tailored For You
      </motion.h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center ${service.isPurple ? "bg-purple-600" : ""}`}
            style={service.isPurple ? { backgroundColor: "#BB00C9" } : {}}
          >
            <div className="mr-4">
              <IconComponent iconName={service.iconName} />
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${service.isPurple ? "text-white" : "text-gray-800"}`}>
                {service.title}
              </h3>
              <p className={`mt-2 text-sm ${service.isPurple ? "text-white" : "text-gray-600"}`}>
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}