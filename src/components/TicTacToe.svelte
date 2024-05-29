<script lang="ts">
	import { initalGameState, type GameState } from '../types';
	import Grid from './Grid.svelte';
	import Winning from './Winning.svelte';

	let gameState: GameState = initalGameState;
</script>

<div
	class="max-w-[69%] w-[690px] max-h-[69%] aspect-square border-8 rounded-md border-slate-500 p-4"
>
	<div class="grid w-full h-full">
		<div class="col-start-1 row-start-1 z-10">
			<div class={`${gameState.isGameOver ? 'animate-blurout opacity-0' : ''}`}>
				<Grid bind:gameState />
			</div>
		</div>
		<div class="col-start-1 row-start-1 z-1">
			<Winning bind:gameState />
		</div>
	</div>
</div>
