import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    
    <button onClick={toggleTheme}
    className={`toggle toggle--${theme}`}
    >
      {theme === 'dark' ? (
        <img src="/icons/sun-white.svg" alt="Light mode" />
      ) : (
        <img src="/icons/moon.svg" alt="Dark Mode" />
      )}
    </button>
  );
}
