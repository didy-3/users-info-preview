<template lang="">
<div class="user-view-wrapper">        
    <AccordionComponent :opened="false" >
        <template #title>
            <div class="user-view-title">
                <div class="title-item">{{userInitial.name}}</div>
                <div class="title-item">{{userInitial.email}}</div>
                <div class="title-item">{{userInitial.phone}}</div>
                <div class="title-item">{{userInitial.website}}</div>
            </div>
        </template>
        <template #details>
            <UserInfoTable v-model:user="user" @save="save" />
        </template>
    </AccordionComponent>
</div>
</template>
<script lang="ts" setup>
import type { User } from "@/interfaces/user.interface"
import AccordionComponent from '@/components/AccordionComponent.vue'
import UserInfoTable from '@/components/UserInfoTable.vue'
import { type Ref, toRaw, ref } from "vue";
import { diff } from "deep-object-diff";
const props = defineProps<{
    userInitial: User
}>()

const user: Ref<User> = ref(structuredClone(toRaw(props.userInitial)))
function save() {
    alert(JSON.stringify(diff(props.userInitial, user.value)))
}

</script>
<style lang="scss" scoped>
.user-view-title {
    display: flex;

    .title-item {
        flex-basis: 25%;
        overflow: hidden;
        word-wrap: anywhere;
    }
}
</style>