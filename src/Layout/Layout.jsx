import { useTheme } from "../Hooks/useTheme";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
export default function Layout({ children }) {
   const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <header>
        <Navbar />
    
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-full mx-auto">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-red-700">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>HI</button>
        <div className="max-w-full mx-auto px-4 py-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Plum Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
