<template>
  <h1>Dop Page</h1>
  Please not that this API does not support querying dog by id


  <section>
    <img :src="img" alt="" srcset="">

    <dir>
      <Loading v-if="loading"/>
      <div v-else>
			<div v-if="dogs.length">
				<img :src="img.url" :name="img.altText" v-for="(img, i) in dogs" :key="i"/>
			</div>
			<div v-else>
				We don't have any dogs under this breed
			</div>
		</div>
		<div v-if="isError">
			{{isError.msg}}
		</div>
    </dir>
  </section>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";


import Loading from "/src/components/Loading/index.vue";

export default {
  components: {
    Loading
  },
  setup() {
    const route = useRoute()
    const loading = ref(false)
    const isError = ref(false)
    const store = useStore()

    // computed property
    const dogs = computed(() => store.state.dogs)
    const img = computed(() => {
      return route.query.subBreed ? `https://images.dog.ceo/breeds/${route.query.breed}-${route.query.subBreed}/${route.params.id}.jpg` 
        : `https://images.dog.ceo/breeds/${route.query.breed}/${route.params.id}.jpg`
    })

    // hooks
    onMounted(() => {
      handleFetch('fetchByBreed', { 
        breed: route.query.breed, 
        length:10
      })
    })

    // TODO @use mixins
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
    
    return{
      loading,
      isError,
      img,
      dogs
    }
  },
}
</script>
