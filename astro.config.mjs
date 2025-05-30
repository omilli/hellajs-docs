// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	integrations: [
		starlight({
			title: 'HellaJS',
			logo: {
				src: '/public/favicon.svg',
				alt: 'HellaJS Logo',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omilli/hellajs' }],
			customCss: ['./src/styles/global.css'],
			sidebar: [
				{
					label: 'Quick Start',
					link: '/',
				},
				{
					label: 'Overview',
					autogenerate: { directory: 'overview' },
				},
				{
					label: 'Learn',
					autogenerate: { directory: 'learn' },
				},
				{
					label: 'Packages',
					items: [
						{ label: '@hellajs/core', autogenerate: { directory: 'packages/core' } },
						{ label: '@hellajs/dom', autogenerate: { directory: 'packages/dom' } },
						{ label: '@hellajs/store', autogenerate: { directory: 'packages/store' } },
						{ label: '@hellajs/resource', autogenerate: { directory: 'packages/resource' } },
						{ label: '@hellajs/router', autogenerate: { directory: 'packages/router' } },
					]
				}
			]
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});