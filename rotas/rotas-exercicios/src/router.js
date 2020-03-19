import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";

import Usuario from "./components/usuario/Usuario";
import UsuarioLista from "./components/usuario/UsuarioLista";
import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
import Menu from "./components/template/Menu";
import MenuAlt from "./components/template/MenuAlt";

Vue.use(Router);

const UsuarioEditar = () => import('./components/usuario/UsuarioEditar');

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            // component: Inicio
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: '/usuario/',
            // component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAlt
            },
            props: true,
            children: [
                { path: '', component: UsuarioLista },
                {
                    path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log("Antes da rota usuario-detalhe -> beforeEnter pra uma rota específica");
                        next();
                    }
                },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log("Antes das rotas -> Forma global");
    next();
})

export default router
