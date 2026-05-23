export type Language = 'pt' | 'en';

export enum Project {
    GenomaCOVIDSC = "Genoma COVID SC",
    PersonalPortfolio = "Portfólio Pessoal",
    OrkutClone = "Clone do Orkut"
}

export const translations = {
    pt: {
        nav: {
            home: "Início",
            about: "Sobre",
            tech: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        },
        hero: {
            badge: "Full Stack Developer",
            titleStart: "Criando o futuro",
            titleGradient: "por meio ",
            titlePhrases: [
                "do código.",
                "da inovação.",
                "da simplicidade.",
                "da elegância.",
                "de sistemas.",
                "da engenharia."
            ],
            desc: "Especialista em construir ecossistemas digitais elegantes e escaláveis com React, Node.js e as melhores práticas de UI/UX minimalista.",
            ctaPrimary: "Fale sobre seu projeto",
            ctaSecondary: "Explorar projetos",
            greetings: ["Olá, eu sou", "Felipe Goulart"]
        },
        me: {
            subtitle: "Sobre",
            title: "Software também é linguagem visual.",
            paragraph1: "Tenho interesse em sistemas construídos com clareza: interfaces objetivas, arquitetura previsível e código que permaneça simples mesmo conforme cresce.",
            paragraph2: "Meu foco está na interseção entre engenharia e estética — criando produtos digitais performáticos, legíveis e pensados para manutenção a longo prazo."
        },
        about: {
            title: "Minha Jornada",
            subtitle: "Sobre mim",
            p1: "Acredito que bons produtos digitais nascem quando tecnologia e clareza trabalham juntas.",
            p2: "Por isso, gosto de criar sistemas intuitivos, organizados e pensados para durar.",

            features: [
                {
                    title: "Interfaces bem pensadas",
                    description: "Construção de experiências rápidas, consistentes e fáceis de entender"
                },
                {
                    title: "Estrutura por trás do produto",
                    description: "Organização de sistemas para que sejam fáceis de evoluir sem virar caos"
                },
                {
                    title: "Decisão guiada por produto",
                    description: "Escolhas técnicas sempre conectadas com clareza e experiência do usuário"
                }
            ]
        },
        tech: {
            title: "Tecnologias Dominadas",
            subtitle: "Stack de Engenharia",
            frontend: "Desenvolvimento Frontend",
            backend: "Infraestrutura e Backend",
            tools: "Ferramentas & Fluxo",
            experienceLevel: "Nível de proficiência"
        },
        projects: {
            title: "Projetos em Destaque",
            subtitle: "Portfólio",
            demo: "Ver Demo",
            code: "Código",
            comingSoon: "Em breve!",
            items: [
                {
                    title: "Genoma COVID SC",
                    project: Project.GenomaCOVIDSC,
                    desc: "Plataforma de monitoramento epidemiológico em tempo real com visualizações geográficas e dashboards interativos para análise de variantes da COVID-19 em Santa Catarina.",
                    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
                    link: "https://genomacovidsc.ufsc.br/",
                    linkCode: "https://github.com/ofelipegoulart/vigilanciagenomica"

                },
                {
                    title: "Portfólio Pessoal",
                    project: Project.PersonalPortfolio,
                    desc: "Portfólio moderno focado em engenharia de software, design minimalista e animações fluidas, destacando projetos, experiência profissional e identidade visual própria.",
                    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                    link: "https://felipegoulart.dev/",
                    linkCode: "https://github.com/ofelipegoulart/portfolio-website"
                },
                {
                    title: "Clone do Orkut",
                    project: Project.OrkutClone,
                    desc: "Uma recriação do Orkut com estética fiel aos anos 2000, resgatando elementos clássicos como scraps, comunidades e perfis personalizados, mas com uma arquitetura moderna e mais robusta para a web atual.", tags: ["React", "Spring Boot", "Tailwind CSS", "PostgreSQL"],
                    link: "",
                    linkCode: "https://github.com/ofelipegoulart/orkut-clone"
                }
            ]
        },
        contact: {
            title: "Vamos conversar?",
            subtitle: "Contato",
            desc: "Preencha o formulário abaixo e entrarei em contato o mais breve possível.",
            labelName: "NOME",
            labelEmail: "EMAIL",
            labelPhone: "TELEFONE",
            labelMsg: "MENSAGEM",
            placeholderName: "Seu nome",
            placeholderEmail: "seu@email.com",
            placeholderPhone: "(XX) XXXXX-XXXX",
            placeholderMsg: "Como posso ajudar?",
            btnSubmit: "Enviar Mensagem",
            btnSending: "Enviando...",
            success: "Obrigado! Sua mensagem foi enviada com sucesso.",
            error: "Ocorreu um erro ao enviar. Por favor, tente novamente."
        },
        social: {
            location: "Próximo à UFSC, Florianópolis, Brasil",
        },
        footer: {
            desc: "Projetado por Felipe Goulart.",
            rights: "Todos os direitos reservados."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            tech: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            badge: "Full Stack Developer",
            titleStart: "Creating the future",
            titleGradient: "through ",
            titlePhrases: [
                "code.",
                "innovation.",
                "simplicity.",
                "elegance.",
                "systems.",
                "engineering."
            ],
            desc: "Specialist in building elegant and scalable digital ecosystems with React, Node.js, and minimalist UI/UX practices.",
            ctaPrimary: "Talk about your project",
            ctaSecondary: "View projects",
            greetings: ["Hello, I am", "Felipe Goulart"]
        },
        about: {
            title: "My Journey",
            subtitle: "About me",
            p1: "I build digital products focused on clarity, performance, and user experiences that just make sense.",
            p2: "I enjoy taking complex systems and turning them into simple, direct interfaces that are easy to use and maintain.",

            features: [
                {
                    title: "Thoughtful interfaces",
                    description: "Building fast, consistent, and easy-to-understand experiences"
                },
                {
                    title: "System structure behind products",
                    description: "Organizing systems so they can evolve without turning into chaos"
                },
                {
                    title: "Product-driven decisions",
                    description: "Technical choices always aligned with clarity and user experience"
                }
            ]
        },
        tech: {
            title: "Mastered Technologies",
            subtitle: "Engineering Stack",
            frontend: "Frontend Development",
            backend: "Infrastructure & Backend",
            tools: "Tools & Flow",
            experienceLevel: "Proficiency level"
        },
        projects: {
            title: "Featured Projects",
            subtitle: "Portfolio",
            demo: "View Demo",
            code: "Source",
            comingSoon: "Coming Soon!",
            items: [
                {
                    title: "Genoma COVID SC",
                    project: Project.GenomaCOVIDSC,
                    desc: "Real-time epidemiological monitoring platform with geographic visualizations and interactive dashboards for analyzing COVID-19 variants in Santa Catarina.",
                    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
                    link: "https://genomacovidsc.ufsc.br/",
                    linkCode: "https://github.com/ofelipegoulart/vigilanciagenomica"
                },
                {
                    title: "Portfólio Pessoal",
                    project: Project.PersonalPortfolio,
                    desc: "Modern portfolio focused on software engineering, minimalist design, and fluid animations, highlighting projects, professional experience, and personal brand.",
                    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                    link: "https://felipegoulart.dev/",
                    linkCode: "https://github.com/ofelipegoulart/portfolio-website"
                },
                {
                    title: "Orkut Clone",
                    project: Project.OrkutClone,
                    desc: "A faithful recreation of Orkut that brings back the look and feel of the early 2000s, reviving classic features like scraps, communities, and personalized profiles, all built on a modern, more robust web architecture.",
                    tags: ["React", "Spring Boot", "Tailwind CSS", "PostgreSQL"],
                    link: "",
                    linkCode: "https://github.com/ofelipegoulart/orkut-clone"
                }
            ]
        },
        contact: {
            title: "Let's chat",
            subtitle: "Contact",
            desc: "Submit the form below and I will get back to you as soon as possible.",
            labelName: "NAME",
            labelEmail: "EMAIL",
            labelPhone: "PHONE",
            labelMsg: "MESSAGE",
            placeholderName: "Your name",
            placeholderEmail: "you@email.com",
            placeholderPhone: "+1 XXX XXX-XXXX",
            placeholderMsg: "How can I help you?",
            btnSubmit: "Send Message",
            btnSending: "Sending...",
            success: "Thank you! Your message was sent successfully.",
            error: "An error occurred. Please try again."
        },
        social: {
            location: "Florianópolis, Brazil",
        },
        footer: {
            desc: "Designed by Felipe Goulart.",
            rights: "All rights reserved."
        }
    }
} as const;

export default translations;
