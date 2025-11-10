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
            "Transforming ideas into digital experiences: where design meets functionality.",
          contact: "Get In Touch",
          download: "Download CV",
          language: "Change Language",
          light: "Light Mode",
          dark: "Dark Mode",
        },
        projects: {
          title: "PROJECTS",
          more: "View All Projects",
          less: "View Less",
          loveyou: {
            title: "Amo Você",
            description:
              "A microSaaS that allows users to create personalized pages to celebrate the length of relationships between couples. The platform offers customizable counters with messages and photos, providing a simple and creative experience to surprise loved ones on special occasions.",
          },
          guto: {
            title: "Guto's Adventures",
            description:
              "This landing page was designed to attract and convert visitors into subscribers. With a clean and modern aesthetic, it highlights the YouTuber's identity and keeps users engaged from the first visit.",
          },
          scheduler: {
            title: "Schedule Exams",
            description:
              "A system to streamline exam scheduling and quoting, replacing the phone service that allowed only one exam to be scheduled at a time. With WhatsApp integration, the system improved operational efficiency and provided a faster experience for patients.",
          },
          forms: {
            title: "Custom Forms",
            description:
              "A system to digitize paper forms used in medical laboratories, enhancing the control and quality of patient information. The project increased efficiency, reduced errors, improved data security, and resulted in cost savings, transforming data management and providing a safer experience for all involved.",
          },
          furniture: {
            title: "Mobly",
            description:
              "This e-commerce platform enhances the shopping experience by allowing customers to browse, customize, and purchase furniture directly from kiosks in stores. The intuitive interface increases customer satisfaction and drives sales, seamlessly integrating into the retail environment.",
          },
          flakes: {
            title: "Flakes Power Cup",
            description:
              "This landing page was developed to maximize engagement and participation in the gaming championship promoted by a popular streamer. The impactful and interactive design aims to capture the excitement of the event, attract new participants, and ensure that fans stay informed, thereby increasing the reach and visibility of the championship.",
          },
          freefire: {
            title: "Free Fire Championship",
            description:
              "This innovative system enhances live gaming events by automating the integration between the game’s API and visual and lighting elements, increasing excitement and engagement, and consequently, the brand’s visibility and impact.",
          },
          bandstand: {
            title: "Bandstand Memories",
            description:
              "This landing page, created as part of a university project, aims to promote a series of engaging videos about the historical significance of bandstands in various cities. The goal is to provide a visually appealing platform that increases visitor interest and highlights the cultural and community relevance documented in the videos.",
          },
          malls: {
            title: "Shopping Mall",
            description:
              "This site was developed to maximize value for the company by optimizing the visitor experience and centralizing essential information about the mall. With detailed listings of stores, movie times, and amenities, the platform not only enhances customer satisfaction but also boosts operational efficiency and promotes a positive image of the mall.",
          },
          mimmo: {
            title: "Mimmo",
            description:
              "The site was created to reinforce the identity of the toilet paper brand by offering an overview of its history and including an interactive mini-game. This approach combines information and entertainment, creating a memorable experience that strengthens personal connections with users and adds value to the brand.",
          },
          anferplas: {
            title: "Anferplas",
            description:
              "The site was developed to effectively represent the plastic manufacturing company by providing detailed information about its products and facilitating communication with potential customers. With a professional and intuitive design, the site highlights the company's expertise and the diversity of its offerings, increasing attraction and conversion of new business.",
          },
        },
        experience: {
          title: "EXPERIENCE",
          arco: {
            title: "Software Engineer at Arcotech",
            duration: "Sep 2024 — Nov 2025",
            description:
              "Contributed to the enhancement of the platform used by top-performing schools in Brazil, helping to build features that strengthen academic integrity in online assessments, including anti-cheating mechanisms. Also collaborated in developing solutions for uploading and presenting multimedia content (videos and audio), enriching the overall educational experience.",
          },
          allianca: {
            title: "Senior Front-end Engineer at Alliança",
            duration: "Jan 2022 — Aug 2024",
            description:
              "I developed a system that digitized forms and automated processes, enhancing accuracy, data security, and efficiency, while also generating cost savings and improving regulatory compliance.",
          },
          mobly: {
            title: "Front-end Engineer at Mobly",
            duration: "May 2021 — Dec 2021",
            description:
              "I contributed to the development of a self-service kiosk software that allows customers to place orders autonomously. The solution improved efficiency, reduced queues and operational costs, and enhanced order management.",
          },
          bbl: {
            title: "Front-end Engineer at BBL e-SPORTS",
            duration: "Sep 2019 — May 2021",
            description:
              "I developed landing pages, responsive forms for e-sports tournaments, and live event interfaces, which enhanced efficiency and viewer satisfaction, positioning the company as a leader in innovation and experience in the e-sports industry.",
          },
          pravy: {
            title: "Junior Front-end Engineer at Pravy",
            duration: "May 2018 — Sep 2019",
            description:
              "I created marketing emails, managed shopping center websites, and developed optimized landing pages, resulting in a significant increase in conversions and user engagement, which drove growth and visibility for clients.",
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
            "Transformando ideias em experiências digitais: onde o design encontra a funcionalidade.",
          contact: "Entre em Contato",
          download: "Baixar CV",
          language: "Trocar Idioma",
          light: "Modo Claro",
          dark: "Modo Escuro",
        },
        projects: {
          title: "PROJETOS",
          more: "Ver Todos os Projetos",
          less: "Ver Menos",
          loveyou: {
            title: "Amo Você",
            description:
              "Um microSaaS que permite criar páginas personalizadas para celebrar o tempo de relacionamento entre casais. A plataforma oferece contadores customizáveis, com mensagens e fotos, proporcionando uma experiência simples e criativa para surpreender a pessoa amada em datas especiais.",
          },
          guto: {
            title: "Aventuras de Guto",
            description:
              "Esta landing page foi projetada para atrair e converter visitantes em inscritos. Com uma estética limpa e moderna, ela destaca a identidade do YouTuber e mantém os usuários engajados desde o primeiro acesso.",
          },
          scheduler: {
            title: "Agendar Exames",
            description:
              "Um sistema para agilizar o agendamento de exames e a apresentação de orçamentos, substituindo o atendimento telefônico, que permitia agendar apenas um exame por vez. Com integração ao WhatsApp, o sistema melhorou a eficiência operacional e proporcionou uma experiência mais ágil para os pacientes.",
          },
          forms: {
            title: "Formulários Personalizados",
            description:
              "Um  sistema para digitalizar formulários em papel nos laboratórios médicos, melhorando o controle e a qualidade das informações dos pacientes. O projeto aumentou a eficiência, reduziu erros, melhorou a segurança dos dados e resultou em economia de custos, transformando a gestão de dados e proporcionando uma experiência mais segura para todos os envolvidos.",
          },
          furniture: {
            title: "Mobly",
            description:
              "Esta plataforma de e-commerce melhora a experiência de compra ao permitir que clientes naveguem, personalizem e adquiram móveis diretamente dos totens nas lojas. A interface intuitiva aumenta a satisfação do cliente e impulsiona as vendas, integrando-se perfeitamente ao ambiente de varejo.",
          },
          flakes: {
            title: "Flakes Power Cup",
            description:
              "Esta landing page foi desenvolvida para maximizar o engajamento e a participação no campeonato de jogo promovido por um streamer popular. O design impactante e interativo visa capturar a emoção do evento, atrair novos participantes e garantir que os fãs permaneçam informados, aumentando assim o alcance e a visibilidade do campeonato.",
          },
          freefire: {
            title: "Campeonato Free Fire",
            description:
              "Este sistema inovador melhora eventos de jogos ao vivo ao automatizar a integração entre a API do jogo e os elementos visuais e de iluminação, aumentando a emoção e o engajamento e, consequentemente, a visibilidade e o impacto da marca.",
          },
          bandstand: {
            title: "Memórias de Coreto",
            description:
              "Esta landing page, criada como parte de um projeto universitário, visa promover uma série de vídeos envolventes sobre a importância histórica dos coretos em diversas cidades. O objetivo é oferecer uma plataforma visualmente atraente que aumente o interesse dos visitantes e destaque a relevância cultural e comunitária registrada nos vídeos.",
          },
          malls: {
            title: "Shopping Mall",
            description:
              "Este site foi desenvolvido para maximizar o valor para a empresa ao otimizar a experiência do visitante e centralizar informações essenciais sobre o shopping. Com listagens detalhadas de lojas, horários de cinema e comodidades, a plataforma não apenas melhora a satisfação dos clientes, mas também potencializa a eficiência operacional e promove uma imagem positiva do shopping.",
          },
          mimmo: {
            title: "Mimmo",
            description:
              "O site foi criado para reforçar a identidade da marca de papel higiênico ao oferecer uma visão geral da sua história e incluir um mini-jogo interativo. Essa abordagem combina informação e entretenimento, criando uma experiência memorável que fortalece a conexão pessoal com os usuários e valoriza a marca.",
          },
          anferplas: {
            title: "Anferplas",
            description:
              "O site foi desenvolvido para representar de maneira eficaz a empresa de manufatura de plásticos, fornecendo informações detalhadas sobre seus produtos e facilitando a comunicação com clientes potenciais. Com um design profissional e intuitivo, o site destaca a expertise da empresa e a diversidade de sua oferta, aumentando a atração e conversão de novos negócios.",
          },
        },
        experience: {
          title: "EXPERIÊNCIA",
          arco: {
            title: "Engenheiro de Software na Arcotech",
            duration: "Set 2024 — Nov 2025",
            description:
              "Atuei na evolução da plataforma utilizada por algumas das melhores escolas do Brasil, contribuindo para a construção de funcionalidades que aumentam a integridade acadêmica em avaliações e atividades online, como mecanismos anti-cola. Também participei do desenvolvimento de soluções para upload e exibição de conteúdos multimídia (vídeos e áudios), promovendo uma experiência educacional mais rica e acessível.",
          },
          allianca: {
            title: "Engenheiro Front-end Sênior na Alliança",
            duration: "Jan 2022 — Ago 2024",
            description:
              "Desevolvi um sistema que digitalizou formulários e automatizou processos, aumentando a precisão, segurança dos dados e eficiência, além de gerar economia e melhorar a conformidade regulatória.",
          },
          mobly: {
            title: "Engenheiro Front-end na Mobly",
            duration: "Mai 2021 — Dez 2021",
            description:
              "Contribuí para o desenvolvimento de um software de totem de autoatendimento, que permite a clientes realizar pedidos de forma autônoma. A solução melhorou a eficiência, reduziu filas e custos operacionais, e aprimorou a gestão de pedidos.",
          },
          bbl: {
            title: "Engenheiro Front-end na BBL e-SPORTS",
            duration: "Set 2019 — Mai 2021",
            description:
              "Desenvolvi landing pages, formulários responsivos para torneios de e-sports e interfaces de eventos ao vivo, o que elevou a eficiência e a satisfação dos espectadores, destacando a empresa como líder em inovação e experiência no setor de e-sports.",
          },
          pravy: {
            title: "Engenheiro Front-end Júnior na Pravy",
            duration: "Mai 2018 — Set 2019",
            description:
              "Criei e-mails marketing, gerenciei sites de shopping centers e desenvolvi landing pages otimizadas, resultando em aumento significativo das conversões e do engajamento do usuário, o que impulsionou o crescimento e a visibilidade dos clientes.",
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
