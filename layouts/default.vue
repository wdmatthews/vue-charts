<template>
  <v-app>
    <TheNavigationDrawer ref="navigationDrawer" />
    <TheAppBar @toggle-navigation="$refs.navigationDrawer.toggle()" />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>
