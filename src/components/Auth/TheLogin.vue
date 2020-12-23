<template>
  <v-layout>
    <v-flex>
      <v-row align="center"
        align-content="center"
        style="height:45vh"
        class="mx-auto"
        >
        <v-col >
          <v-card class="pa-12">
            

            <v-form ref="form" Lazy-validation>
                <v-card-title
                title class="headline">
                Formulario de Login
                </v-card-title>
              
              <v-text-field
                v-model="login.email"
                label="E-mail"
                required>
              </v-text-field>

              <v-text-field
                v-model="login.password"
                label="Contraseña"
                type="password"
                required
                ></v-text-field>
              <div
              > 
                <v-btn
                  block
                  rounded
                  color="success"
                  @click="loginUser">
                  INGRESAR
                </v-btn>
              </div>
            </v-form>
          
          </v-card>
        
        </v-col>
      
      </v-row>
    
    </v-flex>
  
  </v-layout>
</template>



<script>

import swal from "sweetalert";
import axios from "axios";

export default {
  name: "TheLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  // Al clonar una pagina no tenga que volver a logearse sino que se haga un autologin con store de Vuex
  beforeCreate(){
        this.$store.dispatch('autoLogin');
      },

  methods: {
    async loginUser() {
      axios.post("http://localhost:3000/api/usuario/login", this.login)
        .then((response) => {
          // console.log(response.data);
          return response.data;
        })
        .then(data => {
          //dispatch permite ejecutar las acciones del store
          this.$store.dispatch('guardarToken', data.tokenReturn);
          this.$router.push({name: 'Autorizado'}); 
          swal("Successfully logged!",`Usted se ha registrado con exito!, Usuario`,"success");
          console.log(data);
        })
        .catch((error) => {
          swal("An error has ocurred!","Revise sus datos de ingreso!","error");
          console.log(error);
          return error;
        })
    }
  }
}
</script>
