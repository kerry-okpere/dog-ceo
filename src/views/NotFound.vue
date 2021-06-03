<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <empty />
    <h1 class="text-3xl text-blue-500 mt-6">404</h1>
    <p>Page not found.</p>
  </div>
  
</template>
<script>
import Empty from "/src/components/Icons/dog-house.vue";

export default {
  components: { Empty }
}
</script>
