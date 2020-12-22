<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {},

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
};
</script>
