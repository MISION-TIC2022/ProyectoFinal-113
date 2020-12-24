import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            public:true
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue'),
            meta:{
                public:true,
            }
    },
    {
        path: '/autorizado',
        name: 'Autorizado',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "autorizado" */ '../views/Autorizado.vue'),
        meta:{
            auth:true,
        },
      children:[
        {
          path: 'categoria',
          name: 'Categoria',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
          meta:{
            auth:true,
          }
        },
        {
          path: 'articulo',
          name: 'Articulo',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
          meta:{
            auth:true,
          }
        },
        {
          path: 'usuario',
          name: 'Usuario',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
          meta:{
            auth:true,
          }
        }
      ]
      },

    {
        path: '/noticias',
        name: 'Noticias',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "noticias" */ '../views/Noticias.vue'),
        meta: {
            public:true,
        }
    },
    
    {
        path: '/solucion1',
        name: 'Solucion1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "solucion1" */ '../views/solucion1.vue')
    },
    {
        path: '/solucion2',
        name: 'Solucion2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "solucion2" */ '../views/solucion2.vue')
    },
    {
        path: '/solucion3',
        name: 'Solucion3',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "solucion3" */ '../views/solucion3.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


//Funcion de validacion para cada una de las rutas
//Antes de cada una de las rutas o de los procesos va a realizar una validacion
//To: hacia donde, From: desde donde, Next: continue
//Esta validacion se hace para que al borrar el token de la autenticacion, el usuario no pueda seguir en la pagina que se ha logeado
//record es un nombre de una variable 
//Si me coincide algunas de las rutas que estoy haciendo con el atributo meta.requireAuth        
//kjwt es variable en la cual se almaceno el token en el localStorage

router.beforeEach((to, from, next) => {
    //verificamos si la ruta a la que accedemos es publica o privada
    //miruta es una variable nuestra
    if (to.matched.some(miruta => miruta.meta.public)) {
        next();
    } else if (to.matched.some(miruta => miruta.meta.auth)){
    // si existe un user en store.state
        if (store.state.user){
            next();
        }else{
            next({name: 'Login'})
        }
    }else{
        next();
    }
})
export default router