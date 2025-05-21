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
					label: 'Overview',
					link: '/'
				},
				{
					label: 'Learn',
					autogenerate: { directory: 'guides' },
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