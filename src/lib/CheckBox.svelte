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

<style lang="scss">
    @import "../scss/utils/index";
    .filterBox {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 15px;
        position: relative;
        overflow: hidden;

        input[type="checkbox"]{
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
       svg{
            position: absolute;
            transform: translateY(-21px);
            transition: all .7s ease;

            path{
                stroke: black;
            }
        }
    .checkbox{
        width: 20px;
        height: 20px;
        border: 1px solid $primaryColor;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 1.25s ease;
        
        &:hover {
            background-color: $primaryColor;
        }
        &.checked{
            background-color: $primaryColor;
            border: 1px solid $primaryColor;
            color: white;
            
            & svg{
                transition: all .7s ease-in-out .2s;
                transform: translateY(0) scale(1.5);
            }
        }
    }    

    label{
        color: white;
    }
    }
    
</style>

<div class="filterBox">
    <input type="checkbox" {id}>
    <span class="checkbox" {id} class:checked={checked} on:click={dispatchCheck}>
        <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>
    </span>
    
    <label for="{id}">{text}</label>
</div>