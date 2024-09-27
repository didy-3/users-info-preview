<template lang="">
    <div class="text-input-component">
        <label>{{label}}</label>
        <div class="text-input-container">
            <div class="text-input-wrapper" @click="(e) => emit('click', e)">
                <input
                    class="ui-text-input"
                    type="text"
                    :placeholder="placeholder"
                    :value="value"
                    @input="setValue"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import type { Ref } from 'vue';
const props = withDefaults(defineProps<{
    value:string
    label:string    
    placeholder?: string;
}>(),
  { placeholder: 'Введите текст' })

const emit = defineEmits<{
    (e: 'update:value', data: string): void
}>();

function setValue(e: Event) {
    const target = e.target as HTMLInputElement;
    emit('update:value', target.value);
}
</script>
<style lang="scss" scoped>
.text-input-component {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.text-input-component input {
    outline: none;
    border: none;
    border: 1px solid;
    border-radius: 4px;
    border-color: var(--color-border);
    padding: 8px;
    font-size: 16px;
    line-height: 16px;
    background: transparent;
    transition: all 0.2s;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-text);
}

.text-input-wrapper {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.text-input:hover input {
    border-color: var(--color-gray);
}

.text-input-component input:active,
.text-input-component input:focus {
    border-color: var(--color-gray);
}

.text-input-component input::placeholder {
    color: var(--color-gray);
}

.text-input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
}

</style>