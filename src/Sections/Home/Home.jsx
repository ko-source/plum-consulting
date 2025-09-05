import { useState } from "react";
import { motion } from "framer-motion";
import background from "../../assets/images/background.webp";
import Button from "../../Components/Button";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email";
    if (!formData.phone.trim()) tempErrors.phone = "Phone is required";
    else if (!/^[0-9\-()\s]+$/.test(formData.phone)) tempErrors.phone = "Invalid phone";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data Submitted:", formData);
      setFormData({ name: "", email: "", phone: "", city: "", message: "" });
    }
  };

  const inputClasses = `
    p-3 rounded-full bg-transparent border border-white/70 dark:border-gray-400 
    text-white dark:text-gray-200 placeholder-white/70 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#A500B3] transition focus:border-none duration-300 ease-in-out
  `;

  const textareaClasses = `
    p-3 rounded-3xl bg-transparent border border-white/70 dark:border-gray-400 
    text-white dark:text-gray-200 placeholder-white/70 dark:placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-[#A500B3] focus:border-none resize-none transition duration-300 ease-in-out
  `;

  return (
    <section
      id="home"
      className="h-screen px-5 sm:px-10 md:px-[74px] mx-auto flex flex-col md:flex-row items-center justify-center text-white bg-cover bg-center bg-no-repeat dark:text-gray-200"
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backgroundBlendMode: 'multiply',
      }}
    >
      <div className="flex flex-col md:flex-row w-full items-center gap-8">
        <div className="flex flex-col md:w-1/2 p-3 md:pl-4 text-left">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold font-sans"
          >
            Grow Your Business With Our Help And Best Offer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6"
          >
            <Button 
              text="Talk To Expert" 
              color="#ffffff" 
              textColor="black"
              showCircle={false} 
            />
          </motion.div>
        </div>

        <div className="md:w-1/2 w-full">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col gap-4 bg-white/10 dark:bg-gray-800/70 p-6 rounded-2xl backdrop-blur-sm"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className={inputClasses}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex flex-col">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  className={inputClasses}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
              <div className="flex-1 flex flex-col">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="(789)-123-5678"
                  className={inputClasses}
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
              </div>
            </div>

            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              type="text"
              placeholder="City, State"
              className={inputClasses}
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Write your message here"
              className={textareaClasses}
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

            <Button 
              text="Send" 
              color="#ffffff" 
              textColor="black"
              padding="12px 21px"
              showCircle={false} 
              onClick={handleSubmit}
            />
          </motion.form>
        </div>
      </div>
    </section>
  );
}
