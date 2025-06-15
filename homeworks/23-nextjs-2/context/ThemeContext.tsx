import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";


interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined); //Initially undefined

export function ThemeProvider ({children} :{children: React.ReactNode}){
    const [theme, setTheme] = useState<Theme>("light")

    //Read the saved preferred theme when opening the website
    useEffect(() => {
        const preferredTheme = localStorage.getItem("theme") as Theme;
        if (preferredTheme) {
            setTheme(preferredTheme);
            document.body.className = `app-container app-container--${theme}`;
        } else {
            localStorage.setItem("theme", theme);
        }
    },[])

    //If the theme changes, we update it in LS
    useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = `app-container app-container--${theme}`;

  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
    );

}

export function useTheme() {
    const context = useContext(ThemeContext);
        if (!context) throw new Error("useTheme must be used inside ThemeProvider");

        return context;
}