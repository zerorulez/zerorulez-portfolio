import { t } from "i18next";

import { ArrowUpRight } from "lucide-react";

interface CardProps {
  prop: string;
  skills: string[];
  image: string;
  link?: string;
}

function App({ prop, skills, image, link }: CardProps) {
  return (
    <div className="mb-12 flex flex-col md:flex-row">
      <div className="md:order-2 md:ml-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-primary"
        >
          <div className="flex gap-1 items-center">
            {t(`projects.${prop}.title`)}
            {link && <ArrowUpRight size={18} />}
          </div>
        </a>
        <p className="mt-2 text-sm"> {t(`projects.${prop}.description`)}</p>
        <ul className="mt-3 font-semibold text-xs flex flex-wrap gap-2 text-white">
          {skills.map((skill) => (
            <li
              className="px-3 py-1 leading-5 rounded-full bg-primary"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-primary"
        >
          <img
            className="min-w-[200px] max-w-[200px] mt-4 border-2 rounded hover:border-primary md:mt-0"
            src={image}
            alt={t(`projects.${prop}.title`) + " thumbnail"}
          />
        </a>
      </div>
    </div>
  );
}

export default App;
