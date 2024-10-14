import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/projects/Projects";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import clsx from "clsx";

interface AppContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({
  theme: "",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("language") || navigator.language;

    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main
      className={clsx(
        "px-[24px] py-[48px] text-primary-foreground leading-relaxed bg-background max-w-screen-md mx-auto",
        theme !== "light" && "dark"
      )}
    >
      <div className="bg-primary h-[6px] absolute w-full top-0 left-0"></div>
      <AppContext.Provider value={{ theme, setTheme }}>
        <Header />
        <Projects />
        <Experience />
        <Footer />
      </AppContext.Provider>
    </main>
  );
}

export default App;
