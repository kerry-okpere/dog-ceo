<template>
  <Header>
		<Search v-model="search" @keydown.enter="handleSearch"/> 
		<button>Reload</button>
    <p>Sort By:</p>
		<!-- load all breed -->
		<!-- select dog by breed name -->
		<!-- select dong by subBreed name -->
    <Select :modelValue="selectedBreed" @update:modelValue="fetchByBreed" :options="breed" title="Breed"/>
    <Select :modelValue="selectedSubBreed" @update:modelValue="fetchBySubBreed" :options="subBreed" title="Sub Breed"/>
	</Header>
	<Alert title="Kindly note that this api only display a maximum of 50 pictures at a time and does not support Pagination" />
	<section>
		
		<div>
			<p>All Dogs</p>
			<p>{{dogs.length}} Dogs</p>
		</div>
		<Loading v-if="loading"/>
		<div v-else>
			<div v-if="dogs.length">
				<Card :img="img.url" :name="img.altText" v-for="(img, i) in dogs" :key="i"/>
			</div>
			<div v-else>
				No Dog's available
			</div>
		</div>
		<div v-if="isError">
			{{isError.msg}}
		</div>
	</section>
</template>

<script setup>
import Header from "/src/components/Header/index.vue";
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import axios from "axios";
import Alert from "/src/components/Alert/index.vue";
import Loading from "/src/components/Loading/index.vue";
import Card from "/src/components/Card/index.vue";
import Search from "/src/components/Search/index.vue";
import Select from "/src/components/Select/index.vue";

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

	handleFetch('fetchByBreed', breed)
}

const fetchBySubBreed = async (subBreed) => {
	selectedSubBreed.value = subBreed

	handleFetch('fetchBySubBreed', {
		breed: selectedBreed.value, 
		subBreed: subBreed
	})
}


</script>

<style>
</style>
