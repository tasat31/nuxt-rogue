<template>
    <input
      :type="typeProp"
      :autocomplete="autocompleteProp"
      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      :placeholder="placeholderProp">
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  components: {
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    autocomplete : {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const typeProp = computed(() => props.type)
    const autocompleteProp = computed(() => props.autocomplete)
    const placeholderProp = computed(() => props.placeholder)

    return {
      typeProp,
      autocompleteProp,
      placeholderProp,
    }
  }
})
</script>
