<template lang="">
<div class="user-info-table-wrapper">
    <table class="user-info-table">
        <tr>
            <th>Address</th>
            <th>Company</th>
            <th>Basic Info</th>
        </tr>
        <tr>
            <td>
                <div class="flex-column">
                    <TextInput label="Street" v-model:value="user.address.street" />
                    <TextInput label="Suite" v-model:value="user.address.suite" />
                    <TextInput label="City" v-model:value="user.address.city" />
                    <TextInput label="Zipcode" v-model:value="user.address.zipcode" />
                </div>
            </td>
            <td>
                <div class="flex-column">
                    <TextInput label="Name" v-model:value="user.company.name" />
                    <TextInput label="Catch Phrase" v-model:value="user.company.catchPhrase" />
                    <TextInput label="Bs" v-model:value="user.company.bs" />                                
                </div>
            </td>
            <td>
                <div class="flex-column">
                    <TextInput label="Name" v-model:value="user.name" />  
                    <TextInput label="Username" v-model:value="user.username" />  
                    <TextInput label="Email" v-model:value="user.email" />  
                    <TextInput label="Phone" v-model:value="user.phone" />  
                    <TextInput label="Website" v-model:value="user.website" />                                 
                </div>
            </td>
        </tr>
    </table>
    <button @click="emit('save')" title="Сохранить" class="save-btn"><i class="check-icon"></i></button>
</div>
</template>
<script lang="ts" setup>
import type { User } from "@/interfaces/user.interface"
import TextInput from '@/components/TextInput.vue'
import { useVModel } from '@vueuse/core';
import type { Ref } from "vue";
const props = defineProps<{
    user:User
}>()

const emit = defineEmits<{
    (e: 'update:value', data: string): void
    (e: 'save'): void
}>();
const user:Ref<User> = useVModel(props, 'user', emit);

</script>
<style lang="scss" scoped>
.user-info-table-wrapper {
    display: flex;
    padding: 10px 0;

    .user-info-table {
        flex: 1;
        border-spacing: 0;
        border-radius: 4px;
        th{padding: 10px;text-align: left;}
        td,th {
            border-right: 1px solid var(--color-border);
             vertical-align: top;
        }

        tr:last-child td {
            border-bottom: 1px solid var(--color-border);
        }

        tr:last-child td:first-child {
            border-bottom-left-radius: 4px;
        }
        td:first-child {
            border-left: 1px solid var(--color-border);
        }

        tr:last-child td:last-child {
            border-bottom-right-radius: 4px;
        }

        tr:first-child th {
            border-top: 1px solid var(--color-border);
        }

        tr:first-child th:first-child {
            border-top-left-radius: 4px;
            border-left: 1px solid var(--color-border);
        }

        tr:first-child th:last-child {
            border-top-right-radius: 4px;
            border-right: 1px solid var(--color-border);
        }

        th {
            font-weight: 400;
            text-transform: uppercase;
            color: var(--color-text);
            border-bottom: 2px solid var(--color-border);
        }

        .flex-column {
            padding: 10px;
            align-self: flex-start;
        }

    }

    .save-btn {
        background-color: var(--color-yellow);
        width: 40px;
        height: 40px;
        margin: 0 20px;
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        position: relative;
        cursor: pointer;
        border-radius: 4px;
        border: none;

        &:hover {
            background-color: var(--color-yellow-light);
        }

        .check-icon {
            background: url("../assets/icons/check.svg") no-repeat center center / contain;
            height: 17px;
            width: 17px;
            display: inline-block;
            
        }
    }
}

@media all and (max-width: 750px){
    .user-info-table-wrapper .save-btn{	
		margin: 0 5px;
	}
}
</style>