<template>
  <div class="px-4 pt-4">
    <p>Welcome to Vue Charts, a project of mine meant for creating reactive Chart.js charts using Vue's reactivity and Chart.js's Chart.update method.</p>
    <p>Whenever a changed is detected in a chart's labels, datasets, or options, the chart is updated.</p>
    <p>There are two pages that show an example of this reactivity, allowing you to modify the labels, datasets, and options while watching the chart update.</p>
    <p>Note that this website is not a complete Chart.js editor, and lacks many settings/features, including ones that are not realistic for a UI editor. The main goal of this project was to achieve reactivity with charts, and learn the basics of Vuex (used for storing your labels, datasets, and options across pages).</p>
    <p>However, there are some common options to modify, and you can press the "Copy" button on the options tab so that you can paste them into your Chart (or the options prop of a BaseChart component instance).</p>
    <p>Another note is that an error occurs if you change pages when not on the chart tab, so if you want to switch charts, please make sure you are in the chart tab first.</p>
  </div>
</template>

<script>
export default {
  
}
</script>
