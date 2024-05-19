import {createWebHistory, createRouter} from 'vue-router';
import Inicio from '../views/Inicio.vue'
import Registro from '../views/Registro.vue'

const routes = [
    {
        path:'/inicio',
        name:'Inicio',
        component:Inicio
    },

    {
        path:'/registro',
        name:'Registro',
        component:Registro
    },
    

]

const router=createRouter({
    history:createWebHistory(),
    routes

})

export default router;