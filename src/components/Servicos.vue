<template>
    <section class="servicos">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Serviços</h2>
                    <p>Aqui você tem a possibilidade de fazer networking, além de desfrutar de vários serviços que a
                        Casa oferece, confira:
                    </p>
                </div>

                <div class="card-servicos col-12 col-md-6 col-lg-3 mb-4" v-for="(servico, index) in servicos"
                    :key="index">
                    <img :src="require(`../assets/imgs/${servico.imagem}.jpeg`)" class="img-fluid"
                        :alt="servico.titulo">
                    <h3 class="mt-3">{{ servico.titulo }}</h3>
                    <p>{{ servico.descricao }}</p>
                    <button class="mt-2 mb-2 btn btn-inscreva">{{ servico.botao }}</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
    components: {},
})
export default class Servicos extends Vue {
    // Dados dos serviços
    servicos = [
        {
            titulo: 'Aulas de Ballet',
            descricao: 'Permite o aprendizado da técnica do Ballet Clássico com foco no auto desafio permitindo o trabalho de corpo e mente. Musicalidade, postura, fortalecimento muscular, consciência corporal e troca humana são pilares importantes das aulas.',
            imagem: 'card1',
            botao: 'Inscreva-se'
        },
        {
            titulo: 'Aulas de Yoga',
            descricao: 'Yoga é uma prática milenar que une corpo e mente, buscando equilíbrio e bem-estar. Através de posturas, respiração consciente e meditação, o yoga promove flexibilidade, fortalecimento e relaxamento.',
            imagem: 'card2',
            botao: 'Inscreva-se'
        },
        {
            titulo: 'Mrs Cake Garden',
            descricao: 'Uma das Unidades da Mrs Cake fica situada aqui na casa. Um local que trás toda a essência de uma confeitaria feita por pessoas para pessoas. Aqui você encontra Sanduíches, Cafés, Chás, Tortas, Doces. Venha transformar doces momentos em memórias afetivas.',
            imagem: 'card3',
            botao: 'Inscreva-se'
        },
        {
            titulo: 'Coworking',
            descricao: 'O coworking é um espaço físico que pode ser compartilhado por várias empresas, profissionais liberais e freelancers. Explore o universo do coworking e redefina o seu caminho para o sucesso profissional!',
            imagem: 'card4',
            botao: 'Inscreva-se'
        }
    ]
}
</script>

<style lang="scss">
@import '../scss/styles.scss';
</style>