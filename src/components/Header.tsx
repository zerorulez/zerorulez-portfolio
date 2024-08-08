import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

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
          <i className="devicon-github-original"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lucasmribe/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
        {/* <a href="mailto:ribeirolucasdev@gmail.com">
            <Tooltip>
              <TooltipTrigger>
                <Mail size={24} />
              </TooltipTrigger>
              <TooltipContent>
                <p>{t("header.contact")}</p>
              </TooltipContent>
            </Tooltip>
          </a> */}
      </div>
    </section>
  );
}

export default App;
