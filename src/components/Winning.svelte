<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { GameState } from '../types';
	import Replay from './Replay.svelte';

	export let gameState: GameState;
</script>

<div
	class="flex justify-center items-center
	text-slate-200 w-full h-full backdrop-blur-sm"
	transition:fade={{ delay: 50, duration: 250 }}
>
	{#if gameState.isGameOver}
		<div class="flex flex-col justify-center">
			<div class="w-full my-12 text-7xl font-bold font-sans">
				{#if gameState.winningPlayer}
					Player {gameState.winningPlayer} won
				{:else}
					It's a tie!
				{/if}
			</div>
			<div class="w-full flex justify-center items-center my-20">
				<Replay bind:gameState />
			</div>
		</div>
	{/if}
</div>
