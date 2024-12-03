<template>
    <secao-principal></secao-principal>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import SecaoPrincipal from '../components/SecaoPrincipal.vue'
  
  @Options({
    components: {
      SecaoPrincipal
    },
  })
  export default class Index extends Vue {}
  </script>
  
  <style lang="scss">
  </style>
  