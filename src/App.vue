<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in"
    :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
import { watch, ref } from "vue";
import { useRoute } from 'vue-router'

const transitionName = ref('')
const route = useRoute()

watch(
  () => route.name,
  ( to, from ) => {
    if (from === 'dog') {
      transitionName.value = 'slideIn';
    } else if (from === 'Home') {
      transitionName.value = 'slideOut';
    }
  }
)
</script>
<style lang="scss" scoped>
// route transition

.slideIn-leave-to,
.slideOut-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.slideIn-enter-active,
.slideOut-enter-active{
  transition: all 0.2s ease-out;
}
.slideIn-enter-from, 
.slideOut-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.slideIn-leave-active,
.slideOut-leave-active{
  transition: all 0.2s ease-in;
}
</style>