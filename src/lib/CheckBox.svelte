<script lang="ts">

	export let checked: boolean = false;
	export let id: string = "";
	export let text: string = "";

	// CreateDispatcher
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	function dispatchCheck(index: string){
		dispatch("checked", index);
		checked = !checked;
	}

</script>

<div>
	<input type="checkbox" {id} on:click={dispatchCheck} checked>
	<label for="{id}">{text}</label>
</div>

<style>

	input {
		height: 1em;
		width: 1em;
	}

	label {
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

</style>