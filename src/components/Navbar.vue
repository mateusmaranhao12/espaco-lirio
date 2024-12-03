<template>
  <nav class="navbar navbar-expand-lg navbar-espaco-lirio">
    <div class="container">
      <!-- Logo ou nome -->
      <a class="navbar-brand text-light" href="#">Espaço Lírio</a>

      <!-- Botão do menu hambúrguer -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="border: 1px solid white;">
        <i class="fa-solid fa-bars" style="color: white;"></i>
      </button>

      <!-- Itens do menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
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
      </div>
    </div>
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