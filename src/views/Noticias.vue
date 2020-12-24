<template>
  <v-layout>
    <v-flex>
      <v-row
        align="center"
        align-content="center"
        style="height: 100vh"
        <v-col>
          <barra-superior> </barra-superior>
          <hr>
          <hr>
          <v-card-title>
          <div class="container-fluid mt-5">
          <h1 class="mt-5 text-center">NOTICIAS DE ACTUALIDAD</h1>
          </div>
          </v-card-title>
          <api-news />
          <area-footer/>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import BarraSuperior from "../components/BarraSuperior.vue";
import ApiNews from "@/components/ApiNews.vue";
import AreaFooter from '../components/AreaFooter.vue';

export default {
  components: {
    BarraSuperior,
    ApiNews,
    AreaFooter,
  },
};
</script>