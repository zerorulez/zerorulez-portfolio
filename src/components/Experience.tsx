import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <section>
      <h3 className="text-sm font-bold py-5 mb-4 text-secondary-foreground">
        {t("experience.title")}
      </h3>
      <div className="flex flex-col">
        <div className="mb-12">
          <p className="text-xs font-semibold mb-2 text-secondary-foreground">
            {t("experience.allianca.duration")}
          </p>
          <a
            href="https://www.cdb.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-primary"
          >
            {t("experience.allianca.title")}
          </a>
          <p className="mt-2 text-sm">{t("experience.allianca.description")}</p>
          <ul className="mt-3 font-semibold text-xs flex flex-wrap gap-2">
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              React
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Next.js
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              TypeScript
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Tailwind
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Material UI
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Docker
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">GCP</li>
          </ul>
        </div>
        <div className="mb-12">
          <p className="text-xs font-semibold mb-2 text-secondary-foreground">
            {t("experience.mobly.duration")}
          </p>
          <a
            href="https://www.mobly.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-primary"
          >
            {t("experience.mobly.title")}
          </a>
          <p className="mt-2 text-sm">{t("experience.mobly.description")}</p>
          <ul className="mt-3 font-semibold text-xs flex flex-wrap gap-2">
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Next.js
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              TypeScript
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">PHP</li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Docker
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">AWS</li>
          </ul>
        </div>
        <div className="mb-12">
          <p className="text-xs font-semibold mb-2 text-secondary-foreground">
            {t("experience.bbl.duration")}
          </p>
          <a
            href="https://bbl.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-primary"
          >
            {t("experience.bbl.title")}
          </a>
          <p className="mt-2 text-sm">{t("experience.bbl.description")}</p>
          <ul className="mt-3 font-semibold text-xs flex flex-wrap gap-2">
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">Vue</li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              JavaScript
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Bootstrap
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              GSAP
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Electron
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Node.js
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">PHP</li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">SQL</li>
          </ul>
        </div>
        <div className="mb-12">
          <p className="text-xs font-semibold mb-2 text-secondary-foreground">
            {t("experience.pravy.duration")}
          </p>
          <a
            href="https://pravy.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-primary"
          >
            {t("experience.pravy.title")}
          </a>
          <p className="mt-2 text-sm">{t("experience.pravy.description")}</p>
          <ul className="mt-3 font-semibold text-xs flex flex-wrap gap-2">
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Angular
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">Vue</li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              JavaScript
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Bootstrap
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Laravel
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
