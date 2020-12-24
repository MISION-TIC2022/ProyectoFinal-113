<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title> Ciclo 3 MisionTIC2022 </v-toolbar-title>
      <v-spacer> </v-spacer>
      <!-- El método salir se creo en la store de Vuex -->
      <v-btn icon class="mr-5" @click="salir()">
        <v-icon> mdi-logout </v-icon>
        <span> Salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-card class="mx-auto" max-width="300" tile>
        <v-list rounded>
          <v-subheader>MisionTIC2022</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="{ name: item.ruta }"
              exact
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <div id="contenido">
          <h1>PORTAL USUARIO</h1>

          <img
            src="../../public/imagenes/header1.jpg"
            height="400px"
            width="auto"
            alt=""
          />
        </div>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AutorizadoComponent",
  componentes: {},

  data: () => ({
    drawer: null,
    selectedItem: 1,
    items: [
      { text: "Home", icon: "mdi-home", ruta: "Home" },
      { text: "Categoría", icon: "mdi-table", ruta: "Categoria" },
      { text: "Artículo", icon: "mdi-flag", ruta: "Articulo" },
      { text: "Usuario", icon: "mdi-file", ruta: "Usuario" },
    ],
    team: [
      {
        codigo: 1,
        nombre: "Gustavo Adolfo Gómez Calderón",
        descripcion:
          "Ingeniero civil, Magister en Gestión de la Tecnología Educativa. Docente de la IE. Antonio García Paredes en Popayán-Cauca. Me encanta aprender cosas nuevas, poner a prueba mis capacidades. ",
        rol: "Desarrollador Backend",
        image: "./gustav.jpeg",
      },
      {
        codigo: 2,
        nombre: "William Nicolás Buitrago Camacho",
        descripcion:
          "Ingeniero Sistemas, estudiante de ingeniería de sistemas en la Universidad Distrital Francisco José de Cladas en la ciudad de Bogotá. Apasionado por la tecnología y por aprender cada día más y más.",
        rol: "Desarrollador backend",
        image: "./Nicolas.jpg",
      },
      {
        codigo: 3,
        nombre: "Hernan Santiago Salamanca Martinez",
        descripcion:
          "Ingeniero Civil, con interés en la transformación de las grandes y medianas ciudades de Colombia por medio de aplicaciones de movilidad sostenible y proyectos tecnológicos que faciliten la vida de las personas.",
        rol: "Desarrollador backend",
        image: "./santiago.jpg",
      },

      {
        codigo: 4,
        nombre: "Harold Isaias Sanchez Cabezas",
        descripcion:
          "Ingeniero Electronico,  tengo 26 años, me dedico a ampliar mis conocimientos para una buena oferta laboral que me ayude a transformar mi entorno y mejorar la calidad de vida.",
        rol: "Desarrollador backend",
        image: "./Harold.jpeg",
      },
      {
        codigo: 5,
        nombre: "Mariver Milena Garcia Santana",
        descripcion:
          "Ingeniera Sistemas, especialista en redes, docente de la IED República de Francia en San Francisco. No descanso hasta ver que la cosas funcionen, apasionada por la tecnología.",
        rol: "Desarrollador backend",
        image: "./Milena.jpeg",
      },
    ],
  }),
  // Al duplicar una pagina se ejecute el autoLogin para que usuario no deba volver a logear
  created() {
    this.$store.dispatch("autoLogin");
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
  },
};
</script>


<style scoped>
#contenido{

text-align:center;


}
</style>