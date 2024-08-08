import { useEffect } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
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
    <main className="px-[24px] py-[48px] text-primary-foreground leading-relaxed transition-colors">
      <Header />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
