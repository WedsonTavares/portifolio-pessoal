# 🚀 Portfólio Wedson Tavares — Next.js 14

Portfólio pessoal moderno e minimalista desenvolvido com **Next.js 14**, **React 18**, **TypeScript** e **Tailwind CSS**. Com animações suaves, efeitos 3D, SEO otimizado e deploy automatizado para GitHub Pages.

<p align="center">
  <a href="https://WedsonTavares.github.io/portifolio-pessoal/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/🌐%20Visitar%20Portfólio-915EFF?style=for-the-badge" alt="Visitar Portfólio" />
  </a>
</p>

---

## ✨ Features

- ⚡ **App Router** do Next.js 14 (Server Components e Client Components)
- 🎨 **Tailwind CSS** com utilitários personalizados e animações
- 🌍 **Globo 3D interativo** com Three.js e react-three-fiber
- 🎭 **Animações fluidas** com Framer Motion e Lottie
- 📱 **Design responsivo** otimizado para mobile, tablet e desktop
- 🔍 **SEO otimizado** com Open Graph, Twitter Cards e JSON-LD (Schema.org)
- 💬 **Contato via WhatsApp** configurável no rodapé
- 📄 **Download de CV** direto do Hero
- 🚀 **Deploy automatizado** para GitHub Pages via GitHub Actions
- 🎯 **Export estático** para máxima performance e compatibilidade

---

## 🛠️ Tech Stack

### Core
- **Next.js** 14.2.3 (App Router)
- **React** 18
- **TypeScript** 5
- **Tailwind CSS** 3.4.1

### Animações & 3D
- **Framer Motion** 11.0.28
- **Three.js** + @react-three/fiber + @react-three/drei
- **three-globe** 2.31.0
- **Lottie** (react-lottie)

### UI & Utilities
- **clsx** / **tailwind-merge** (utilitários de classe)
- **tailwindcss-animate** (animações Tailwind)
- **react-icons** (ícones Font Awesome)
- **next-themes** (tema escuro/claro)

---

## 📁 Estrutura do Projeto

```
portifolio-pessoal/
├── app/
│   ├── layout.tsx          # Layout raiz com metadata
│   ├── page.tsx            # Página principal
│   ├── provider.tsx        # Provider de tema
│   ├── globals.css         # Estilos globais
│   └── head.tsx            # Meta tags adicionais (canonical, JSON-LD)
├── components/
│   ├── hero.tsx            # Seção Hero com CTAs (Veja meu trabalho, Baixar CV)
│   ├── grid.tsx            # Grid de informações (Bento Grid)
│   ├── grid-globe.tsx      # Globo 3D interativo
│   ├── recent-projects.tsx # Projetos destacados
│   ├── clients.tsx         # Stack de tecnologias (ícones)
│   ├── experience.tsx      # Experiência profissional
│   ├── approach.tsx        # Abordagem de trabalho
│   ├── footer.tsx          # Rodapé com contato WhatsApp
│   └── ui/                 # Componentes reutilizáveis
│       ├── floating-nav.tsx
│       ├── bento-grid.tsx
│       ├── 3d-pin.tsx
│       ├── magic-button.tsx
│       └── ...
├── config/
│   └── index.ts            # Configuração central (SEO, links, WhatsApp, CV)
├── data/
│   ├── index.ts            # Dados do portfólio (navItems, projects, companies, etc.)
│   ├── confetti.json       # Animação Lottie (35k+ linhas)
│   └── globe.json          # GeoJSON para o globo 3D (12k+ linhas)
├── lib/
│   └── utils.ts            # Utilitários (cn, withBasePath)
├── public/                 # Assets estáticos (imagens, ícones, CV)
├── .github/workflows/
│   └── deploy.yml          # CI/CD para GitHub Pages
├── next.config.mjs         # Configuração do Next.js (export, basePath)
└── package.json
```

---

## 🚀 Como Rodar Localmente

### Requisitos
- **Node.js** 18+ 
- **npm** ou **bun**

### Instalação

```bash
# Clone o repositório
git clone https://github.com/WedsonTavares/portifolio-pessoal.git
cd portifolio-pessoal

# Instale as dependências
npm install
# ou
bun install
```

### Desenvolvimento

```bash
npm run dev
# Acesse http://localhost:3000
```

