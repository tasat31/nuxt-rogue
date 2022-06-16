<template>
  <section class="w-full h-screen">
    <img
      src="~assets/sample-landscape.jpg""
      class="object-cover w-full h-full"
      alt="Image alt text"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  components: {
  },
  setup() {
  }
})
</script>

<style>
.landscape {
  position: fixed;
  top: 0;
  left: 0;
}
</style>

