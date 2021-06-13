<template>
  <v-card>
    <v-card-title class="pa-4">
      <span class="mx-auto">Chart.js Options</span>
    </v-card-title>
    <v-card-text class="px-4 py-0 white--text">
      <p>Copy and paste these options into your Chart configuration:</p>
      <pre style="white-space: pre-wrap;">{{ formattedOptions }}</pre>
    </v-card-text>
    <v-card-actions class="pa-4">
      <v-spacer />
      <v-btn
        color="primary darken-1"
        @click="copy"
      >
        Copy
      </v-btn>
      <v-spacer />
    </v-card-actions>
    <v-snackbar
      v-model="showSnackbar"
      color="success"
    >
      <p class="text-center mb-0">
        Copied to clipboard
      </p>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  data: vm => ({
    showSnackbar: false,
  }),
  computed: {
    formattedOptions() {
      return this.formatObject(this.$store.state.options)
    },
  },
  methods: {
    formatObject(data, tabs = '') {
      let formattedResult = '{'
      
      Object.keys(data).forEach((key) => {
        let value = ''
        const datum = data[key]
        
        if (typeof datum === 'object' && Array.isArray(datum)) {
          value = this.formatArray(datum)
        } else if (typeof datum === 'object') {
          value = this.formatObject(datum, tabs + '\t')
        } else if (typeof datum === 'string') {
          value = `'${datum}'`
        } else {
          value = datum
        }
        
        formattedResult += `\n${tabs}\t${key}: ${value},`
      })
      
      return formattedResult + `\n${tabs}}`
    },
    formatArray(data) {
      let formattedResult = '['
      
      data.forEach((datum, i) => {
        if (i > 0) {
          formattedResult += ', '
        }
        
        if (typeof datum === 'string') {
          formattedResult += `'${datum}'`
        } else {
          formattedResult += datum
        }
      })
      
      return formattedResult + ']'
    },
    async copy() {
      await navigator.clipboard.writeText(this.formattedOptions)
      this.showSnackbar = true
    },
  },
}
</script>
