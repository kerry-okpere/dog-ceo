<template>
  <figure @click="navigate" :class="['card', size === 'small' ? 'card__small': 'card__medium']">
    <div :class="['card__content', {'animate-pulse': !imgSrc}]">
      <img class="card__content-img" :src="imgSrc" :alt="alt" loading="lazy" ref="image" height="100" width="1000">
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
import { ref, onMounted, computed, onUnmounted, onBeforeMount } from "vue";
import { getId } from '../../Utilities/index.js';
import { useStore } from "vuex";

export default {
  props: {
    lazy: {
      type: Boolean,
      default: true
    },
    img: {
      type: String,
      required: true,
    },
    alt:{
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
    const info = ref({})
    const store = useStore()
    
    // computed
    const imgSrc = computed(() => intersected.value ? props.img : '')

    // hooks
    onMounted(() => {
      info.value = getId(props.img)
      if(props.lazy){
        const observer = new IntersectionObserver(intersectionCallback)
        observer.observe(image.value)
      }else{
        intersected.value = true
      }
    })
    onUnmounted(() => {
      // observer.disconnect()
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
          breed: info.value.breed,
          img: props.img,
        }
        if(info.subBreed){
          query.subBreed = info.value.subBreed
        }
        router.push({ path: 'dog', query: query })
      }
      emit('click')
    }

    return{
      navigate,
      image, 
      imgSrc,
      info
    }
  },
}
</script>
<style lang="scss" scoped>
@import './_index.scss';
</style>
