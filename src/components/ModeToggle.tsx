import * as React from "react";
import { Sun, Moon } from "lucide-react";

const ModeToggle = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="inline-flex rounded-md shadow-sm border border-gray-200 overflow-hidden">
      <button
        className={`px-3 py-2 flex items-center gap-1 text-sm font-medium transition-colors ${
          theme === "light"
            ? "bg-gray-100 text-yellow-600"
            : "bg-white text-gray-500 hover:bg-gray-50"
        }`}
        aria-label="Modo claro"
        onClick={() => setTheme("light")}
        type="button"
      >
        <Sun className="w-5 h-5" />
      </button>
      <button
        className={`px-3 py-2 flex items-center gap-1 text-sm font-medium transition-colors ${
          theme === "dark"
            ? "bg-gray-800 text-yellow-300"
            : "bg-white text-gray-500 hover:bg-gray-50"
        }`}
        aria-label="Modo oscuro"
        onClick={() => setTheme("dark")}
        type="button"
      >
        <Moon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ModeToggle;