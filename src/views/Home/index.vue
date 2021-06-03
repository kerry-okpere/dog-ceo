<template>
	<div class="home">
		<header class="home__header">
			<div class="home__header-search">
				<search v-model="search" @keydown.enter="handleSearch"/> 
				<btn @click="handleFetch('fetchDogs')">Refresh</btn>
			</div>
			<div class="home__header-select">
				<p>Sort By:</p>
				<div>
					<Select :modelValue="selectedBreed" @update:modelValue="fetchByBreed" :options="breed" title="Breed" class="home__header-selector"/>
					<Select :modelValue="selectedSubBreed" @update:modelValue="fetchBySubBreed" :options="subBreed" title="Sub Breed" class="home__header-selector"/>
				</div>
			</div>
		</header>

		<alert class="home__alert" title="Kindly note that this API can only display a maximum of 50 random pictures at a time, It can display up to 100 Dog Images when you query by breed." />
		
		<section class="home__body">
			<div class="home__body-info">
				<p>All Dogs</p>
				<p class="text-gray-500 text-xs">{{dogs.length}} Dogs</p>
			</div>
			<loading class="home__body-loading" v-if="loading">
				<p class="home__body-loading-txt">Loading all you favorite dog images🐩...</p>
			</loading>
			
			<div v-else>
				<div v-if="dogs.length" class="home__body-dogs">
					<Card :info="getId(img.url)" :img="img.url" :name="img.altText" v-for="(img, i) in dogs" :key="i"/>
				</div>
				<div v-else class="home__body-empty">
					<empty class="home__body-empty-icon"/>
					<p>Oops, we couldn't find you any dog.</p>
				</div>
			</div>

			<div v-if="isError" class="home__body-err">
				<alert class="home__alert" variant="error" :title="isError.msg" />
			</div>
		</section>
	</div>
</template>

<script setup>
// import Header from "/src/components/Header/index.vue";
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import axios from "axios";
import Alert from "/src/components/Alert/index.vue";
import Loading from "/src/components/Loading/index.vue";
import Card from "/src/components/Card/index.vue";
import Search from "/src/components/Search/index.vue";
import Select from "/src/components/Select/index.vue";
import Btn from "/src/components/Btn/index.vue";
import Empty from "/src/components/Icons/dog-house.vue";
import { getId } from '../../Utilities/index.js';

// data
const store = useStore()
const loading = ref(false)
const isError = ref(false)
const search = ref('')
const selectedBreed = ref('')
const selectedSubBreed = ref('')

// computed property
const dogs = computed({
	get: () => store.state.dogs,
	set: val => store.commit('SET_DOG_LIST', val)
})

const breed = computed(() => Object.keys(store.state.breed))
const subBreed = computed(() => {
	return  store.state.breed[selectedBreed.value]
})

// hooks
onMounted(() => {
	handleFetch('fetchDogs')
	handleFetch('fetchBreed')
})

// methods
const handleSearch = () => {
	if(breed.value.includes(search.value)) {
		selectedBreed.value = search.value
		fetchByBreed(search.value)
	}
	else {
		dogs.value = []
		isError.value = {
			show: true,
			msg: 'We could find any dog under this breed, Please try again.'
		}
	}
}

const handleFetch = (action, data) => {
	loading.value = true

	store.dispatch(action, data).then(res => {
		loading.value = false
	}).catch(err => {
		isError.value = {
			show: true,
			msg: 'We encountered an issue while fetch the data, Please try again later.'
		}
		loading.value = false
	})
}

const fetchByBreed = async (breed) => {
	selectedBreed.value = breed

	handleFetch('fetchByBreed', {
		breed: selectedBreed.value ,
		length: 100
	})
}

const fetchBySubBreed = async (subBreed) => {
	selectedSubBreed.value = subBreed

	handleFetch('fetchBySubBreed', {
		breed: selectedBreed.value, 
		subBreed: subBreed
	})
}


</script>

<style lang="scss" scoped>
@import './_index.scss';
</style>
