import Inicio from './components/Inicio.vue'
import NotFound from './components/Errors/NotFound.vue'
import Forbidden from "./components/Errors/Forbidden.vue"
import Galeria from './components/Galeria.vue'
import Productos from './components/Productos.vue'
import Servicios from './components/Servicios.vue'
import AcercaDe from './components/AcercaDe.vue'
import Contactanos from './components/Contactanos.vue'
import Registro from './components/Registro.vue'
import Evaluacion from './components/Evaluacion.vue'
import Todo from './components/Todo.vue'
const routes=[
    {
        path:'/inicio',
        name:'',
        component:Inicio
    },
    {
        path:'/',
        component:Inicio
    },
    {
        path:'/:pathMatch(.*)*',
        name:'NotFound',
        component: NotFound
    },
    {
        path:'/forbidden',
        name:'Forbidden',
        component: Forbidden
    },
    {
        path:"/contactanos",
        name:"Contactanos",
        component: Contactanos
    },
    {
        path:"/productos",
        name:"Productos",
        component: Productos
    },
    {
        path:"/servicios",
        name:"Servicios",
        component: Servicios
    },
    {
        path:"/acerca de",
        name:"AcercaDe",
        component: AcercaDe
    },
    {
        path:"/galeria",
        name:"Galeria",
        component: Galeria
    }
    ,
    {
        path:"/registro",
        name:"Registro",
        component: Registro
    },
    {
        path:"/evaluacion",
        name:"Evaluacion",
        component: Evaluacion
    }
    ,
    {
        path:"/todo",
        name:"Todo",
        component: Todo
    }
]

export default routes