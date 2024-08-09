import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import CV_EN from "@/assets/CV_EN.pdf";
import CV_BR from "@/assets/CV_BR.pdf";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <section className="flex flex-col">
      <h1 className="font-bold text-4xl">{t("header.title")}</h1>
      <p className="text-lg font-semibold mt-3">{t("header.subtitle")}</p>
      <p className="mt-4">{t("header.description")}</p>
      <div className="flex gap-5 text-2xl mt-8">
        <a
          href="https://github.com/zerorulez"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub (opens in a new tab)"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasmribe/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <Linkedin />
        </a>
        <a href="mailto:ribeirolucasdev@gmail.com" title={t("header.contact")}>
          <Mail />
        </a>
        <a
          download="CV.pdf"
          href={i18n.language === "pt-BR" ? CV_BR : CV_EN}
          title={t("header.download")}
        >
          <FileText />
        </a>
      </div>
    </section>
  );
}

export default App;
