<template>
      <v-app id="inspire">

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title> Ciclo 3 MisionTIC2022 </v-toolbar-title>
    <v-spacer> </v-spacer>
    <!-- El método salir se creo en la store de Vuex -->
    <v-btn
    icon
    class="mr-5"
    @click = "salir()">
      <v-icon> mdi-logout </v-icon>
      <span> Salir</span>
     </v-btn>


    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
          <v-card
      class="mx-auto"
      max-width="300"
      tile
    >
      <v-list rounded>
        <v-subheader>MisionTIC2022</v-subheader>
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="{name:item.ruta}"
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

        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name:"AutorizadoComponent",
    
    data: () => ({
    drawer: null,
    selectedItem: 1,
    items: [
        { text: 'Home', icon: 'mdi-home', ruta:'Home'},
        { text: 'Categoría', icon: 'mdi-table', ruta:'Categoria' },
        { text: 'Artículo', icon: 'mdi-flag', ruta: 'Articulo' },
        { text: 'Usuario', icon: 'mdi-file', ruta:'Usuario' },
    ],
    }),    
      // Al duplicar una pagina se ejecute el autoLogin para que usuario no deba volver a logear
      created(){
        this.$store.dispatch('autoLogin')
      },
    methods:{
      salir(){
        this.$store.dispatch('salir')
    }
}
}
</script>