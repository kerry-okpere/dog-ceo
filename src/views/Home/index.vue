<template>
	<div class="home">
		<header class="home__header">
			<div class="home__header-search">
				<search v-model="search" @keydown.enter="handleSearch"/> 
				<btn @click="handleSearch(search)">Search</btn>
			</div>
			<div class="home__header-select">
				<p>Sort By:</p>
				<div>
					<Select :modelValue="selectedBreed" @update:modelValue="fetchByBreed" :options="breed" title="Breed" class="home__header-selector"/>
					<Select :err="subBreed && subBreed.length ? '': 'No sub breed available'" :modelValue="selectedSubBreed" @update:modelValue="fetchBySubBreed" :options="subBreed" title="Sub Breed" class="home__header-selector"/>
				</div>
			</div>
		</header>

		<alert class="home__alert" title="Kindly note that this API can only display a maximum of 50 random pictures at a time, It can display up to 100 Dog Images when you query by breed." />
		
		<div v-if="isError.show" class="home__body-err">
			<alert class="home__alert" variant="error" :title="isError.msg" />
		</div>

		<section v-else class="home__body">			
			<div>
				<div class="home__body-refresh">
					<btn class="home__body-refresh-icon" shape="circle" @click="refresh"><refresh-icon/></btn>
				</div>
				
				<div class="home__body-info">
					<p>All Dogs</p>
					<p class="text-gray-500 text-xs">{{dogs.length}} Dogs</p>
				</div>

				<loading class="home__body-loading" v-if="loading">
					<p class="home__body-loading-txt">Loading all you favorite dog images🐩...</p>
				</loading>
				
				<div v-else>
					<div v-if="!!dogs.length" class="home__body-dogs">
						<Card :img="img.url" :alt="img.altText" v-for="(img, i) in dogs" :key="i"/>
					</div>
					<div v-else class="home__body-empty">
						<empty class="home__body-empty-icon"/>
						<p>Oops, we couldn't find you any dog.</p>
					</div>
				</div>
			</div>
		</section>
		<div class="text-center pt-5">
			<signed/>
		</div>
	</div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onMounted, onBeforeMount } from "vue";
import Alert from "/src/components/Alert/index.vue";
import Loading from "/src/components/Loading/index.vue";
import Card from "/src/components/Card/index.vue";
import Search from "/src/components/Search/index.vue";
import Select from "/src/components/Select/index.vue";
import Btn from "/src/components/Btn/index.vue";
import Empty from "/src/components/Icons/dog-house.vue";
import Signed from "/src/components/Signature/index.vue";
import { RefreshIcon } from '@heroicons/vue/outline'

// data
const store = useStore()
const loading = ref(false)
const isError = ref(false)
const search = ref('')
const selectedBreed = ref('')
const selectedSubBreed = ref('')
const dogs = ref([])

const breedDogs = computed(() => store.state.breed.dogs)
const subBreedDogs = computed(() => store.state.subBreed.dogs)

const breed = computed({
	get: () => Object.keys(store.state.breedList),
	set: val => Object.keys(val)
})
const subBreed = computed(() => {
	return  store.state.breedList[selectedBreed.value]
})

// hooks
onBeforeMount(() => {
	if (!store.state.hasFetched) {
		fetchAll()
	}else{
		dogs.value = store.state.dogs
		breed.value = store.state.breedList
	}
})
onMounted(() => {
	store.state.breed.name = ''
	store.state.breed.dogs = []
})

// methods
const handleSearch = () => {
	if(store.state.breed.name === search.value) return

	isError.value = {}
	if(breed.value.includes(search.value)) {
		selectedBreed.value = search.value
		
		fetchByBreed(search.value)
	}
	else {
		dogs.value = []
		isError.value = {
			show: true,
			msg: 'We couldn\'t find any dog under this breed, Please try again.'
		}
	}
}
const refresh = () => {
	fetchAll()
	search.value = ''
	selectedBreed.value = selectedSubBreed.value = ''
	store.state.breed = store.state.subBreed = {
		name: '',
    dogs: []
	}
}

const fetchAll = () => {
	loading.value = true
	Promise.all([
		handleFetch('fetchDogs'), handleFetch('fetchBreed')
	]).finally(() => {
			loading.value = false 
			store.commit('SET_STATES', {
				key: 'hasFetched',
				payload: true
			})
		})
}

const handleFetch = (action, data) => {
	isError.value = {}

	return new Promise((resolve, reject) => {
		store.dispatch(action, data).then(res => {
			if(action == 'fetchDogs') {
				dogs.value = store.state.dogs
			}
			if(action == 'fetchByBreed') {
				dogs.value = store.state.breed.dogs
			}
			if(action == 'fetchBySubBreed') {
				dogs.value = store.state.subBreed.dogs
			}
			resolve()
		}).catch(err => {
			isError.value = {
				show: true,
				msg: 'We encountered an issue while fetch the data, Please try again later.'
			}
			reject()
		})
	})
	
}

const fetchByBreed = async (breed) => {
	selectedBreed.value = breed

	loading.value = true
	handleFetch('fetchByBreed', {
		breed: selectedBreed.value ,
		length: 100
	}).then(() => loading.value = false)

}

const fetchBySubBreed = async (subBreed) => {
	selectedSubBreed.value = subBreed

	loading.value = true
	
	handleFetch('fetchBySubBreed', {
		breed: selectedBreed.value ,
		subBreed: subBreed
	}).then(() => loading.value = false)
}
</script>

<style lang="scss" scoped>
@import './_index.scss';
</style>
