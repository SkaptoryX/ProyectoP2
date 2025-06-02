import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Diu from "../views/Diu.vue";
import PregradoDiurnoCarreras from "../views/pregrado-diurno/Carreras.vue";
import PregradoVespertino from "../views/pregrado-vespertino/index.vue";
import Magister from "../views/magister/index.vue";
import Doctorado from "../views/doctorado/index.vue";
import FormacionContinua from "../views/formacion-continua/index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/diu',
            name: 'diu',
            component: Diu
        },
        {
            path: '/pregrado-diurno/carreras',
            name: 'pregrado-diurno-carreras',
            component: PregradoDiurnoCarreras
        },
        {
            path: '/pregrado-vespertino',
            name: 'pregrado-vespertino',
            component: PregradoVespertino
        },
        {
            path: '/magister',
            name: 'magister',
            component: Magister
        },
        {
            path: '/doctorado',
            name: 'doctorado',
            component: Doctorado
        },
        {
            path: '/formacion-continua',
            name: 'formacion-continua',
            component: FormacionContinua
        },
        // Ruta comodín para manejar rutas no encontradas
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

export default router;