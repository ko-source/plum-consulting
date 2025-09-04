import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold">Web Design</h3>
          <p className="mt-2 text-gray-600">Beautiful and modern designs.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold">Development</h3>
          <p className="mt-2 text-gray-600">Fast and optimized code.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold">SEO</h3>
          <p className="mt-2 text-gray-600">Rank higher on Google.</p>
        </motion.div>
      </div>
    </section>
  );
}
