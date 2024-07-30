<script>
	import { browser } from '$app/environment';
	import Footer from '$lib/Footer.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import { page } from '$app/stores';

	onMount(() => {
		if(browser) {
			document.documentElement.setAttribute('lang', $page.params.locale);
			page.subscribe((value) => {
				document.documentElement.setAttribute('lang', value.params.locale);
			})
		}
	})
</script>

<main>
	<slot />
</main>

<Footer />
