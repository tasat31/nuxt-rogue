<template>
  <div class="flex flex-col">
    <h1 class="py-8 text-3xl font-bold">
      Nuxt-Rogue
    </h1>
    <div>
      メールアドレス
    </div>
    <div>
      <TextField
        type="email"
        autocomplete="email"
        placeholder="Email address"
      />
    </div>
    <div>
      パスワード
    </div>
    <div>
      <TextField
        type="password"
        autocomplete="current-password"
        placeholder="Password"
      />
    </div>
    <div class="flex items-center justify-between">
      <RememberMe />
      <ForgotYourPassword href="/forgot-your-password"/>
    </div>
    <div @click="signIn()">
      <SignInButton />
    </div>      
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, useRouter } from '@nuxtjs/composition-api';
import TextField from '@/widgets/inputs/TextField.vue';
import RememberMe from '@/widgets/utils/RememberMe.vue';
import ForgotYourPassword from '@/widgets/utils/ForgotYourPassword.vue';
import SignInButton from '@/widgets/buttons/SignInButton.vue';

export default defineComponent({
  components: {
    TextField,
    RememberMe,
    ForgotYourPassword,
    SignInButton,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const signIn = () => {
      console.log('signIn')
      store.commit('auth/authenticate', true)
      router.push('/top')
    }

    return {
      signIn,
    }
  }
})
</script>
