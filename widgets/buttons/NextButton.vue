<template>
  <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  components: {
  },
  setup() {
  }
})
</script>
