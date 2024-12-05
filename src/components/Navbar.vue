<template>
  <nav class="navbar navbar-expand-lg navbar-espaco-lirio fixed-top">
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
            <router-link class="nav-link" :class="{ active: activeSection === 'secao-principal' }"
              to="#secao-principal">A Casa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: activeSection === 'nossas-salas' }"
              to="#nossas-salas">Espaço</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: activeSection === 'servicos' }"
              to="#servicos">Serviços</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: activeSection === 'precos' }"
              to="#precos">Preços</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Parceiros</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :class="{ active: activeSection === 'contatos' }" to="#contatos">Área do
              Cliente</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Navbar extends Vue {
  activeSection = ''

  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll() {
    const sections = [
      { id: 'secao-principal', offset: document.getElementById('secao-principal')?.offsetTop || 0 },
      { id: 'nossas-salas', offset: document.getElementById('nossas-salas')?.offsetTop || 0 },
      { id: 'servicos', offset: document.getElementById('servicos')?.offsetTop || 0 },
      { id: 'precos', offset: document.getElementById('precos')?.offsetTop || 0 },
      { id: 'contatos', offset: document.getElementById('contatos')?.offsetTop || 0 },
    ]

    const scrollPosition = window.scrollY + 200; // Ajuste para considerar o topo visível
    const active = sections
      .filter((section) => scrollPosition >= section.offset)
      .slice(-1)[0]?.id

    this.activeSection = active || ''
  }
}
</script>

<style lang="scss">
@import '../scss/styles.scss';
</style>
