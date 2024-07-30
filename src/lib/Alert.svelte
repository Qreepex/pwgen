<script lang="ts">
	import { onMount } from 'svelte';

	let active1 = false;
	let active2 = false;

	let timer1: any;
	let timer2: any;
	export let type: 'error' | 'warning' | 'success' = 'success';

	export let title: string;
	export let text: string;

	export let duration = 10000;

	export let color: string | undefined = '#4caf50';
	if (!color || color === '#4caf50')
		color = type === 'error' ? '#f44336' : type === 'warning' ? '#ff9800' : '#4caf50';

	function showAlert() {
		active1 = active2 = true;

		timer1 = setTimeout(() => {
			active1 = false;
		}, duration);

		timer2 = setTimeout(() => {
			active2 = true;
		}, duration + 300);
	}

	function closeAlert() {
		clearTimeout(timer1);
		clearTimeout(timer2);
		active1 = active2 = false;
	}

	onMount(() => {
		showAlert();
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="alert"
	class:active={active1}
	style="--color: {color}; --duration: {Math.round(duration / 1000)}s"
>
	<div class="alert-content">
		<div class="check">
			{#if type === 'success'}
				<svg
					fill="none"
					height="2rem"
					viewBox="0 0 24 24"
					width="2rem"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					/>
				</svg>
			{:else if type === 'error'}
				<svg
					fill="none"
					height="2rem"
					viewBox="0 0 24 24"
					width="2rem"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18 6L6 18"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					/>
					<path
						d="M6 6L18 18"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					/>
				</svg>
			{:else if type === 'warning'}
				<svg
					fill="none"
					height="2rem"
					viewBox="0 0 24 24"
					width="2rem"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 9V12"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					/>
					<path
						d="M12 17.25V17.251"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					/>
					<path
						d="M12 2L12.01 2.00102"
						stroke="#fff"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2.5"
					/>
				</svg>
			{/if}
		</div>

		<div class="message">
			<span class="text text-1">{title}</span>
			<span class="text text-2">{text}</span>
		</div>
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="close" on:click={closeAlert}>
		<svg
			fill="#fff"
			height="1rem"
			viewBox="0 0 460.775 460.775"
			width="1rem"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			xml:space="preserve"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			<path
				d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
			/>
		</svg>
	</div>
	<div class="progress" class:active={active2}></div>
</div>

<style lang="scss">
	$color_1: #fff;
	$color_2: #666666;
	$color_3: #333;

	@keyframes progress {
		100% {
			right: 100%;
		}
	}
	.alert {
		position: fixed;
		top: 15vh;
		right: 1vw;
		border-radius: 12px;
		background: var(--color-primary-dark);
		color: #fff;
		padding: 20px 35px 20px 25px;
		box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.5);
		overflow: hidden;
		transform: translateX(calc(100% + 30px));
		transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
		z-index: 9999;
		.alert-content {
			display: flex;
			align-items: center;
		}
		.close {
			position: absolute;
			top: 10px;
			right: 15px;
			padding: 5px;
			cursor: pointer;
			opacity: 0.7;
			transition: all 0.3s ease;
			color: #fff;
			&:hover {
				opacity: 1;
			}
		}
		.progress {
			position: absolute;
			bottom: 0;
			left: 0;
			height: 3px;
			width: 100%;
			&:before {
				content: '';
				position: absolute;
				bottom: 0;
				right: 0;
				height: 100%;
				width: 100%;
				background-color: var(--color);
			}
		}
	}
	.alert.active {
		transform: translateX(0%);
	}
	.alert-content {
		.check {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 35px;
			min-width: 35px;
			background-color: var(--color);
			// color: $color_1;
			font-size: 20px;
			border-radius: 50%;
		}
		.message {
			display: flex;
			flex-direction: column;
			margin: 0 20px;
		}
	}
	.message {
		.text {
			font-size: 16px;
			font-weight: 400;
			// color: $color_2;
		}
		.text.text-1 {
			font-weight: 600;
			// color: $color_3;
		}
	}
	.progress.active {
		&:before {
			animation: progress var(--duration) linear forwards;
		}
	}
</style>
