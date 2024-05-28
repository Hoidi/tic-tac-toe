<script lang="ts">
	import { areThereEmptySquares } from '../Utils';
	import { type GameState, type SquareState } from '../types';
	import Empty from './squareStates/Empty.svelte';
	import O from './squareStates/O.svelte';
	import X from './squareStates/X.svelte';

	export let position = 0;
	export let gameState: GameState;

	const flip = () => {
		const selectedSquare: SquareState = gameState.squareStates[position];
		const playersSymbol: SquareState = gameState.currentPlayer;

		if (selectedSquare === playersSymbol) {
			return;
		}

		switch (selectedSquare) {
			case 'X':
			case 'O':
				if (areThereEmptySquares(gameState)) {
					return;
				}
			case 'Empty':
				gameState.squareStates[position] = playersSymbol;
				break;
		}

		gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
	};

	$: squareState = gameState.squareStates[position];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full aspect-square" on:click={flip}>
	{#if squareState === 'X'}
		<X />
	{:else if squareState === 'O'}
		<O />
	{:else}
		<Empty />
	{/if}
</div>
