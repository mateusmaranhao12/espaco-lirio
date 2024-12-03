<template>
    <section class="nossas-salas">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="mt-3 mb-3">Nossas Salas</h2>
                    <p>Nossa casa conta com salas de atendimento individual e salas de atendimento coletivo.</p>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-alugue">Alugue agora!</button>
                    </div>
                </div>

                <div v-for="(sala, index) in salas" :key="'sala-' + index" class="col-md-6 mt-4">
                    <img class="img-fluid h-100" :src="require(`../assets/imgs/${sala.src}`)"
                        :alt="'Imagem da sala ' + (index + 1)">
                </div>
            </div>
        </div>
    </section>
    <section class="nossas-salas-2">
        <div class="container">
            <div class="row">
                <div class="col-md-6 salas">
                    <p>Nossas salas de atendimento individual possuem mobiliário padrão com mesa, cadeiras, poltronas,
                        estante ou móvel de canto.</p>
                </div>
                <div class="col-md-6 salas">
                    <img class="img-fluid mb-5" src="../assets/imgs/BGT_0956-2048x1367.jpg">
                </div>
                <div class="col-md-6 salas">
                    <p>Nossas salas de atendimento individual possuem mobiliário padrão com mesa, cadeiras, poltronas,
                        estante ou móvel de canto.</p>
                </div>
                <div class="col-md-6 salas">
                    <img class="img-fluid mb-5" src="../assets/imgs/BGT_0973-1024x684.jpg">
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {}
})
export default class NossasSalas extends Vue {

    salas = [
        { src: 'sala1.jpg' },
        { src: 'sala2.jpg' },
        { src: 'sala3.jpg' },
        { src: 'sala4.jpg' },
        { src: 'sala5.jpeg' },
    ]
}
</script>