### Build de Produção

```bash
npm run build
# Gera a pasta out/ com arquivos estáticos
```

### Preview da Build

```bash
# Após o build, você pode servir localmente:
npx serve out
```

---

## ⚙️ Personalização

### 1. Informações Pessoais e SEO

Edite **\`config/index.ts\`**:

```typescript
export const links = {
  ownerName: "Seu Nome",
  ownerEmail: "seu@email.com",
  ownerWhatsApp: "5511999999999", // Formato internacional sem + e espaços
  ownerWhatsAppMessage: "Olá! Vi seu portfólio...",
  cvUrl: "/seu-cv.pdf", // Coloque o PDF em public/
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-perfil",
  // ...
};

export const siteConfig = {
  title: "Seu Nome Portfólio",
  description: "Sua descrição aqui...",
  metadataBase: new URL("https://seu-usuario.github.io/seu-repo"),
  openGraph: {
    title: "Seu Nome — Desenvolvedor Full Stack",
    description: "Portfólio com projetos...",
    url: "https://seu-usuario.github.io/seu-repo",
    siteName: "Seu Nome Portfólio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    // ...
  },
  // ...
};
```

### 2. Conteúdo (Projetos, Experiência, Stack)

Edite **\`data/index.ts\`**:

- **\`navItems\`**: Links da navegação
- **\`gridItems\`**: Cards do Bento Grid
- **\`projects\`**: Seus projetos destacados (título, descrição, imagem, tecnologias, link)
- **\`companies\`**: Ícones do stack de tecnologias (aparece na seção "Stack de Tecnologias")
- **\`workExperience\`**: Experiências profissionais
- **\`socialMedia\`**: Links de redes sociais no rodapé

**Exemplo (adicionar um projeto):**

```typescript
{
  id: 4,
  title: "Meu Novo Projeto",
  des: "Descrição breve do projeto...",
  img: "/projeto4.svg",
  iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
  link: "https://github.com/usuario/projeto"
}
```

### 3. Adicionar Tecnologias/Ícones

1. Coloque o ícone \`.svg\` em **\`public/\`** (ex.: \`public/meu-icon.svg\`)
2. Adicione em \`data/index.ts\` → \`companies\`:

```typescript
{
  id: 9,
  name: "Minha Tech",
  img: "/meu-icon.svg",
}
```

### 4. CV (Download)

1. Coloque seu arquivo PDF em **\`public/\`** (ex.: \`public/meu-cv.pdf\`)
2. Atualize **\`config/index.ts\`**:

```typescript
cvUrl: "/meu-cv.pdf",
```

O botão "Baixar CV" no Hero usará esse caminho.

---

## 🌐 Deploy

### GitHub Pages (Automático)

Este projeto está configurado para deploy automático com **GitHub Actions**.

#### Passo a passo:

1. **Configure o GitHub Pages:**
   - Vá em **Settings → Pages** no repositório
   - Selecione **Deploy from a branch**
   - Branch: **\`gh-pages\`**, pasta: **\`/ (root)\`**

2. **Push para \`main\`:**
   ```bash
   git add .
   git commit -m "Deploy automático"
   git push origin main
   ```

3. **Aguarde o workflow:**
   - Acesse a aba **Actions** para ver o progresso
   - O workflow irá:
     - Instalar dependências (\`npm ci\`)
     - Executar \`npm run build\` com \`GITHUB_PAGES=true\`
     - Publicar a pasta \`out/\` no branch \`gh-pages\`

4. **Acesse o site:**
   ```
   https://<seu-usuario>.github.io/<nome-do-repo>/
   ```

#### ⚙️ Como funciona?

- **\`next.config.mjs\`**: Define \`output: 'export'\` e configura \`basePath\`/\`assetPrefix\` quando \`GITHUB_PAGES=true\`
- **\`.github/workflows/deploy.yml\`**: Workflow que faz build e deploy
- **\`lib/utils.ts\`**: Função \`withBasePath()\` prefixada todos os assets locais com o \`basePath\` correto

#### 📝 Observação sobre \`basePath\`

Se o repositório for o do usuário (ex.: \`wedson.github.io\`), **não é necessário basePath**. O site aparecerá em \`https://wedson.github.io/\`.

---

### Vercel (Recomendado para produção)

1. Faça login na [Vercel](https://vercel.com)
2. Importe o repositório GitHub
3. Use as configurações padrão (a Vercel detecta Next.js automaticamente)
4. Deploy! 🚀

**Variáveis de ambiente:**
- Se usar basePath na Vercel, adicione \`NEXT_PUBLIC_BASE_PATH\` nas variáveis de ambiente

---

## 🔍 SEO e Compartilhamento

### Open Graph & Twitter Cards

O projeto já inclui meta tags para:
- **LinkedIn**: Preview com imagem e descrição
- **WhatsApp**: Preview com título e thumbnail
- **Google**: Rich snippets com JSON-LD (Schema.org Person)
- **Twitter/X**: Twitter Card com imagem

### Testar SEO

1. **Open Graph Debugger:**
   - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

2. **Twitter Card Validator:**
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Google Rich Results:**
   - [Rich Results Test](https://search.google.com/test/rich-results)

### Customizar imagem de compartilhamento

1. Crie uma imagem **1200x630px** (formato OG padrão)
2. Salve em **\`public/og-image.png\`**
3. Atualize **\`config/index.ts\`** → \`siteConfig.openGraph.images\`

---

## �� Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev         # Inicia servidor local (porta 3000)

# Build
npm run build       # Build de produção (gera out/)

# Linting
npm run lint        # Verifica erros de lint
```

