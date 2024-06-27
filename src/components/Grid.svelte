<script lang="ts">
	import type { GameState, SquareState } from '../types';
	import { areThereEmptySquares, hasAnyoneWon } from '../utils';
	import Square from './Square.svelte';

	const squares: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	export let gameState: GameState;

	const flip = (position: number) => {
		if (gameState.isGameOver) {
			return;
		}

		const playersSymbol: SquareState = gameState.currentPlayer;
		const selectedSquareState = gameState.squareStates[position];

		if (selectedSquareState === playersSymbol) {
			return;
		}

		switch (selectedSquareState) {
			case 'X':
			case 'O':
				if (areThereEmptySquares(gameState)) {
					return;
				}
			case 'Empty':
				gameState.squareStates[position] = playersSymbol;
				break;
		}

		const winningPlayer = hasAnyoneWon(gameState.squareStates);
		if (winningPlayer) {
			gameState.isGameOver = true;
			gameState.winningPlayer = winningPlayer;
			return;
		}

		if (!areThereEmptySquares(gameState)) {
			gameState.isGameOver = true;
			return;
		}

		gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
	};
</script>

<div class="w-full aspect-square grid grid-cols-3 grid-rows-3 gap-8">
	{#each squares as position}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={(_) => flip(position)}>
			<Square {position} bind:gameState />
		</div>
	{/each}
</div>
