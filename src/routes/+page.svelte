<script>
	import TicTacToe from '../components/TicTacToe.svelte';
</script>

<div class="h-screen w-screen flex justify-center items-center">
	<TicTacToe />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.800);
	}
</style>
