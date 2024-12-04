<template>
    <div class="precos">
        <div class="container py-5">
            <!-- Salas Individuais -->
            <div class="text-center mb-5">
                <h2 class="titulo-secao">SALAS INDIVIDUAIS</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-lg-3 mb-4" v-for="(sala, index) in salasIndividuais" :key="index">
                    <div class="card-preco text-center h-100 p-3">
                        <h3 class="preco">R$ {{ sala.preco }},00</h3>
                        <div class="descricao bg-olive text-white p-2 mt-2 rounded">
                            <p>{{ sala.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Salas Coletivas -->
            <div class="text-center my-5">
                <h2 class="titulo-secao">SALAS COLETIVAS</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-lg-3 mb-4" v-for="(sala, index) in salasColetivas" :key="index">
                    <div class="card-preco text-center h-100 p-3">
                        <h3 class="preco">R$ {{ sala.preco }},00</h3>
                        <div class="descricao bg-olive text-white p-2 mt-2 rounded">
                            <p>{{ sala.descricao }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Precos extends Vue {
    salasIndividuais = [
        { preco: 25, descricao: "Hora avulsa\nSegunda a Sexta\n07h às 13h\nSábado e Domingo\nDia inteiro" },
        { preco: 30, descricao: "Segunda a Sexta\nDas 13h às 22h" },
        { preco: 250, descricao: "Diária\nDas 07h às 22h" },
    ];

    salasColetivas = [
        { preco: 50, descricao: "Hora avulsa\nSegunda a Sexta" },
        { preco: 250, descricao: "Diária\nSexta ou Domingo\nDas 07h às 22h" },
        { preco: 350, descricao: "Diária\nSábado\nDas 07h às 22h" },
    ];
}
</script>

<style lang="scss">
@import '../scss/styles.scss';


</style>