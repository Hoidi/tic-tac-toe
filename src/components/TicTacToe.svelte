<script lang="ts">
	import { initalGameState, type GameState } from '../types';
	import Grid from './Grid.svelte';

	let gameState: GameState = initalGameState;
</script>

<div
	class="max-w-[69%] w-[690px] max-h-[69%] aspect-square border-8 rounded-md border-slate-500 p-4"
>
	<Grid bind:gameState />
</div>
