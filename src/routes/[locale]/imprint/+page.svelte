<script lang="ts">
	import { page } from '$app/stores';
	import { initI18n } from '$lib/i18n';

	$: locale = $page.params.locale;
	$: t = initI18n(locale);
</script>

<svelte:head>
	<title>{t('imprint')}</title>
</svelte:head>

<div class="w-full flex flex-wrap justify-center my-2">
	<div class="w-5/6 lg:w-2/3">
		<div class="py-4">
			<h1>{@html t('imprint')}</h1>

			<h2>Angaben gemäß § 5 TMG</h2>
			<p>
				Ben Schiemann<br />
				Reinbeker Weg 70<br />
				21465 Wentorf<br />
				{@html t('germany')}
			</p>

			<h2>{@html t('contact')}</h2>
			<p>
				{@html t('tel')}: <a href="tel:+49 1516 4877269">+49 1516 4877269</a>
				<br />E-Mail: <a href="mailto:info@qreepex.xyz">info@qreepex.xyz</a>
			</p>

			<h2>EU-Streitschlichtung</h2>
			<p>
				Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
				<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"
					>https://ec.europa.eu/consumers/odr/</a
				>.<br />
				Unsere E-Mail-Adresse finden Sie oben im Impressum.
			</p>

			<h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
			<p>
				Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
				Verbraucherschlichtungsstelle teilzunehmen.
			</p>
			<p>Alle Texte sind urheberrechtlich geschützt.</p>
		</div>
	</div>
</div>

<style>
	p {
		margin-bottom: 1rem;
	}

	h2 {
		color: var(--color-accent);
		font-size: 1.5rem;
	}
</style>
