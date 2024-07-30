<script lang="ts">
	import { page } from '$app/stores';
	import { initI18n } from '$lib/i18n';

	$: locale = $page.params.locale;
	$: t = initI18n(locale);
</script>

<svelte:head>
	<title>{t('contact')}</title>
</svelte:head>

<div class="w-full flex flex-wrap justify-center my-2">
	<div class="w-5/6 lg:w-2/3">
		<div class="py-4">
			<h1>{@html t('contact')}</h1>
			<h2>You can contact me using the following options:</h2>

			<p>
				Ben Schiemann<br />
				Reinbeker Weg 70<br />
				21465 Wentorf<br />
				{@html t('germany')}
			</p>

			<br />

			<p>
				{@html t('tel')}: <a href="tel:+49 1516 4877269">+49 1516 4877269</a>
			</p>
			<p>E-Mail: <a href="mailto:info@qreepex.xyz">info@qreepex.xyz</a></p>
			<!-- svelte-ignore a11y-missing-attribute -->

			<p>
				LinkedIn: <a
					href="//linkedin.com/in/ben-schiemann/"
					target="_blank"
					rel="noopener noreferrer">Ben Schiemann</a
				>
			</p>
			<p>
				GitHub: <a href="//github.com/qreepex">@qreepex</a>
			</p>
			<!-- svelte-ignore a11y-missing-attribute -->
			<p>Discord: <a>@qreepex</a></p>
		</div>
	</div>
</div>

<style>
	p {
		margin: 0.5rem 0rem;
	}
</style>
