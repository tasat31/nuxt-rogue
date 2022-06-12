<template>
 <div class="container mx-auto">
    <h1 class="text-3xl font-bold">
      Login Pageです
    </h1>
    <SignUpForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import SignUpForm from '@/widgets/forms/SignUpForm.vue';

export default defineComponent({
  components: {
    SignUpForm,
  },
  setup() {
  }
})
</script>
