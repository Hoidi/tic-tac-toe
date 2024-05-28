<script lang="ts">
	import { type GameState } from '../types';
	import Empty from './squareStates/Empty.svelte';
	import O from './squareStates/O.svelte';
	import X from './squareStates/X.svelte';

	export let position = 0;
	export let gameState: GameState;
	$: squareState = gameState.squareStates[position];
</script>

<div class="w-full aspect-square">
	{#if squareState === 'X'}
		<X />
	{:else if squareState === 'O'}
		<O />
	{:else}
		<Empty bind:gameState />
	{/if}
</div>
