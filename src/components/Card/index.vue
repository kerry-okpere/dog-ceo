<template>
  <figure @click="navigate" class="card">
    <div :class="['card__content', {'animate-pulse': !imgSrc}]">
      <img class="card__content-img" :src="imgSrc" :alt="name" loading="lazy" ref="image" height="100" width="1000">
    </div>
    <figcaption class="card__title">
      <p>{{info.breed}}</p>
    </figcaption>
  </figure>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed, onUnmounted } from "vue";

export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    img: {
      type: String,
      required: true,
    },
    name:{
      type: String,
    }
  },
  setup(props) {
    // data
    const router = useRouter()
    const image = ref(null)
    const intersected = ref(false)
    
    // computed
    const imgSrc = computed(() => intersected.value ? props.img : '')

    // hooks
    onMounted(() => {
      console.log('mounted')
      const observer = new IntersectionObserver(intersectionCallback)
      observer.observe(image.value)
    })
    onUnmounted(() => {
      console.log('unmounted')
    })

    // methods
    const intersectionCallback = entries => {
      const lazyImg = entries[0]

      if (lazyImg.isIntersecting) {
        intersected.value = true
        // console.log('i am in view')
      }
    }

    const navigate = () => {
      let query = {
        breed: props.info.breed,
      }
      if(props.info.subBreed){
        query.subBreed = props.info.subBreed
      }
      router.push({ name: 'dog', params: {id: props.info.id}, query: query })
    }

    return{
      navigate,
      image, 
      imgSrc
    }
  },
}
</script>
<style lang="scss" scoped>
@import './_index.scss';
</style>
