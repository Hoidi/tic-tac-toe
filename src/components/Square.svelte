<script lang="ts">
	import { areThereEmptySquares } from '../Utils';
	import { CurrentPlayer, SquareState, type GameState } from '../types';
	import Empty from './squareStates/Empty.svelte';
	import O from './squareStates/O.svelte';
	import X from './squareStates/X.svelte';

	export let position = 0;
	export let gameState: GameState;

	const flip = () => {
		const selectedSquare = gameState.squareStates[position];
		const playersSymbol =
			gameState.currentPlayer === CurrentPlayer.X ? SquareState.X : SquareState.O;

		if (selectedSquare === playersSymbol) {
			return;
		}

		switch (selectedSquare) {
			case SquareState.X:
			case SquareState.O:
				if (areThereEmptySquares(gameState)) {
					return;
				}
			case SquareState.Empty:
				gameState.squareStates[position] = playersSymbol;
				break;
		}

		gameState.currentPlayer =
			gameState.currentPlayer === CurrentPlayer.X ? CurrentPlayer.O : CurrentPlayer.X;
	};

	$: squareState = gameState.squareStates[position];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full aspect-square" on:click={flip}>
	{#if squareState === SquareState.X}
		<X />
	{:else if squareState === SquareState.O}
		<O />
	{:else}
		<Empty />
	{/if}
</div>
