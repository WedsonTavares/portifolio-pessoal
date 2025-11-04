💻 Meu Portfólio — Moderno e Minimalista com Next.js

Portfólio pessoal desenvolvido com Next.js 14, React 18 e Tailwind CSS, com animações via Framer Motion e efeitos 3D (Three.js).
Focado em performance, responsividade e experiência visual fluida.

<p align="center"> <a href="https://WedsonTavares.github.io/portifolio-pessoal/" target="_blank" rel="noopener noreferrer"> <img src="https://img.shields.io/badge/🌐%20Visitar%20Portfólio-915EFF?style=for-the-badge" alt="Visitar Portfólio" /> </a> <br/> <a href="https://github.com/WedsonTavares" target="_blank" rel="noopener noreferrer"> <img src="https://img.shields.io/badge/GitHub-WedsonTavares-black?style=for-the-badge&logo=github" alt="GitHub" /> </a> </p>
✨ Recursos Principais

🚀 App Router (Next.js 14)

🎨 Tailwind CSS com animações utilitárias

🌌 Efeitos 3D e Canvas com three, @react-three/fiber e three-globe

🧩 Componentes reutilizáveis (Bento Grid, Cards, Botões, Navegação flutuante)

📦 Dados centralizados em data/index.ts

💬 Contato via WhatsApp configurável (config/index.ts)

🧱 Export estático pronto para GitHub Pages (workflow incluído)

⚙️ Stack Tecnológica

Next.js 14, React 18, TypeScript

Tailwind CSS, tailwind-merge, tailwindcss-animate

Framer Motion

three, @react-three/fiber, @react-three/drei, three-globe

next-themes, react-icons

🗂️ Estrutura do Projeto
app/           → Páginas (App Router: layout.tsx, page.tsx)
components/    → Componentes de UI e seções (Hero, Grid, Projetos, Experiência, Footer)
components/ui/ → Componentes utilitários (nav flutuante, efeitos, etc.)
config/        → Configurações e links globais (config/index.ts)
data/          → Conteúdo estático (navItems, projects, techStack, etc.)
public/        → Imagens e ícones

🧠 Como Rodar Localmente

Pré-requisitos: Node.js 18+ e npm

Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


Crie o build de produção:

npm run build


Gere o export estático (para GitHub Pages):

npm run build


O next.config.mjs já possui output: "export", gerando a pasta out/ pronta para publicação.

🧩 Onde Editar o Conteúdo

Ícones / Tecnologias: editar companies em data/index.ts

Estrutura: { id, name, img, nameImg }

Coloque os SVGs em public/ e referencie como "/icone.svg"

Projetos e ícones: projects[].iconLists em data/index.ts

WhatsApp (rodapé): config/index.ts → ownerWhatsApp

Formato: 5516999999999 (sem +, espaços ou traços)

Mensagem padrão: ownerWhatsAppMessage

Textos, navegação e grids: data/index.ts

🚀 Deploy
✅ Vercel (Recomendado)

Faça login na Vercel e importe este repositório.

Use as configurações padrão (detecção automática do Next.js).

Após o deploy, o site ficará disponível em um domínio da Vercel.

🧱 GitHub Pages (Export Estático)

O projeto já vem configurado para deploy automático via GitHub Actions:

next.config.mjs:

output: 'export'

images.unoptimized: true

Configura basePath/assetPrefix se GITHUB_PAGES=true

Workflow: .github/workflows/deploy.yml

Passos:

Em Settings → Pages, defina:

Source: Deploy from a branch

Branch: gh-pages (pasta /)

Faça push para main. O workflow executará:

npm ci

npm run build com GITHUB_PAGES=true

Publicará out/ em gh-pages

Acesse:

https://<usuario>.github.io/<nome-do-repo>/


Se for um repositório de usuário (ex.: wedson.github.io), não precisa basePath.

💡 Dicas

Prefira SVGs para ícones (leves e escaláveis)

Garanta id únicos em companies

Se usar imagens externas (sem export estático), adicione domínios em next.config.mjs

Para export estático, sempre use assets locais em public/

🧾 Licença

Este repositório é de uso pessoal de Wedson Tavares.
Você pode utilizá-lo como base mantendo os créditos e revisando as dependências antes de uso em produção.