<script lang="ts">
	import type { GameState } from '../types';

	export let gameState: GameState;

	// TODO: What if it's a tie?!?!
</script>

<div class="flex justify-center items-center text-slate-200 w-full h-full">
	{#if gameState.isGameOver}
		<div class="text-6xl">
			Player {gameState.currentPlayer} won
		</div>
	{/if}
</div>
