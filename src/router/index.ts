import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Index from '@/views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/#nossas-salas',
    name: 'NossasSalas',
    component: Index
  },

  {
    path: '/#secao-principal',
    name: 'SecaoPrincipal',
    component: Index
  },

  {
    path: '/#precos',
    name: 'Precos',
    component: Index
  },

  {
    path: '/#servicos',
    name: 'Servicos',
    component: Index
  },

  {
    path: '/#contatos',
    name: 'Contatos',
    component: Index
  }
]

// Criando o router com a história de navegação
const router = createRouter({
  history: createWebHistory(),
  routes,  // As rotas configuradas
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;  // Retorna a posição salva do scroll, se houver
    }
    if (to.hash) {
      return {
        el: to.hash,  // Rola até a seção com o ID especificado no hash
        behavior: 'smooth',  // Rolagem suave
      };
    }
    return { top: 0 };  // Caso contrário, rola para o topo da página
  },
});

export default router