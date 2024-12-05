<template>
  <navbar />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'

@Options({
  components: {
    Footer,
    Navbar
  },
})
export default class App extends Vue { }
</script>

<style lang="scss">
body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body::-webkit-scrollbar {
  width: 12px;
}

body::-webkit-scrollbar-track {
  background: #6e7740;
}

body::-webkit-scrollbar-thumb {
  background-color: #f5f5dc;
  border-radius: 20px;
  border: 3px solid #011f00;
}
</style>
