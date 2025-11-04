/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY
	? process.env.GITHUB_REPOSITORY.split("/")[1]
	: "portifolio-pessoal";

const base = isGithubPages ? `/${repoName}` : "";

const nextConfig = {
	// Exporta como site estático para compatibilidade com GitHub Pages
	output: "export",
	// Usa imagens sem otimização (necessário para export estático)
	images: {
		unoptimized: true,
	},
	// Ajusta caminhos quando publicado em GitHub Pages (projeto)
	basePath: base || undefined,
	assetPrefix: base || undefined,
	trailingSlash: true,
};

export default nextConfig;