---

## 🎨 Customização Avançada

### Cores e Tema

- **\`tailwind.config.ts\`**: Defina cores personalizadas, fontes, animações
- **\`app/globals.css\`**: Estilos globais e variáveis CSS

### Animações

- **Framer Motion**: Edite componentes para ajustar animações (duration, delay, variants)
- **Lottie**: Substitua \`data/confetti.json\` por outra animação do [LottieFiles](https://lottiefiles.com/)

### Globo 3D

- **\`components/grid-globe.tsx\`**: Ajuste cores, tamanho, velocidade de rotação
- **\`data/globe.json\`**: GeoJSON com polígonos de países (fonte: [Natural Earth](https://www.naturalearthdata.com/))

---

## 🐛 Troubleshooting

### Imagens não aparecem no GitHub Pages

**Causa:** Caminhos absolutos sem \`basePath\`

**Solução:**
- Use a função \`withBasePath()\` de \`lib/utils.ts\`:
  ```tsx
  import { withBasePath } from "@/lib/utils";
  <img src={withBasePath("/minha-imagem.png")} />
  ```

### Build falha com erro de otimização de imagens

**Causa:** Export estático não suporta otimização de imagens do Next.js

**Solução:**
- Verifique se \`next.config.mjs\` tem:
  ```js
  images: { unoptimized: true }
  ```

### WhatsApp não abre no rodapé

**Causa:** Formato do número incorreto

**Solução:**
- Use formato internacional sem \`+\`, espaços ou traços:
  ```typescript
  ownerWhatsApp: "5511999999999" // Correto
  ownerWhatsApp: "+55 11 99999-9999" // Incorreto
  ```

### CV não faz download

**Causa:** Arquivo não está em \`public/\` ou caminho incorreto

**Solução:**
1. Coloque o PDF em \`public/meu-cv.pdf\`
2. Atualize \`config/index.ts\`:
   ```typescript
   cvUrl: "/meu-cv.pdf"
   ```

---

## 📄 Licença

Este repositório é de uso pessoal de **Wedson Tavares**. 

Se desejar utilizar como base para seu próprio portfólio:
- ✅ Mantenha os créditos originais
- ✅ Revise as dependências antes do uso em produção
- ✅ Customize conforme suas necessidades

---

## 👨‍💻 Autor

**Wedson Tavares**

- 🌐 [Portfólio](https://WedsonTavares.github.io/portifolio-pessoal/)
- 💼 [LinkedIn](https://linkedin.com/in/wedson-tavares)
- 🐙 [GitHub](https://github.com/WedsonTavares)

---

<p align="center">
  Feito com 💜 por <strong>Wedson Tavares</strong>
</p>

<p align="center">
  <a href="https://WedsonTavares.github.io/portifolio-pessoal/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/🌐%20Visitar%20Portfólio-915EFF?style=for-the-badge" alt="Visitar Portfólio" />
  </a>
</p>
