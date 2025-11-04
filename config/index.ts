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
  description: " Portfolio Moderno e Minimalista feito com Next.js .",
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
    "modern-portfolio",
    "portfolio",
    "3d-portfolio",
    "animated-portfolio",
    "nextjs-portfolio",
    "react-portfolio",
    "react-three-fiber",
    "three.js",
    "animated-website",
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
  ] as Array<string>,
  // Base URL onde o site será publicado (usado para gerar URLs absolutas em Open Graph/Twitter)
  metadataBase: new URL(
    "https://WedsonTavares.github.io/portifolio-pessoal"
  ),
  openGraph: {
    title: `${links.ownerName} Portifólio`,
    description: "Modern & Minimalist Next.js Portfolio.",
    url: "https://WedsonTavares.github.io/portifolio-pessoal",
    siteName: `${links.ownerName}`,
    images: [
      {
        url: new URL("/dev.png", "https://WedsonTavares.github.io/portifolio-pessoal").toString(),
        width: 1200,
        height: 630,
        alt: `${links.ownerName} — Portifólio`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${links.ownerName} Portifólio`,
    description: "Modern & Minimalist Next.js Portfolio.",
    images: [new URL("/dev.png", "https://WedsonTavares.github.io/portifolio-pessoal").toString()],
  },
  icons: {
    icon: "/profile.svg",
    shortcut: "/profile.svg",
    apple: "/profile.svg",
  },
  authors: {
    name: links.ownerName,
    url: "https://github.com/WedsonTavares",
  },
} as const;
