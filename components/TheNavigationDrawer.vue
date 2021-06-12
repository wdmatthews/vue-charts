<template>
  <v-navigation-drawer
    v-model="show"
    clipped
    app
  >
    <v-list>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="link.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: vm => ({
    show: null,
    links: [
      {
        title: 'Welcome',
        to: '/',
        icon: 'mdi-home-analytics',
      },
      {
        title: 'Bar Chart',
        to: '/bar',
        icon: 'mdi-chart-bar',
      },
      {
        title: 'Line Chart',
        to: '/line',
        icon: 'mdi-chart-line',
      },
    ],
  }),
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>
