<script lang="ts">
	import { fade } from 'svelte/transition';
	import { type GameState } from '../../types';
	import X from './X.svelte';
	import O from './O.svelte';

	export let gameState: GameState;
</script>

{#if !gameState.isGameOver}
	<div class="opacity-0 hover:opacity-10 blur-sm hover:animate-blurin">
		{#if gameState.currentPlayer === 'X'}
			<X />
		{:else}
			<O />
		{/if}
	</div>
{/if}
