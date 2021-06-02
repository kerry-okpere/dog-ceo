<template>
  <div @click="navigate">
    <img :src="img" :alt="name">
  </div>
</template>
<script>
import { useRouter } from 'vue-router'

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
    const router = useRouter()

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
      navigate
    }
  },
}
</script>
