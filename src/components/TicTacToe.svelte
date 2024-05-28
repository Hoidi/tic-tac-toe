<script lang="ts">
	import { initalGameState, type GameState } from '../types';
	import Grid from './Grid.svelte';

	let gameState: GameState = initalGameState;
</script>

<div class="min-w-[30%] max-w-[300px] aspect-square border-2 rounded-md border-slate-300">
	<Grid {gameState} />
</div>
