<template>
<fieldset class="border relative inline-block w-48 px-3 pb-2 pt-1 rounded-sm">
  <legend class="mx-3 text-xs text-gray-400">{{title}}</legend>
  <select class="h-full w-full outline-none" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    <option disabled v-if="placeholder" value="null" >{{placeholder}}</option>
    <option v-for="(option, i) in options" :key="i" :value="option"  @click="$emit('select', option)">
      {{option}}
    </option>
  </select>
</fieldset>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Select...'
    },
    options: {
      type: Array,
    },
    title: {
      type: String,
    },
    modelValue: {
      type: String,
      required: true
    }
  },
}
</script>
