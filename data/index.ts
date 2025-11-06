import { links } from "@/config";

export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Contato", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Priorizo a colaboração com o cliente, promovendo uma comunicação aberta e eficiente.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou flexível com modelos de trabalho.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "FullStack Júnior",
    description: "Aprendizado e melhoria contínua.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia com paixão por desenvolvimento e inovação.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Atualmente desenvolvendo um Saas com Next.js e TypeScript.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer iniciar um projeto comigo?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [

  {
    id: 1,
    title: "AdminHub - Sistema FullStack para controle de produtos e clientes.",
    des: "Sistema para controle de produtos, vendas, estoque e clientes.",
    img: "/projects/adminhub.png",
    iconLists: [
      "/next.svg",
      "/react.svg",
      "/tail.svg",
      "/supabase.svg",
      "/fm.svg",
      "/ts.svg",
      "/node.svg",
      "/supabase.svg",
    ],
    link: "https://github.com/WedsonTavares/dashboard-saas",
    sourceCode: "https://github.com/WedsonTavares/dashboard-saas",
  },
  {
    id: 2,
    title: "ClouDence - Landing Page para uma empresa de desenvolvimento de software.",
    des: "Página de demonstração totalmente responsiva para uma empresa de software (CodeVance). Desenvolvida com Next.js, React, Tailwind CSS e algumas bibliotecas auxiliares (AOS, react-icons, next-themes).",
    img: "/projects/cloudence.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg", "/ts.svg"],
    link: "https://cloudence.netlify.app/",
    sourceCode: "https://github.com/WedsonTavares/cloudence",
  },
  {
    id: 3,
    title: "Landing Page - Vidrocar.",
    des: "Landing Page moderna e animada, UX aprimorada para loja de lavagem de carros.",
    img: "/projects/vidrocar.png",
    iconLists: ["/react.svg", "/tail.svg", "/fm.svg", "/ts.svg",],
    link: "https://www.vidrocartga.com.br/",
    sourceCode: "https://github.com/WedsonTavares",
  },
  {
    id: 4,
    title: "FullStack - WebSite Portfólio.",
    des: "Website Portfólio moderno e responsivo para apresentar habilidades e projetos.",
    img: "/projects/dev.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/react.svg", "/fm.svg", "/cloud.svg", "/emailjs.png", "/mongodb.svg"],
    link: "https://tavaresdev.com/",
    sourceCode: "https://github.com/WedsonTavares/fullstack",
  },
  {
    id: 5,
    title: "Interiores - LandingPage",
    des: "Landing Page moderna e animada, UX aprimorada para loja de móveis Planejados.",
    img: "/projects/interiores.png",
    iconLists: ["/next.svg", "/tail.svg", "/fm.svg", "/js.svg"],
    link: "https://leafy-salamander-302e1a.netlify.app/",
    sourceCode: "https://github.com/WedsonTavares/interiores",
  },
  {
    id: 5,
    title: "BarberShop - LandingPage",
    des: "Landing Page moderna e animada, UX aprimorada para barbearias.",
    img: "/projects/barber.png",
    iconLists: ["/next.svg", "/tail.svg", "/fm.svg", "/js.svg"],
    link: "https://wedsontavares.github.io/landin-barber/",
    sourceCode: "https://github.com/WedsonTavares/landin-barber",
  },
] as const;

export const testimonials = [
  {
    quote: `Colaborar com ${links.ownerName} foi uma excelente experiência. Profissionalismo, dedicação e foco em resultados estiveram presentes em todas as etapas do projeto. Seu entusiasmo com cada detalhe do desenvolvimento realmente se destaca.`,
    name: "Cliente satisfeito",
    title: "Empreendedor Digital",
  },
  {
    quote: `Trabalhar com ${links.ownerName} foi extremamente produtivo. Sempre comprometido com prazos, qualidade e comunicação clara.`,
    name: "Parceiro de Projeto",
    title: "Desenvolvedor Front-End",
  },
] as const;

export const companies = [
  {
    id: 3,
    name: "React",
    img: "/react.svg",
    nameImg: "/react.svg",
  },
  {
    id: 5,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/next.svg",
  },
  {
    id: 1,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 2,
    name: "Supabase",
    img: "/supabase.svg",
    nameImg: "/supabaseName.svg",
  },
  {
    id: 4,
    name: "Vercel",
    img: "/vercel-logomark.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "/mongodb.svg",
  },
  {
    id: 7,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/tsName.svg",
  },
  {
    id: 10,
    name: "JavaScript",
    img: "/js.svg",
    nameImg: "/jsName.svg",
  },
  {
    id: 11,
    name: "tailwindCSS",
    img: "/tail.svg",
    nameImg: "/tailName.svg",
  },
  {
    id: 12,
    name: "Mui",
    img: "/material-ui.svg",
    nameImg: "/muiName.svg",
  },
  {
    id: 8,
    name: "Github",
    img: "/git.svg",
    nameImg: "/gitName.svg",
  },
  {
    id: 9,
    name: "Git",
    img: "/git1.svg",
    nameImg: "/gitName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor Front-End Júnior",
    desc: "Desenvolvimento de interfaces modernas e responsivas com React.js e Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desenvolvedor Back-End Júnior",
    desc: "Criação de aplicativos multiplataforma com React Native e integração com APIs REST.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projetos Freelance",
    desc: "Desenvolvimento completo de aplicações web para clientes locais e remotos.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Desenvolvedor Full-Stack",
    desc: "Criação e manutenção de sistemas completos com Node.js, Express e Supabase.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;
export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/WedsonTavares",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/wedsontavares/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "TypeScript"],
  stack2: ["Node.js", "Supabase", "Docker"],
} as const;
