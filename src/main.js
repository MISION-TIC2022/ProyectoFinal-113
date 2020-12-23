import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')


// const base = axios.create({
//         // Heroku creado con mi cuenta en gustavoadolfo@agp
//         baseURL: 'https://blooming-sea-37374.herokuapp.com/'
//     })
// // se define que se usa base a traves de $http
// Vue.prototype.$http = base;


