<template>
    <div class="container-fluid" style="margin-top:80px;">
      <barra-superior> </barra-superior>
      <top-banner> </top-banner>
      <area-servicios> </area-servicios>
      <solucion2> </solucion2>
      <solucion3> </solucion3>
      <area-footer> </area-footer>
      <router-view />
    </div>
</template>

<script>
import BarraSuperior from "@/components/BarraSuperior.vue";
import TopBanner from "@/components/TopBanner.vue";
import AreaServicios from '@/components/AreaServicios.vue';
import Solucion2 from "@/components/solucion2.vue";
import Solucion3 from "@/components/solucion3.vue";
import AreaFooter from "@/components/AreaFooter.vue";

export default {
  components: {
    BarraSuperior,
    TopBanner,
    AreaServicios,
    Solucion2,
    Solucion3,
    AreaFooter,
  },
};
</script>



<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
