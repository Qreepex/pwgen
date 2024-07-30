<script>
	import { page } from '$app/stores';
	import { initI18n } from '$lib/i18n';

	$: locale = $page.params.locale;
	$: t = initI18n(locale);
</script>

<footer>
	<div class="w-5/6 lg:w-3/4 footer-contents">
		<div class="w-full lg:w-1/3 order-3 lg:order-1">
			<h2>{@html t('title')}</h2>
			<p>
				&copy; 2022-2024 - <img src="/icon.webp" class="footerlogo" alt="Ben Schiemann Logo" />
				<a href="//schiemann.work">Ben Schiemann</a>
			</p>
		</div>

		<div class="w-1/2 lg:w-1/3 order-1 lg:order-2">
			<h2>{@html t('languages')}</h2>
			<ul>
				<li>
					<a href="/en">{@html t('english')}</a>
				</li>
				<li>
					<a href="/de">{@html t('german')}</a>
				</li>
				<li>
					<a href="/es">{@html t('spanish')}</a>
				</li>
				<li>
					<a href="/ru">{@html t('russian')}</a>
				</li>
				<li>
					<a href="/fr">{@html t('french')}</a>
				</li>
				<li>
					<a href="/pt">{@html t('portuguese')}</a>
				</li>
				<li>
					<a href="/it">{@html t('italian')}</a>
				</li>
				<li>
					<a href="/nl">{@html t('dutch')}</a>
				</li>
			</ul>
		</div>

		<div class="w-1/2 lg:w-1/3 order-2 lg:order-3">
			<h2>{@html t('otherLinks')}</h2>
			<ul>
				<li>
					<a href="/{locale}/contact">{@html t('contact')}</a>
				</li>
				<li>
					<a href="/{locale}/imprint">{@html t('imprint')}</a>
				</li>
				<li>
					<a href="/{locale}/privacy">{@html t('privacy')}</a>
				</li>
				<li>
					<a href="/{locale}/licenses">{@html t('licenses')}</a>
				</li>
			</ul>
		</div>
	</div>
</footer>

<div class="hint">
	<p>
		Made with <span>♥</span> in Germany | Not storing any personal information nor passwords | GDPR-compliant
	</p>
</div>

<style lang="scss">
	footer {
		position: relative;
		margin-top: auto;
		width: 100%;
		display: flex;
		justify-content: center;
		background-color: var(--color-primary-dark);
		border-top: 1px solid var(--color-accent);

		.footer-contents {
			justify-content: center;
			display: flex;
			flex-wrap: wrap;

			div {
				margin-top: 1rem;

				h2 {
					font-weight: 900;
					margin: 0;
					padding: 0;
					font-size: x-large;
					color: #fff;
				}

				ul {
					// list-style-type: none;
					padding: 0rem 0rem 0rem 1rem;
					margin: 1rem 0rem 2rem 0rem;

					li {
						margin: 0.5rem 0rem;
						line-height: 1.25rem;
					}
				}

				img {
					display: inline-block;
					align-content: center;
					text-align: center;
					border-radius: 15px;
					height: 24px;
					width: 24px;
					transform: translateY(5px);
				}
			}
		}
	}

	.hint {
		width: 100%;
		background-color: var(--color-primary);
		margin: 0;

		p {
			text-align: center;
			font-size: 0.75rem;
			padding: 1rem;
			margin: 0;
			span {
				color: var(--color-accent);
			}
		}
	}
</style>
