<template>
  <button class="rounded-sm bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-4 text-white"
    @click="$emit('click')">
    <slot>
      Button
    </slot>
  </button>
</template>
<script>

export default {
  emits: ['click'],
}
</script>
