<script lang="ts">
	import type { GameState } from '../types';
	import Square from './Square.svelte';

	const squares: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	export let gameState: GameState;
</script>

<div class="w-full aspect-square grid grid-cols-3 grid-rows-3 bg-red-600">
	{#each squares as position}
		<Square {position} {gameState} />
	{/each}
</div>
