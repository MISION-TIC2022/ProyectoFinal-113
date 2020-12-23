<template>
  <v-layout>
    <v-flex>
      <v-row
        align="center"
        align-content="center"
        style="height: 100vh"
        class="mx-auto">
        <v-col>
          <v-card-title>
          </v-card-title>
          <barra-superior> </barra-superior>
          <!-- <the-home> </the-home> -->
          <api-news />
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import BarraSuperior from "../components/BarraSuperior.vue";
import ApiNews from "@/components/ApiNews.vue";
export default {
  components: {
    BarraSuperior,
    ApiNews,
  },
};
</script>