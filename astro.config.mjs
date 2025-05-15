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
					label: 'Learn',
					items: [
						{
							label: 'Quick Start',
							link: '/',
						},
						{
							label: 'Tutorial',
							slug: 'guides/todo-tutorial'
						},
					],
				},
				{
					label: 'API',
					autogenerate: { directory: 'api' },
				},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});