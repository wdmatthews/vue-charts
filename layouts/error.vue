<template>
  <v-app>
    <div class="text-center pa-4">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <nuxt-link to="/">
        Welcome Page
      </nuxt-link>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data: vm => ({
    pageNotFound: 'Error 404: Page Not Found',
    otherError: 'An Error Occurred',
  }),
  head: vm => ({
    title: vm.error.statusCode === 404 ? vm.pageNotFound : vm.otherError,
  }),
}
</script>
