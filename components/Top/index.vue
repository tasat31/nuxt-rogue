<template>
 <div class="container mx-auto">
    <h1 class="text-3xl font-bold">
      Top Pageです
    </h1>
    <NextButton>ゲームをはじめる</NextButton>
    <ConfirmButton>ゲームをやめる</ConfirmButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import NextButton from '@/widgets/buttons/NextButton.vue';
import ConfirmButton from '@/widgets/buttons/ConfirmButton.vue';

export default defineComponent({
  components: {
    NextButton,
    ConfirmButton,
  },
  setup() {
  }
})
</script>
