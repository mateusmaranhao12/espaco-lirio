<template>
  <navbar />
  <index />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Index from './views/Index.vue'
import Navbar from './components/Navbar.vue'

@Options({
  components: {
    Index,
    Navbar
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
