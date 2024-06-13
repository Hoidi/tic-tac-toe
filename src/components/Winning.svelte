<script lang="ts">
	import type { GameState } from '../types';
	import Replay from './Replay.svelte';

	export let gameState: GameState;

	// TODO: What if it's a tie?!?!
</script>

<div class="flex justify-center items-center text-slate-200 w-full h-full">
	{#if gameState.isGameOver}
		<div class="flex flex-col justify-center">
			<div class="w-full my-12 text-7xl font-bold font-sans backdrop-blur-sm">
				Player {gameState.currentPlayer} won
			</div>
			<div class="w-full flex justify-center items-center my-20">
				<Replay bind:gameState />
			</div>
		</div>
	{/if}
</div>
