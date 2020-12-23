import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from "jwt-decode";
import router from '../router'


Vue.use(Vuex)

export default new Vuex.Store({
  //variables de solo lectura, requieren mutaciones
  //para poderlas modificar el valor del estado
    state: {
        token: null,
        user: null,
  },
  //Las mutaciones reciben es estado para modificarlo
  //Con token se accede al token que devuelve el backend
  mutations: {
    setToken(state, token){
        state.token = token;
    },
    //En usuario se tiene el token decodificado
    setUsuario(state, usuario){
        state.user = usuario;
    }
    },
    //Ejecutan las mutaciones hacen llamada
    //a los metodos de las mutaciones
    actions:{
        guardarToken({commit}, token){
            commit("setToken",token);
            commit("setUsuario", jwtdecode(token));
            localStorage.setItem('token',token);
        },
        autoLogin({commit}){
            const token= localStorage.getItem('token');
            if(token){
                commit("setToken",token);
                commit("setUsuario", jwtdecode(token));
            }
        },
        salir({commit}){
            commit("setToken",null);
            commit("setUsuario",null);
            localStorage.removeItem('token');
            router.push({name:'Home'});


        }
    }

  
})
