<script lang="ts">
	import { type GameState } from '../../types';
	import X from './X.svelte';
	import O from './O.svelte';

	export let gameState: GameState;
</script>

<div class="opacity-0 hover:opacity-10 blur-sm">
	{#if gameState.currentPlayer === 'X'}
		<X />
	{:else}
		<O />
	{/if}
</div>
