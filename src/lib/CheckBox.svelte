<script lang="ts">
    // Props
    export let checked: boolean = false;
    export let id: string = "";
    export let text: string = ""
    // CreateDispatcher
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    // function 
    function dispatchCheck(index: string){
        dispatch("checked", index)
    }
</script>

<style lang="scss">
    @import "../scss/utils/index";
    .filterBox {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 15px;
            input[type="checkbox"] {
            width: 20px;
            height: 20px;
                &:checked {
                    color: pink;
                }
    }
    label{
        color: white;
    }
    }
    
</style>

<div class="filterBox">
    <input type="checkbox" {id} {checked} on:click={() => dispatchCheck}>
    <label for="{id}">{text}</label>
</div>