<template>
  <secao-principal></secao-principal>
  <nossas-salas></nossas-salas>
  <servicos></servicos>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SecaoPrincipal from '../components/SecaoPrincipal.vue'
import NossasSalas from '@/components/NossasSalas.vue'
import Servicos from '@/components/Servicos.vue'

@Options({
  components: {
    NossasSalas,
    SecaoPrincipal,
    Servicos
  },
})
export default class Index extends Vue { }
</script>

<style lang="scss"></style>