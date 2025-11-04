# Meu Portifólio feito com Next.js — Moderno e Minimalista

Projeto de portfólio desenvolvido com Next.js 14, React 18, Tailwind CSS e animações (Framer Motion, efeitos 3D, etc.). Focado em performance, responsividade e uma experiência visual agradável.

<p align="center">
  <a href="https://WedsonTavares.github.io/portifolio-pessoal/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Visitar%20Portf%C3%B3lio-915EFF?style=for-the-badge" alt="Visitar Portfólio" />
  </a>
</p>
## Recursos

- App Router (Next.js 14)
- Tailwind CSS com utilitários e animações
- Efeitos 3D/Canvas (three, react-three-fiber, three-globe)
- Componentes reutilizáveis (bento grid, cards, botões, navegação flutuante)
- Dados centralizados em `data/index.ts`
- Suporte a contato via WhatsApp no rodapé (configurável em `config/index.ts`)
- Export estático para GitHub Pages (workflow incluso)

## Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS, tailwind-merge, tailwindcss-animate
- Framer Motion
- three, @react-three/fiber, @react-three/drei, three-globe
- next-themes, react-icons

## Estrutura

- `app/` — páginas (App Router: `layout.tsx`, `page.tsx`)
- `components/` — componentes de UI e seções (Hero, Grid, Projetos, Experiência, Footer)
- `components/ui/` — componentes utilitários (nav flutuante, efeitos, etc.)
- `config/` — configurações do site e links (`config/index.ts`)
- `data/` — conteúdo estático: `navItems`, `gridItems`, `projects`, `testimonials`, `companies`, `techStack`
- `public/` — imagens e ícones

## Como rodar localmente

1) Requisitos: Node.js 18+ e npm

2) Instalar dependências:

```bash
npm install
```

3) Rodar o servidor de desenvolvimento:

```bash
npm run dev
```

4) Build de produção (Next.js):

```bash
npm run build
```

5) Export estático (usado para GitHub Pages):

```bash
npm run build
```

Com `output: "export"` no `next.config.mjs`, o build já gera a pasta `out/` com os arquivos estáticos.

## Onde editar conteúdo

- Ícones/tecnologias abaixo do título “Stack de Tecnologias”: editar `companies` em `data/index.ts`.
  - Para cada item: `{ id, name, img, nameImg }` — atualmente o componente usa apenas `img`.
  - Coloque o arquivo de ícone dentro de `public/` e referencie como `"/meu-icone.svg"`.
- Projetos e seus ícones: `projects[].iconLists` em `data/index.ts`.
- WhatsApp do rodapé: `config/index.ts` → `ownerWhatsApp` (número internacional sem `+` e espaços, ex.: `5511999999999`).
  - Mensagem padrão: `ownerWhatsAppMessage`.
- Itens de navegação, textos dos grids e experiência: `data/index.ts`.

## Deploy

### Vercel (recomendado)

1) Faça login na Vercel e importe o repositório.
2) Use as configurações padrão. A Vercel detecta Next.js automaticamente.
3) Após o deploy, o site ficará disponível no domínio fornecido pela Vercel.

### GitHub Pages (export estático)

Este projeto já está configurado para export estático e deploy automático via GitHub Actions:

- `next.config.mjs` define `output: 'export'`, `images.unoptimized: true` e configura `basePath/assetPrefix` quando `GITHUB_PAGES=true`.
- Workflow em `.github/workflows/deploy.yml` faz o build estático (gera `out/`) e publica no branch `gh-pages`.

Passos:

1) No GitHub, em Settings → Pages, selecione a fonte `Deploy from a branch` e `gh-pages` (raiz `/`).
2) Faça um push para `main`. O workflow irá:
   - Instalar deps (`npm ci`)
  - Executar `npm run build` com `GITHUB_PAGES=true`
   - Publicar `out/` em `gh-pages`
3) Acesse: `https://<seu-usuario>.github.io/<nome-do-repo>/`

Observação: Se o repositório for o do usuário (ex.: `wedson.github.io`), não é necessário `basePath`. O workflow continuará funcionando; o site aparecerá em `https://<seu-usuario>.github.io/`.

## Notas e dicas

- Use SVGs sempre que possível para ícones (mais leves e escaláveis).
- Mantenha `id` únicos em `companies`.
- Caso adicione imagens externas, configure domínios em `next.config.mjs` (se não usar export estático) — para export estático, prefira assets em `public/`.



## Licença

Este repositório é de uso pessoal de `Wedson Tavares`. Se desejar utilizar como base, mantenha os créditos e revise as dependências antes do uso em produção.
