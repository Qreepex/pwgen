<script lang="ts">
	import { page } from '$app/stores';
	import Alert from '$lib/Alert.svelte';
	import { initI18n } from '$lib/i18n';

	export let data;

	$: locale = $page.params.locale;
	$: t = initI18n(locale);

	const maxLength = 1024;

	let length = data?.settings?.length || 16,
		includeNumbers =
			data?.settings?.includeNumbers !== undefined ? data.settings.includeNumbers : true,
		includeSymbols =
			data?.settings?.includeSymbols !== undefined ? data.settings.includeSymbols : true,
		password = '',
		copied = false,
		to: any,
		ch = false,
		save = data?.settings?.save !== undefined ? data.settings.save : false;

	$: password;

	const generatePassword = () => {
		const charset =
			'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' +
			(includeNumbers ? '0123456789' : '') +
			(includeSymbols ? '!@#$%^&*()_+~`|}{[]:;?><,./-=' : '');

		password = Array.from(
			{ length: length > maxLength ? maxLength : length },
			() => charset[Math.floor(Math.random() * charset.length)]
		).join('');

		ch = true;
		copied = false;
		clearTimeout(to);

		saveCookie();
	};
	const copy = () => {
		if (password.length < length) generatePassword();

		if (!ch) return;

		navigator.clipboard.writeText(password);

		copied = true;
		clearTimeout(to);
		ch = false;
		to = setTimeout(() => {
			copied = false;
		}, 6000);
	};

	const saveCookie = () => {
		if (!save) {
			document.cookie = `settings=; max-age=0; path=/`;
			return;
		}
		// save settings as a cookie
		document.cookie = `settings=${btoa(JSON.stringify({ length, includeNumbers, includeSymbols, save }))}; max-age=31536000; path=/`;
	};
</script>

<svelte:head>
	<title>{t('title')}</title>
</svelte:head>

{#if copied}
	<Alert text={t('copiedText')} title={t('copied')} duration={5000} />
{/if}

<div class="w-full flex flex-wrap justify-center my-2">
	<div class="w-5/6 lg:w-2/3">
		<div class="py-4">
			<h1>{@html t('title')}</h1>
			<p>{@html t('description')}</p>
		</div>

		<div class="py-4">
			<div class="flex flex-col items-start space-y-4">
				<div class="input-group">
					<input
						type="checkbox"
						bind:checked={includeNumbers}
						on:change={saveCookie}
						class="form-checkbox text-primary h-5 w-5 rounded"
					/>
					<label for="includeNumbers">{@html t('numbers')}</label>
				</div>
				<div class="input-group">
					<input
						type="checkbox"
						bind:checked={includeSymbols}
						on:change={saveCookie}
						class="form-checkbox text-primary h-5 w-5 rounded"
					/>
					<label for="includeSymbols">{@html t('symbols')}</label>
				</div>
				<div class="input-group">
					<input
						type="number"
						min="4"
						max="32"
						class="bg-gray-800 text-white p-2 rounded-lg w-full"
						bind:value={length}
						on:change={saveCookie}
					/>
					<span>{@html t('length')}</span>
				</div>
				<div class="input-group">
					<input
						type="checkbox"
						bind:checked={save}
						on:change={saveCookie}
						class="form-checkbox text-primary h-3 w-3 rounded"
					/>
					<label for="includeSymbols" class="text-sm">{@html t('save')}</label>
				</div>
			</div>
		</div>

		<div class="py-4">
			<button class="blue" id="generate" on:click={generatePassword}>{@html t('generate')}</button>
		</div>

		<div class="py-4">
			<div>
				<span>{@html t('present')}</span>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<input class="blue copy" type="text" on:click={copy} bind:value={password} />
				<!-- {#if password.length > 0}
						{password}
					{:else}
						 &#x200B;
					{/if} -->
				<span class="tocopy">{@html t('copy')}</span>
			</div>
		</div>
	</div>
</div>

<style>
	.tocopy {
		font-size: 0.875rem;
		padding: 0rem;
		margin: 0rem;
		color: #f0f0f0;
	}

	input[type="text"] {
		background-color: transparent;
		border-color: transparent;
		color: #fff;
		font-size: 2rem;

		&:focus {
			outline: none;
		}
	}

	.input-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.input-group span {
		margin-left: 0.5rem;
	}

	.input-group input[type='checkbox'] {
		transform: scale(1.5);
		margin-right: 0.5rem;
	}

	.input-group input[type='number'] {
		background-color: #2e2e3a;
		color: #ffffff;
		border: none;
		padding: 0.5rem;
		border-radius: 4px;
		width: 60px;
	}
</style>
