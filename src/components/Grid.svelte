<script lang="ts">
	import type { GameState } from '../types';
	import Square from './Square.svelte';

	const squares: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	export let gameState: GameState;
</script>

<div class="w-full aspect-square grid grid-cols-3 grid-rows-3 gap-8">
	{#each squares as position}
		<Square {position} bind:gameState />
	{/each}
</div>
