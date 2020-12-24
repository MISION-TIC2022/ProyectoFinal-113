<template>
  <div class="about">
    <barra-superior />
    <hr><hr><hr><hr>
    <div class="container-fluid mt-5">
      <h1 class="mt-5 text-center">ACERCA DEL EQUIPO</h1>
    </div>

    <!-- Area de miembros  -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col mt-2" v-for="(item, index) of team" :key="index">
          <!-- v-bind se puede abreviar como :member solamente -->
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>
        <area-footer />
  </div>
</template>




<script>
import BarraSuperior from "@/components/BarraSuperior.vue";
import TeamCard from "../components/TeamCard.vue";
import AreaFooter from "../components/AreaFooter.vue";
// import AreaFooter from "../components/AreaFooter.vue";

export default {
  name: "Home",
  components: {
    BarraSuperior,
    TeamCard,
    AreaFooter,
  },
  data() {
    return {
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
    };
  },
};
</script>


