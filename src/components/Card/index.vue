<template>
  <figure @click="navigate" :class="['card', size === 'small' ? 'card__small': 'card__medium']">
    <div :class="['card__content', {'animate-pulse': !imgSrc}]">
      <img class="card__content-img" :src="imgSrc" :alt="name" loading="lazy" ref="image" height="100" width="1000">
    </div>
    <figcaption class="card__title">
      <p :class="isClickable ? 'text-blue-500': 'text-gray-600'">
        <span v-if="info.breed">{{info.breed}}</span>
      </p>
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
    },
    isClickable: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium'].indexOf(value) !== -1
      }
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    // data
    const router = useRouter()
    const image = ref(null)
    const intersected = ref(false)
    
    // computed
    const imgSrc = computed(() => intersected.value ? props.img : '')

    // hooks
    onMounted(() => {
      const observer = new IntersectionObserver(intersectionCallback)
      observer.observe(image.value)
    })
    onUnmounted(() => {
      
    })

    // methods
    const intersectionCallback = entries => {
      const lazyImg = entries[0]

      if (lazyImg.isIntersecting) {
        intersected.value = true
      }
    }

    const navigate = () => {
      if(props.isClickable){
        let query = {
          breed: props.info.breed,
        }
        if(props.info.subBreed){
          query.subBreed = props.info.subBreed
        }
        router.push({ name: 'dog', params: {id: props.info.id}, query: query })
      }
      emit('click')
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
