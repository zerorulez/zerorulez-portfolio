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
          language: "Change Language",
          light: "Light Mode",
          dark: "Dark Mode",
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
              "This landing page is crafted to captivate visitors and convert them into subscribers. It’s designed with a clean, modern aesthetic that mirrors the YouTuber’s brand identity and engages users from the moment they land on the page.",
          },
          scheduler: {
            title: "Exams Scheduler",
            description:
              "This system is crafted to streamline the administrative processes within a healthcare setting. It features a user-friendly interface that allows staff to effortlessly search for, register, and update patient information, manage budgets, and schedule exams.",
          },
          forms: {
            title: "Custom Forms",
            description:
              "This comprehensive forms management system was built to streamline the entire lifecycle of form handling. From creation to distribution and analysis, the system provides a seamless experience for employees looking to manage forms efficiently.",
          },
          furniture: {
            title: "Mobly",
            description:
              "This e-commerce platform was developed to enhance the in-store shopping experience by allowing customers to browse, customize, and purchase furniture directly from kiosks located within the company’s stores. The system is designed to be engaging and easy to use, ensuring a seamless integration into the retail environment.",
          },
          flakes: {
            title: "Flakes Power Cup",
            description:
              "This landing page was designed to promote and drive engagement for a game championship hosted by a popular streamer. The goal was to create a visually striking and interactive platform that captures the excitement of the event, attracts participants, and keeps fans informed.",
          },
          freefire: {
            title: "Free Fire Championship",
            description:
              "This innovative system was designed to enhance live gaming events by automating real-time interactions between the game’s API and the event’s visual and lighting elements. The goal was to create a synchronized experience that elevates the excitement and engagement of live broadcasts and in-game events.",
          },
          bandstand: {
            title: "Bandstand Memories",
            description:
              "This landing page was designed as part of a university project to highlight a compelling video series documenting the personal memories and historical significance of bandstands in different cities. The goal was to create an engaging and visually appealing platform that draws visitors into the rich tapestry of community life captured in these videos.",
          },
          malls: {
            title: "Shopping Mall",
            description:
              "This website was created to enhance the visitor experience by offering a central hub of information about the shopping mall. It features detailed listings of stores, cinema schedules, and various mall amenities, all presented through an engaging and user-friendly interface.",
          },
          mimmo: {
            title: "Mimmo",
            description:
              "The website was designed to provide visitors with a comprehensive overview of the toilet paper brand's history while incorporating an interactive element—a mini-game—to create a memorable and enjoyable experience. The goal was to blend informative content with interactive fun, reinforcing the brand’s identity and connecting with users on a personal level.",
          },
          anferplas: {
            title: "Anferplas",
            description:
              "The website was designed to effectively represent the plastic manufacturing company, offering detailed information about its range of products and facilitating easy communication with potential clients. The goal was to create a professional and user-friendly site that highlights the company’s expertise and product diversity.",
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
              "Developed email marketing campaigns, managed shopping mall websites, and created optimized landing pages to enhance conversions and user engagement.",
          },
        },
        footer: {
          designed: "Designed in",
          developed: "and developed in",
          created: "by me. Created using",
          deployed: "and deployed with",
          text: ". All text is styled in the",
          typeface: " typeface.",
        },
      },
    },
    "pt-BR": {
      translation: {
        header: {
          title: "Lucas Ribeiro",
          subtitle: "Engenheiro Front-end Sênior",
          description:
            "Eu crio experiências digitais perfeitas, envolventes e acessíveis.",
          contact: "Entre em Contato",
          download: "Baixar CV",
          language: "Trocar Idioma",
          light: "Modo Claro",
          dark: "Modo Escuro",
        },
        about: {
          title: "SOBRE",
          description:
            "Desde que comecei minha jornada como desenvolvedor há quase 6 anos, tive a oportunidade de trabalhar com várias agências, colaborar com programadores experientes e unir forças com indivíduos talentosos para criar produtos digitais para uso comercial e consumidor. Minha curiosidade natural e compromisso em resolver problemas um de cada vez têm sido fundamentais para meu crescimento e sucesso nesta área.",
        },
        projects: {
          title: "PROJETOS",
          guto: {
            title: "Aventuras de Guto",
            description:
              "Esta landing page é elaborada para cativar os visitantes e convertê-los em inscritos. Foi projetada com uma estética limpa e moderna que reflete a identidade da marca do YouTuber e engaja os usuários desde o momento em que entram na página.",
          },
          scheduler: {
            title: "Agendar Exames",
            description:
              "Este sistema foi criado para otimizar os processos administrativos em um ambiente de saúde. Apresenta uma interface amigável que permite à equipe buscar, registrar e atualizar informações dos pacientes, gerenciar orçamentos e agendar exames com facilidade.",
          },
          forms: {
            title: "Formulários Personalizados",
            description:
              "Este sistema abrangente de gerenciamento de formulários foi construído para otimizar todo o ciclo de vida do manuseio de formulários. Desde a criação até a distribuição e análise, o sistema oferece uma experiência contínua para os funcionários que buscam gerenciar formulários de maneira eficiente.",
          },
          furniture: {
            title: "Mobly",
            description:
              "Esta plataforma de e-commerce foi desenvolvida para aprimorar a experiência de compra na loja, permitindo que os clientes naveguem, personalizem e comprem móveis diretamente dos totens localizados nas lojas da empresa. O sistema foi projetado para ser envolvente e fácil de usar, garantindo uma integração perfeita ao ambiente de varejo.",
          },
          flakes: {
            title: "Flakes Power Cup",
            description:
              "Esta landing page foi projetada para promover e engajar para um campeonato de jogo hospedado por um streamer popular. O objetivo foi criar uma plataforma visualmente marcante e interativa que capture a emoção do evento, atraia participantes e mantenha os fãs informados.",
          },
          freefire: {
            title: "Campeonato Free Fire",
            description:
              "Este sistema inovador foi projetado para aprimorar eventos de jogos ao vivo automatizando interações em tempo real entre a API do jogo e os elementos visuais e de iluminação do evento. O objetivo era criar uma experiência sincronizada que eleva a emoção e o engajamento das transmissões ao vivo e eventos dentro do jogo.",
          },
          bandstand: {
            title: "Memórias de Coreto",
            description:
              "Esta landing page foi projetada como parte de um projeto universitário para destacar uma série de vídeos cativantes que documentam as memórias pessoais e a importância histórica dos coretos em diferentes cidades. O objetivo foi criar uma plataforma envolvente e visualmente atraente que atraia os visitantes para o rico mosaico da vida comunitária capturado nesses vídeos.",
          },
          malls: {
            title: "Shopping Mall",
            description:
              "Este site foi criado para aprimorar a experiência do visitante oferecendo um hub central de informações sobre o shopping. Apresenta listagens detalhadas de lojas, horários de cinema e várias comodidades do shopping, tudo apresentado através de uma interface envolvente e amigável.",
          },
          mimmo: {
            title: "Mimmo",
            description:
              "O site foi projetado para fornecer aos visitantes uma visão geral abrangente da história da marca de papel higiênico, enquanto incorpora um elemento interativo—um mini-jogo—para criar uma experiência memorável e agradável. O objetivo foi combinar conteúdo informativo com diversão interativa, reforçando a identidade da marca e conectando-se com os usuários de forma pessoal.",
          },
          anferplas: {
            title: "Anferplas",
            description:
              "O site foi projetado para representar efetivamente a empresa de manufatura de plásticos, oferecendo informações detalhadas sobre sua gama de produtos e facilitando a comunicação com clientes potenciais. O objetivo foi criar um site profissional e fácil de usar que destaca a expertise e a diversidade de produtos da empresa.",
          },
        },
        experience: {
          title: "EXPERIÊNCIA",
          allianca: {
            title: "Engenheiro Front-end Sênior na Alliança",
            duration: "Jan 2022 — Presente",
            description:
              "Participei de projetos desde a concepção até a entrega, desenvolvendo formulários personalizados para pacientes solicitarem exames e criando uma plataforma de agendamento para agentes de call center.",
          },
          mobly: {
            title: "Engenheiro Front-end na Mobly",
            duration: "Mai 2021 — Dez 2021",
            description:
              "Fui responsável pela criação e implementação de um site para um projeto inovador focado em totens interativos destinados à venda de móveis.",
          },
          bbl: {
            title: "Engenheiro Front-end na BBL e-SPORTS",
            duration: "Set 2019 — Mai 2021",
            description:
              "Criei landing pages responsivas, formulários de registro e exibições de resultados em tempo real para torneios de e-sports, melhorando a experiência do usuário e as interfaces de eventos ao vivo.",
          },
          pravy: {
            title: "Engenheiro Front-end Júnior na Pravy",
            duration: "Mai 2018 — Set 2019",
            description:
              "Desenvolvi campanhas de e-mail marketing, gerenciei sites de shoppings e criei landing pages otimizadas para melhorar conversões e engajamento do usuário.",
          },
        },
        footer: {
          designed: "Desenhado no",
          developed: "e desenvolvido no",
          created: "por mim. Criado usando",
          deployed: "e implementado com",
          text: ". Todo o texto é estilizado na tipografia",
          typeface: ".",
        },
      },
    },
  },
});

export default i18n;
