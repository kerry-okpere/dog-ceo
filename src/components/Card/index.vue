<template>
  <div>
    <img :src="img" :alt="name">
  </div>
</template>
<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    name:{
      type: String,
    }
  },
  setup() {
    
  },
}
</script>
