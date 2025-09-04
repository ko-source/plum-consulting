
import Hero from "./Components/Home";
import Navbar from "./Components/navbar";
import Services from "./Components/Services";
// import Team from "./Components/Team";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";


export default function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Services />
      {/* <Team />
      <Contact />
      <Footer /> */}
    </div>
  );
}
