<script lang="ts">
	import { page } from '$app/stores';
	import { initI18n } from '$lib/i18n';

	$: locale = $page.params.locale;
	$: t = initI18n(locale);
</script>

<svelte:head>
	<title>{t('licenses')}</title>
</svelte:head>

<div class="w-full flex flex-wrap justify-center my-2">
	<div class="w-5/6 lg:w-2/3">
		<div class="py-4">
			<h1>{@html t('licenses')}</h1>
			<h2>I use the following products to build and run this site:</h2>

			<ul>
				<li>
					<a href="//svelte.dev/" target="_blank" rel="noopener noreferrer">Svelte</a>
				</li>
				<li>
					<a href="//tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>
				</li>
				<li>
					<a href="//typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>
				</li>
				<li>
					<a href="//nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>
				</li>
				<li>
					<a href="//nginx.org/" target="_blank" rel="noopener noreferrer">Nginx</a>
				</li>
				<li>
					<a href="//postcss.org/" target="_blank" rel="noopener noreferrer">PostCSS</a>
				</li>
				<li>
					<a href="//sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a>
				</li>
				<li>
					<a href="//vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
				</li>
			</ul>
		</div>
	</div>
</div>

