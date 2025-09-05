import { useTheme } from "../Hooks/useTheme";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function Layout({ children }) {
   const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <header>
        <Navbar/>
      </header>

      <main className="flex-1">
        <div className="max-w-full mx-auto">{children}</div>
      </main>

      <footer >
        <Footer/>
      </footer>
    </div>
  );
}
