
<template>
  <nuxt-link to="hrefProp" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </nuxt-link>
</template>

export default defineComponent({
  components: {
  },
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const hrefProp = computed(() => props.href)

    return {
      hrefProp,
    }
  }
})
</script>
