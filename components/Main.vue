<template>
  <div @click="showActivity()">
    <LandscapeScene />
    <StatusNavbar />
    <ActivityDialog />
    <ItemListDialog />
    <CommandListDialog />
  </div>
</template>

<script>
import { defineComponent, useContext } from '@nuxtjs/composition-api';
import LandscapeScene from '@/widgets/scenes/LandscapeScene.vue';
import StatusNavbar from '@/widgets/navigations/StatusNavbar.vue';
import ActivityDialog from '@/widgets/dialogs/ActivityDialog.vue';
import ItemListDialog from '@/widgets/dialogs/CommandListDialog.vue';
import CommandListDialog from '@/widgets/dialogs/CommandListDialog.vue';

export default defineComponent({
  components: {
    LandscapeScene,
    StatusNavbar,
    ActivityDialog,
    ItemListDialog,
    CommandListDialog,
  },
  setup() {
    const { $activity } = useContext()

    const showActivity = () => {
      $activity.show({
        title: 'sample title',
        content: 'sample content',
      })
    }

    return {
      showActivity,
    }
  }
})
</script>