<template>
  <span class="inline-flex border border-gray-200 rounded-sm h-12 space-x-2 items-center px-3">
    <input type="search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="h-full outline-none"/>
    <search-icon class="h-5 w-5 text-gray-400"/>
  </span>
</template>
<script>
import { SearchIcon } from '@heroicons/vue/outline'

export default {
  components: { SearchIcon },
  props: {
    modelValue: {
      type: String, 
      required: true
    },
    placeholder: {
      type: String, 
      default: 'Search Dogs'
    }
  },
  emits: ['update:modelValue']
}
</script>