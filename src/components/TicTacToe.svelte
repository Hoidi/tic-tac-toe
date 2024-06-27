<script lang="ts">
	import { getInitalGameState, type GameState } from '../types';
	import Grid from './Grid.svelte';
	import Winning from './Winning.svelte';

	let gameState: GameState = getInitalGameState();
</script>

<div
	class="max-w-[69%] w-[690px] max-h-[69%]
	aspect-square border-8 rounded-md border-slate-500 p-4"
>
	<div class="grid w-full h-full">
		<div
			class={`col-start-1 row-start-1 
			${gameState.isGameOver ? 'z-1' : 'z-10'} 
			${gameState.isGameOver ? 'animate-blurout opacity-0' : ''}`}
		>
			<Grid bind:gameState />
		</div>
		{#if gameState.isGameOver}
			<div class="col-start-1 row-start-1 z-10">
				<Winning bind:gameState />
			</div>
		{/if}
	</div>
</div>
