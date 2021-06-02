<template>
  <span>
    {{title}}
  </span>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      reauired: true
    }
  }
}
</script>