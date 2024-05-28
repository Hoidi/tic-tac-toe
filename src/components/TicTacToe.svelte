<script lang="ts">
	import { initalGameState, type GameState } from '../types';
	import Grid from './Grid.svelte';

	let gameState: GameState = initalGameState;
</script>

<div class="min-w-[60%] max-w-[300px] aspect-square border-8 rounded-md border-slate-500 p-4">
	<Grid {gameState} />
</div>
