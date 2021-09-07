<template>
<v-container>
  <v-row class="justify-center">
    <p class="text-h2 white--text">PRACTICE MAKES PERFECT</p>
  </v-row>
  <latest />
  <v-divider class="black"></v-divider>
</v-container>
</template>

<script>
  import Latest from '../components/Latest'

  export default {
    name: 'Home',

    components: {
      Latest,
    },
  
        Latest}
</script>
