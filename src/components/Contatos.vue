<template>
    <div class="contatos">
        <div class="container py-5">
            <div class="row">
                <div class="col-md-6 mb-5">
                    <iframe class="w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.4328112171385!2d-37.0541744!3d-10.9472469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7168775ef94bcab%3A0x2fbcb5e7f3405408!2sR.%20Eng.%20Hernan%20Centurion%2C%20740%20-%20Jardins%2C%20Aracaju%20-%20SE%2C%2049025-170!5e0!3m2!1sen!2sbr!4v1696620908375!5m2!1sen!2sbr"
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h1 class="text-uppercase text-center mb-4">Contatos</h1>
                    <div class="text-center">
                        <p><strong>Fale conosco:</strong></p>
                        <div class="col-md-12 mb-3">
                            <button @click="openWhatsApp1" class="btn btn-whatsapp">
                                <i class="fa-brands fa-whatsapp"></i> 79 98869-0302
                            </button>
                        </div>
                        <div class="col-md-12 mb-3">
                            <button @click="openWhatsApp2" class="btn btn-whatsapp">
                                <i class="fa-brands fa-whatsapp"></i> 79 98118-4111
                            </button>
                        </div>
                        <p>
                            <i class="fa-solid fa-envelope"></i> <a
                                href="mailto:nacasagambiarra@gmail.com">nacasagambiarra@gmail.com</a>
                        </p>
                        <p>
                            <i class="fa-solid fa-location-dot"></i> Endereço: Rua Engenheiro Hernan Centurion, 740,
                            bairro
                            Jardins, Aracaju/SE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Contatos extends Vue {

    openWhatsApp1() {
        window.open('https://wa.link/loy3km')
    }

    openWhatsApp2() {
        window.open('https://wa.link/96kt3e')
    }

}
</script>

<style lang="scss">
@import '../scss/styles.scss';
</style>