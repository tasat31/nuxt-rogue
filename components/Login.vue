<template>
  <div class="px-8">
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

<style>
.sign-up-form {
  position: absolute;
  top: 10%;
  left: 45%;
}
</style>

