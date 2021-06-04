<template>
  <div :class="['flex py-4 px-12 justify-center space-x-6 items-center max-w-7xl rounded-sm', `bg-${color.value}-100`]">
    <span :class="['h-6 w-8 sm:w-8 md:w-6 self-center', `text-${color.value}-600`]">
      <slot>
        <success-icon v-if="variant === 'success'"/>
        <err-icon v-else-if="variant === 'error'"/>
        <info-icon v-else/>
      </slot>
    </span>
    <p class="text-sm">{{title}}</p>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { InformationCircleIcon } from '@heroicons/vue/outline'
import { ExclamationCircleIcon } from '@heroicons/vue/outline'
import { CheckCircleIcon } from '@heroicons/vue/outline'

export default {
  components: { 
    'info-icon': InformationCircleIcon,
    'err-icon': ExclamationCircleIcon,
    'success-icon': CheckCircleIcon
  },
  props: {
    title: {
      type: String,
      reauired: true
    },
   variant: {
    type: String,
    default: 'warning',
    validator: function(value) {
        return ['success', 'warning', 'error'].indexOf(value) !== -1
      }
    }
  },
  setup(props){
    const color = computed(() => {
      if(props.variant === 'error') return 'red'
      if(props.variant === 'success') return 'green'
      return 'yellow'
    })
    const iconColor = ref(`text-${color.value}-600`)
    const bgColor = ref(`bg-${color.value}-100`)

    return{
      iconColor,
      bgColor
    }
  }
}
</script>