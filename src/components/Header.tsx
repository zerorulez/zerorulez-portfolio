import { FileText, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import CV_EN from "@/assets/CV_EN.pdf";
import CV_BR from "@/assets/CV_BR.pdf";
import Typing from "./animations/Typing";
import { AppContext } from "@/App";
import { useContext } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const app = useContext(AppContext);

  return (
    <section className="flex flex-col">
      <h1 className="font-bold text-4xl">{t("header.title")}</h1>
      <p className="text-lg font-semibold mt-3">{t("header.subtitle")}</p>
      <p className="mt-4">
        <Typing data={t("header.description")} />
      </p>
      <div className="flex gap-5 text-2xl mt-8">
        <a
          href="https://github.com/zerorulez"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub (opens in a new tab)"
          className="transition-all duration-300 hover:text-primary"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasmribe/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn (opens in a new tab)"
          className="transition-all duration-300 hover:text-primary"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:ribeirolucasdev@gmail.com"
          title={t("header.contact")}
          className="transition-all duration-300 hover:text-primary"
        >
          <Mail />
        </a>
        <a
          download="CV.pdf"
          href={i18n.language === "pt-BR" ? CV_BR : CV_EN}
          title={t("header.download")}
          className="transition-all duration-300 hover:text-primary"
        >
          <FileText />
        </a>
        {app.theme === "dark" && (
          <a
            title={t("header.light")}
            className="transition-all duration-300 cursor-pointer hover:text-primary"
            onClick={() => {
              app.setTheme("light");
            }}
          >
            <Sun />
          </a>
        )}
        {app.theme === "light" && (
          <a
            title={t("header.dark")}
            className="transition-all duration-300 cursor-pointer hover:text-primary"
            onClick={() => {
              app.setTheme("dark");
            }}
          >
            <Moon />
          </a>
        )}
        <a
          title={t("header.language")}
          className="font-bold text-xs flex justify-center items-center border-2 border-primary-foreground rounded transition-all duration-300 cursor-pointer w-[24px] h-[24px] overflow-hidden hover:text-primary hover:border-primary"
          onClick={() => {
            const language = i18n.language === "pt-BR" ? "en-US" : "pt-BR";
            i18n.changeLanguage(language);
            localStorage.setItem("language", language);
          }}
        >
          {i18n.language === "pt-BR" ? "EN" : "BR"}
        </a>
      </div>
    </section>
  );
}

export default App;
