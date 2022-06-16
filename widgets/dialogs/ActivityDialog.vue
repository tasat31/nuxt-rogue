<template>
   <div v-if="show" class="modal-overlay flex-auto justify-center fixed top-0 bottom-0 left-0 right-0">
      <div class="modal absolute bottom-6 w-full border border-orange-600 border-4 shadow-xl shadow-zinc-900 bg-amber-700 opacity-50">
        <div class="text-white">
          Activity 表示用のモーダル
          {{ title }}
          {{ content }}
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useStore, ref, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  components: {
  },
  setup() {
    const store = useStore()

    const title = ref('')
    const content = ref('')
    const show = ref(false)

    store.subscribe((mutation: any, state: any) => {
      if (mutation.type === 'activity/setActivity') {
        title.value = store.getters['activity/title']
        content.value = store.getters['activity/content']
        show.value = true
      }
    })

    return {
      show,
      title,
      content,
    }
  }
})
</script>

<style>
.modal-overlay {
  display: flex;
  background-color: transparent;
}

.modal {
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}
</style>