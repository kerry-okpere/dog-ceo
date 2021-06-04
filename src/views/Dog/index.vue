<template>
  <div class="dog ">
    <header>
      <nav class="dog__nav">
        <router-link to="/" class="dog__nav-link">
          <arrow-left-icon class="dog__nav-icon"/>
          <span>Go Back</span>
        </router-link>
        <h1 class="dog__nav-title">Dog Page</h1>
      </nav>
    </header>
  
    <alert class="dog__alert" 
      title="Please not that this API does not support querying by a specific dog Id. The only information it retrieves is the dog breed name or dog Image." />

    <div v-if="isError.show">
      <alert class="dog__alert" variant="error" :title="isError.msg" />
    </div>

    <section v-else class="dog__detail">
      <div class="dog__detail-info">
        <img class="dog__detail-img" :src="img" alt="breed dog" height="300" width="300">
        <div>
          <p>Hi i am a {{breed}} dog. Know more about me:</p>

          <div class="dog__detail-item" v-for="(item, i) in info" :key="i">
            <div class="dog__detail-label">
              <span>🐾</span>
            </div>
            <div>
              <p class="dog__detail-heading">{{item.name}}</p>
              <p class="dog__detail-breed">{{item.category}}</p>
            </div>
          </div>
        </div>
      </div>
    
      <div class="dog__others">
        <Loading v-if="loading">
          Loading similar breeds...
        </Loading>
        <div v-else>
          <p class="dog__others-heading">You might also like:</p>
          <div v-if="!isEmpty" class="dog__others-cardGroup">
            <Card class="dog__others-card" size="small" 
            :lazy="false"
            :isClickable="false" :info="{breed: img.altText}" 
            :img="img.url" :alt="img.altText" 
            v-for="(img, i) in dogs" :key="i"/>
          </div>
          <div v-else>
            We don't have any dogs under this breed
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { ArrowLeftIcon } from '@heroicons/vue/outline'
import Loading from "/src/components/Loading/index.vue";
import Alert from "/src/components/Alert/index.vue";
import Card from "/src/components/Card/index.vue";


export default {
  components: {
    Loading,
    ArrowLeftIcon,
    Alert,
    Card
  },
  setup() {
    // data
    const route = useRoute()
    const loading = ref(false)
    const isError = ref({})
    const store = useStore()
    const isEmpty = ref(false)
    const dogs = ref([])
    const breeds = ref([]) 
    // computed property

    const breed = computed(() => route.query.breed)
    const img = computed(() => route.query.img)
    const info = computed(() => {
      let result = [
        {
          name: 'Breed', 
          category: route.query.breed
        }]
      if(route.query.subBreed) {
        result.push({
          name: 'Sub Breed', 
          category: route.query.subBreed
        })
      }
      return result
        
    })

    // hooks
    onBeforeMount(() => {
      if (store.state.breed.name !== route.query.breed) {

        handleFetch('fetchByBreed', {
          breed: route.query.breed ,
          length: 5
        }).then(() => loading.value = false)
        
      }else{
        dogs.value = store.state.breed.dogs.slice(0, 5)
      }
    })

    // methods 
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
    
    return{
      loading,
      isError,
      img,
      dogs,
      info,
      breed,
      isEmpty
    }
  },
}
</script>

<style lang="scss" scoped>
@import './_index.scss';
</style>
