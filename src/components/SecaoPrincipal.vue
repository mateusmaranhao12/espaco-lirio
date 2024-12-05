<template>
    <div class="secao-principal">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 animate__animated animate__backInDown ">
                    <img src="../assets/imgs/logo-casa-gambiarra.png" class="img-fluid logo-centralizada mt-5 mb-5">
                    <h3>Espaço de conexão, conhecimento e encontro. <br>
                        Aluguel de salas, coworking e aulas.</h3>
                </div>

                <div id="Carousel" class="carousel slide mt-5">
                    <div class="carousel-indicators">
                        <button v-for="(image, index) in images" :key="'indicator-' + index" type="button"
                            :data-bs-target="'#Carousel'" :data-bs-slide-to="index" :class="{ active: index === 0 }"
                            :aria-label="'Slide ' + (index + 1)" :aria-current="index === 0 ? 'true' : undefined">
                        </button>

                    </div>
                    <div class="carousel-inner">
                        <div v-for="(image, index) in images" :key="'carousel-item-' + index" class="carousel-item"
                            :class="{ active: index === 0 }">
                            <img :src="require(`../assets/imgs/${image.src}.jpg`)" class="d-block w-100" :alt="'Imagem ' + (index + 1)" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {
    },
})
export default class SecaoPrincipal extends Vue {

    images = [
        { src: '1-scaled-qk5b1tudc2uyd5zcyw2p5diow6i2nl3vptr4ghvlt4' },
        { src: '2-scaled-qk5b27xy6le97bevok63orylsykkv1nurrjennap7s' },
        { src: '3-scaled-qk5b2l3ou9w9puvrjpuvnon24crput43hko7dir6so' },
        { src: '4-scaled-qk5b2z79osfkk0ba9dya732z14u829o2jighko6a7c' },
        { src: '5-scaled-qk5b3bf65mwaqxtja18flhzyr55zuc0kx6xst9o5yg' },
        { src: '6-scaled-qk5b3okwtbeb9haf56x7keof2jd4u3gtn02lj54njc' },
        { src: '7-scaled-qk5b41qngzwbs0rb0clzjbcvdxk9tux2ct7e90l548' }
    ]

}
</script>

<style lang="scss">
@import '../scss/styles.scss';
</style>