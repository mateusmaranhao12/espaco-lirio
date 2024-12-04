<template>
  <secao-principal></secao-principal>
  <nossas-salas></nossas-salas>
  <servicos></servicos>
  <precos></precos>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SecaoPrincipal from '../components/SecaoPrincipal.vue'
import NossasSalas from '@/components/NossasSalas.vue'
import Servicos from '@/components/Servicos.vue'
import Precos from '@/components/Precos.vue'

@Options({
  components: {
    NossasSalas,
    SecaoPrincipal,
    Servicos,
    Precos
  },
})
export default class Index extends Vue { }
</script>

<style lang="scss"></style>