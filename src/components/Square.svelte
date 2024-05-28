<script lang="ts">
	import { SquareState, type GameState } from '../types';
	import Empty from './squareStates/Empty.svelte';
	import O from './squareStates/O.svelte';
	import X from './squareStates/X.svelte';

	export let position = 0;
	export let gameState: GameState;

	const flip = () => {
		const flippingSquare = gameState.squareStates[position];
		switch (flippingSquare) {
			case SquareState.X:
				gameState.squareStates[position] = SquareState.O;
			case SquareState.O:
				gameState.squareStates[position] = SquareState.X;
			case SquareState.Empty:
				gameState.squareStates[position] = SquareState.X;
		}
		gameState = gameState;
	};
	$: squareState = gameState.squareStates[position];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#key gameState}
	<div class="bg-neutral-100 w-full aspect-square m-0.5 p-1" on:click={flip}>
		{#if squareState === SquareState.X}
			<X />
		{:else if squareState === SquareState.O}
			<O />
		{:else}
			<Empty />
		{/if}
	</div>
{/key}
