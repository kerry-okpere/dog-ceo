<template>
  <button :class="[
    'bg-blue-600 hover:bg-blue-700 transition-colors text-white',
    shape === 'circle' ? 'rounded-full p-3' : 'rounded-sm py-3 px-4'
  ]"
    @click="$emit('click')">
    <slot>
      Button
    </slot>
  </button>
</template>
<script>

export default {
  emits: ['click'],
  props: {
    shape: {
      type: String,
      default: 'square',
      validator: function(value) {
        return ['square', 'circle'].indexOf(value) !== -1
      }
    }
  }
}
</script>
