<template lang="">
    <div :class="'accordion ' + cssClass??''"  @click="()=>isShown=!isShown" >   
        <div style="display:flex;gap:20px;">
            <i class="arrow-right-icon" :style="{rotate:isShown ? '90deg':'0deg' }"></i>
        </div>            
        <div class="accordion-title"><slot name="title"></slot></div>     
    </div>
    <div :class="{hidden:!isShown}">
        <slot name="details"></slot>
    </div>
</template>
<script lang="ts" setup>
import { ref, type Ref } from "vue"

const props = defineProps<{
    opened:boolean,
    cssClass?:string,
}>()

const isShown: Ref<boolean> = ref(props.opened)

</script>
<style lang="scss">
    .hidden{display: none;}
    .accordion{
        display: flex;
        column-gap: 10px;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border: 1px solid var(--color-yellow);
        border-radius:8px;
        padding: 10px;

        .accordion-title{
            flex:1;
        }
        i {
            transition: rotate .2s
        }

        &:hover {
            background-color: #faf8f8;
        }

        .arrow-right-icon {            
            background: url("../assets/icons/arrow-right.svg") no-repeat center center / contain;
            height: 20px;
            width: 20px;
        }
}
</style>