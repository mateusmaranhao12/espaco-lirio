<template>
  <nav class="navbar-espaco-lirio">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#">A Casa</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Espaço</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Serviços</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Preços</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Parceiros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Área do Cliente</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
})
export default class Navbar extends Vue { }
</script>

<style lang="scss">
@import '../scss/styles.scss';
</style>