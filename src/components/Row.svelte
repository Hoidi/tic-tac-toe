<script>
	import Square from "./Square.svelte";

    export let rownr = 0;

</script>

<div class="bg-neutral-600 w-full flex flex-row">
    <Square id={3 * rownr + 1}/>
    <Square id={3 * rownr + 2}/>
    <Square id={3 * rownr + 3}/>
</div>