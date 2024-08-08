import { t } from "i18next";
import GutoImage from "@/assets/Guto.png";

function App() {
  return (
    <section className="pt-16">
      <h3 className="text-sm font-bold py-5 mb-4 text-secondary-foreground">
        {t("projects.title")}
      </h3>
      <div>
        <div className="mb-12">
          <a
            href="https://aventuras-de-guto.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-primary"
          >
            {t("projects.guto.title")}
          </a>
          <p className="mt-2 text-sm">{t("projects.guto.description")}</p>
          <ul className="mt-3 font-semibold text-xs flex flex-wrap gap-2">
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              React
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              TypeScript
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Tailwind
            </li>
            <li className="px-3 py-1 leading-5 rounded-full bg-primary">
              Vercel
            </li>
          </ul>
          <img
            className="mt-4 border-2 rounded hover:border-primary"
            src={GutoImage}
            alt="Guto thumbnail"
          />
        </div>
      </div>
    </section>
  );
}

export default App;
