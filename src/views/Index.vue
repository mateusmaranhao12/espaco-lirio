<template>
  <secao-principal></secao-principal>
  <nossas-salas></nossas-salas>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SecaoPrincipal from '../components/SecaoPrincipal.vue'
import NossasSalas from '@/components/NossasSalas.vue';

@Options({
  components: {
    NossasSalas,
    SecaoPrincipal
  },
})
export default class Index extends Vue { }
</script>

<style lang="scss"></style>