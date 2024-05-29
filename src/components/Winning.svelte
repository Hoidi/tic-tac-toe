<script lang="ts">
	import type { GameState } from '../types';
	import Replay from './Replay.svelte';

	export let gameState: GameState;

	// TODO: What if it's a tie?!?!
</script>

<div class="flex justify-center items-center text-slate-200 w-full h-full">
	{#if gameState.isGameOver}
		<div class="flex flex-col justify-center">
			<div class="w-full text-7xl font-bold font-sans">
				Player {gameState.currentPlayer} won
			</div>
			<div class="w-full h-[10%] bg-orange-400">
				<Replay bind:gameState />
			</div>
		</div>
	{/if}
</div>
