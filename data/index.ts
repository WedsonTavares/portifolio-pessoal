import { links } from "@/config";

export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Depoimentos", link: "#testimonials" },
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
    title: "Sou flexível com fusos horários e comunicação em tempo real.",
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
    title: "FigPro - Ferramenta de Design Colaborativa",
    des: "Uma ferramenta de design com edição vetorial e colaboração em tempo real.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/WedsonTavares",
  },
  {
    id: 2,
    title: "Yoom - Aplicativo de Videoconferência",
    des: "Aplicativo moderno para reuniões online, com integração em tempo real e UX aprimorada.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/WedsonTavares",
  },
  {
    id: 3,
    title: "AI Image SaaS - Aplicativo tipo Canva",
    des: "Aplicação SaaS com IA, sistema de créditos e funcionalidades avançadas de edição.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/WedsonTavares",
  },
  {
    id: 4,
    title: "Website 3D do iPhone",
    des: "Recriação do site da Apple com efeitos 3D e animações realistas utilizando Three.js e GSAP.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "https://github.com/WedsonTavares",
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
    id: 3,
    name: "React",
    img: "/react.svg",
    nameImg: "/react.svg",
  },
    {
    id: 4,
    name: "Vercel",
    img: "/vercel.svg",
    nameImg: "/vercelName.svg",
  },
  {
    id: 5,
    name: "Next.js",
    img: "/next.svg",
    nameImg: "/next.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    img: "/mongodb.svg",
    nameImg: "/mongodb.svg",
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
