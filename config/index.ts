import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/WedsonTavares/portifolio-pessoal.git",
  ownerName: "Wedson Tavares",
  ownerEmail: "wedsonsobral@gmail.com",
  ownerWhatsApp: "5516992331680",
  // Mensagem padrão opcional para pré-preencher ao abrir o WhatsApp.
  ownerWhatsAppMessage: "Olá, gostaria de conversar sobre um projeto.",
  cvUrl: "/Jose_Wedson_Tavares_da_Silva_Sobral_Desenvolvedor_Junior_FullStack.pdf",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName} Portifólio`,
  description: "Portfólio Moderno e Minimalista desenvolvido com Next.js, React e TypeScript.",
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "aceternity",
    "aceternity-ui",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "portifolio-moderno",
    "portfolio",
    "portifolio-3d",
    "portifolio-animado",
    "nextjs-portfolio",
    "react-portfolio",
    "react-three-fiber",
    "three.js",
    "website-animado",
    "framer",
    "framer-motion",
    "three",
    "react-icons",
    "lucide-react",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
    "desenvolvedor-fullstack",
    "desenvolvedor-frontend",
    "desenvolvedor-backend",
  ] as Array<string>,
  // Base URL onde o site será publicado (usado para gerar URLs absolutas em Open Graph/Twitter)
  metadataBase: new URL(
    "https://WedsonTavares.github.io/portifolio-pessoal"
  ),
  openGraph: {
    title: `${links.ownerName} — Desenvolvedor Full Stack`,
    description: "Portfólio moderno e minimalista com projetos em React, Next.js, TypeScript e mais.",
    url: "https://WedsonTavares.github.io/portifolio-pessoal",
    siteName: `${links.ownerName} Portifólio`,
    images: [
      {
        url: new URL("/dev.png", "https://WedsonTavares.github.io/portifolio-pessoal").toString(),
        width: 1200,
        height: 630,
        alt: `${links.ownerName} — Desenvolvedor Full Stack`,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${links.ownerName} — Desenvolvedor Full Stack`,
    description: "Portfólio moderno e minimalista com projetos em React, Next.js, TypeScript e mais.",
    images: [new URL("/dev.png", "https://WedsonTavares.github.io/portifolio-pessoal").toString()],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/dev.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/dev.png",
  },
  authors: {
    name: links.ownerName,
    url: "https://github.com/WedsonTavares",
  },
} as const;
