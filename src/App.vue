<template>
	<div class="page-content">
		<div class="top-bar"><h1>Users</h1></div>
		<div class="flex-column users-view-wrapper">
			<div class="user-view-header">
				<div>Name</div>
				<div>Email</div>
				<div>Phone</div>
				<div>Website</div>
			</div>
			<UserView v-for="user in users" :key="user.id" :userInitial="user" />
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import LoaderComponent from '@/components/LoaderComponent.vue'
import UserView from '@/components/UserView.vue'
import type {User} from '@/interfaces/user.interface'
import axios from 'axios'

const users:Ref<User[]> = ref([])
getUsers()
function getUsers(){
	axios.get('https://jsonplaceholder.typicode.com/users')
		.then(({data})=>{
			users.value = data
			console.log(users.value)
		})
        .catch( (error)=> {
            alert("Сервис не доступен, текст ошибки: " + error);
        });
}
</script>

<style lang="scss">
@import './assets/main.scss';
.top-bar{
	border-bottom: 1px solid var(--color-border);
	text-transform: uppercase;
	padding-top: 24px;
	padding-bottom: 30px;
	h1{
		font-weight: 600;
		font-size: 20px;
		margin: 0 50px;
		padding: 0;
	}
}
.page-content{
	display: flex;
	flex-direction: column;
	gap: 30px;
}
.users-view-wrapper{	
	margin: 0 50px;
}
.user-view-header{
    padding-left: 40px;
	padding-right: 10px;
    display: flex;
    color:var(--color-text-2);
	>div{flex-basis: 25%;}
}

@media all and (max-width: 750px){
	.users-view-wrapper{	
		margin: 0;
	}
}
</style>
