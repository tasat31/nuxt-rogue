<template>
  <div>
    <StatusNavbar />
    <MenuFooter />
    <ActivityDialog />
    <ItemListDialog />
    <CommandListDialog />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import StatusNavbar from '@/widgets/navigations/StatusNavbar.vue';
import MenuFooter from '@/widgets/navigations/MenuFooter.vue';
import ActivityDialog from '@/widgets/dialogs/ActivityDialog.vue';
import ItemListDialog from '@/widgets/dialogs/CommandListDialog.vue';
import CommandListDialog from '@/widgets/dialogs/CommandListDialog.vue';

export default defineComponent({
  components: {
    StatusNavbar,
    MenuFooter,
    ActivityDialog,
    ItemListDialog,
    CommandListDialog,
  },
  setup() {
  }
})
</script>
