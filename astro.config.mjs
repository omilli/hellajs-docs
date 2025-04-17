// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	integrations: [
		starlight({
			title: 'HellaJS',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omilli/hellajs' }],
			customCss: ['./src/styles/global.css'],
			sidebar: [
				{
					label: 'Home',
					link: '/',
				},
				// {
				// 	label: 'Learn',
				// 	items: [
				// 		{ label: 'Quick Start', slug: 'guides/quick-start' },
				// 		{ label: 'Concepts', slug: 'guides/concepts' },
				// 		{ label: 'Tutorial', slug: 'guides/todo-tutorial' },
				// 	],
				// },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});