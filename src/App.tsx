import { useEffect } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects/Projects";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = navigator.language;

    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <main className="px-[24px] py-[48px] text-primary-foreground leading-relaxed transition-colors lg:px-[150px] xl:px-[250px]">
      <div className="bg-primary h-[6px] absolute w-full top-0 left-0"></div>
      <Header />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
