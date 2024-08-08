import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en-US",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "en-US": {
      translation: {
        header: {
          title: "Lucas Ribeiro",
          subtitle: "Senior Front-end Engineer",
          description:
            "I create pixel-perfect, engaging, and accessible digital experiences.",
          contact: "Get In Touch",
          download: "Download CV",
        },
        about: {
          title: "ABOUT",
          description:
            "Since I began my journey as a developer nearly 6 years ago, I have had the opportunity to work with various agencies, collaborate with experienced programmers, and join forces with talented individuals to create digital products for both commercial and consumer use. My natural curiosity and commitment to solving problems one at a time have been key to my growth and success in this field.",
        },
        projects: {
          title: "PROJECTS",
          guto: {
            title: "Aventuras de Guto",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui sapien, semper id placerat vel, malesuada id dui. Cras nec posuere augue. Sed ac mattis est. Pellentesque pulvinar varius est ut congue. Mauris in mauris gravida, faucibus dui vitae, vehicula metus.",
          },
        },
        experience: {
          title: "EXPERIENCE",
          allianca: {
            title: "Senior Front-end Engineer at Alliança",
            duration: "Jan 2022 — Present",
            description:
              "I was involved in projects from conception to delivery, developing customized forms for patients to request exams and creating a scheduling platform for call center agents.",
          },
          mobly: {
            title: "Front-end Engineer at Mobly",
            duration: "May 2021 — Dec 2021",
            description:
              "I was responsible for the creation and implementation of a website for an innovative project focused on interactive kiosks designed for selling furniture.",
          },
          bbl: {
            title: "Front-end Engineer at BBL e-SPORTS",
            duration: "Sep 2019 — May 2021",
            description:
              "Built responsive landing pages, registration forms, and real-time result displays for e-sports tournaments, enhancing user experience and live event interfaces.",
          },
          pravy: {
            title: "Junior Front-end Engineer at Pravy",
            duration: "May 2018 — Sep 2019",
            description:
              "Developed email marketing campaigns, managed shopping center websites, and created optimized landing pages to enhance conversions and user engagement.",
          },
        },
      },
    },
    // "pt-BR": {
    //   translation: {
    //     title: "Olá Mundo",
    //   },
    // },
  },
});

export default i18n;
