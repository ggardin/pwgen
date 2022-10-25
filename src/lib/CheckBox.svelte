<script lang="ts">
    // Props
    export let checked: boolean = false;
    export let id: string = "";
    export let text: string = ""
    // CreateDispatcher
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function dispatchCheck(index: string){
        dispatch("checked", index) 
        checked = !checked
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

<div class="filterBox">
    <input type="checkbox" {id}>
    <span class="checkbox" {id} class:checked={checked} on:click={dispatchCheck}>
        <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
    </span>
    
    <label for="{id}">{text}</label>
</div>