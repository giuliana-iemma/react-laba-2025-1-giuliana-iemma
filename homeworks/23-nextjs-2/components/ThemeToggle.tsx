import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    
    <button onClick={toggleTheme}
    className={`toggle toggle--${theme}`}
    >
      {theme === 'dark' ? (
        <img className="toggle__icon"  src="/icons/sun-white.svg" alt="Light mode" />
      ) : (
        <img  className="toggle__icon" src="/icons/moon-purple.svg" alt="Dark Mode" />
      )}
    </button>
  );
}
