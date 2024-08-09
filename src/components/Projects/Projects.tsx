import GutoImage from "@/assets/Guto.png";
import SchedulerImage from "@/assets/Scheduler.png";
import FormsImage from "@/assets/Forms.png";
import FlakesImage from "@/assets/Flakes.png";
import FreefireImage from "@/assets/Freefire.png";
import MoblyImage from "@/assets/Mobly.png";
import BandstandImage from "@/assets/Bandstand.png";
import MallImage from "@/assets/Mall.png";
import MimmoImage from "@/assets/Mimmo.png";
import AnferplasImage from "@/assets/Anferplas.png";

import Card from "./Card";
import { ArrowRight } from "lucide-react";
import { t } from "i18next";

const projects = [
  {
    prop: "guto",
    skills: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    link: "https://aventuras-de-guto.vercel.app/",
    image: GutoImage,
  },
  {
    prop: "scheduler",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Headless UI",
      "Docker",
      "Continuous Integration",
      "GCP",
    ],
    image: SchedulerImage,
  },
  {
    prop: "forms",
    skills: [
      "React",
      "TypeScript",
      "Styled Components",
      "Material UI",
      "Docker",
      "Continuous Integration",
      "GCP",
    ],
    image: FormsImage,
  },
  {
    prop: "furniture",
    skills: ["Next.js", "TypeScript", "Laravel", "PHP", "Docker"],
    link: "https://www.mobly.com.br/",
    image: MoblyImage,
  },
  {
    prop: "flakes",
    skills: ["Vue", "JavaScript", "Bootstrap"],
    link: "https://f9905b49.flakespowercup.pages.dev/",
    image: FlakesImage,
  },
  {
    prop: "freefire",
    skills: ["Vue", "JavaScript", "Electron", "Node.js"],
    link: "https://www.youtube.com/watch?v=hZWzi54iUqY",
    image: FreefireImage,
  },
  {
    prop: "bandstand",
    skills: ["HTML5", "Bootstrap", "JavaScript", "Vercel"],
    link: "https://leotv-omega.vercel.app/",
    image: BandstandImage,
  },
  {
    prop: "anferplas",
    skills: ["HTML5", "Bootstrap", "JavaScript"],
    link: "https://www.anferplas.com.br/",
    image: AnferplasImage,
  },
  {
    prop: "malls",
    skills: ["Angular", "Typescript", "Bootstrap", "AWS"],
    link: "https://shoppingtambore.com.br/",
    image: MallImage,
  },
  {
    prop: "mimmo",
    skills: ["Laravel", "Blade", "JavaScript", "PHP"],
    link: "https://www.mimmo.com.br/",
    image: MimmoImage,
  },
];

function App() {
  return (
    <section className="pt-16">
      <h3 className="text-sm font-bold py-5 mb-4 text-secondary-foreground">
        {t("projects.title")}
      </h3>
      <div>
        {projects.map((project) => (
          <Card
            prop={project.prop}
            skills={project.skills}
            link={project.link}
            image={project.image}
            key={project.prop}
          />
        ))}
      </div>
      {/* <div
        className="flex gap-2 items-center cursor-pointer mb-12 hover:underline hover:text-primary"
        onClick={() => {
          // setViewAll(!viewAll);
        }}
      >
        <p className="font-semibold">View All Projects</p>
        <ArrowRight size={18} />
      </div> */}
    </section>
  );
}

export default App;
