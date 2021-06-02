<template>
<fieldset>
  <legend>{{title}}</legend>
  <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" id="">
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
  setup() {
  
  },
}
</script>
