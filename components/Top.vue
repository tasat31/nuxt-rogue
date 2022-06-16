<template>
  <div>
    <LandscapeScene />
    <div class="top-page">
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">
          Welcome to Nuxt-Rogue
        </h1>
        <div class="py-2 mx-auto" @click="startGame()">
          <NextButton>
            ゲームをはじめる
          </NextButton>
        </div>
        <div class="py-2  mx-auto" @click="suspendGame()">
          <ConfirmButton>
            <span class="mx-2">
              ゲームをやめる
            </span>
          </ConfirmButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, useRouter } from '@nuxtjs/composition-api';
import LandscapeScene from '@/widgets/scenes/LandscapeScene.vue';
import NextButton from '@/widgets/buttons/NextButton.vue';
import ConfirmButton from '@/widgets/buttons/ConfirmButton.vue';

export default defineComponent({
  components: {
    LandscapeScene,
    NextButton,
    ConfirmButton,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const startGame = () => {
      store.commit('auth/proccessing', true)
      router.push('/main')
    }

    const suspendGame = () => {
      store.commit('auth/authenticate', false)
      router.push('/login') 
    }

    return {
      startGame,
      suspendGame,
    }
  }
})
</script>

<style>
.top-page {
  position: absolute;
  top: 30%;
  left: 42%;
}
</style>
