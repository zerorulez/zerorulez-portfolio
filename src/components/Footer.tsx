import { t } from "i18next";

function App() {
  return (
    <footer id="footer" className="mt-8 text-sm">
      {`${t("footer.designed")} `}
      <a
        href="https://www.figma.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-primary"
      >
        Figma
      </a>
      {` ${t("footer.developed")} `}
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-primary"
      >
        Visual Studio Code
      </a>
      {` ${t("footer.created")} `}
      <a
        href="https://react.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-primary"
      >
        React
      </a>
      {", "}
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-primary"
      >
        Tailwind CSS
      </a>
      {` ${t("footer.deployed")} `}
      <a
        href="https://pages.github.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-primary"
      >
        GitHub Pages
      </a>
      {`${t("footer.text")} `}
      <a
        href="https://fonts.google.com/specimen/Roboto"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-primary"
      >
        Roboto
      </a>
      {`${t("footer.typeface")}`}
    </footer>
  );
}

export default App;
