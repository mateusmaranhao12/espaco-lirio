<template>
  <secao-principal id="secao-principal"></secao-principal>
  <nossas-salas></nossas-salas>
  <servicos id="servicos"></servicos>
  <precos id="precos"></precos>
  <contatos id="contatos"></contatos>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Contatos from '@/components/Contatos.vue'
import SecaoPrincipal from '../components/SecaoPrincipal.vue'
import NossasSalas from '@/components/NossasSalas.vue'
import Servicos from '@/components/Servicos.vue'
import Precos from '@/components/Precos.vue'

@Options({
  components: {
    Contatos,
    NossasSalas,
    SecaoPrincipal,
    Servicos,
    Precos
  },
})
export default class Index extends Vue { }
</script>

<style lang="scss"></style>