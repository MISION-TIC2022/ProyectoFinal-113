<template>
 
    <div class="container-fluid" style="margin-top:80px;">
        
        <div>
            <barra-superior/>
            <hr><hr><hr>
            <solucion-3/>
            <area-footer/>
        </div>
    </div>

</template>


<script>
//Se referencia al componnte TheLogin en una nueva carpeta auth
import BarraSuperior from '../components/BarraSuperior.vue';
import Solucion3 from "@/components/solucion3.vue";
import AreaFooter from '../components/AreaFooter.vue';
// import AreaFooter from '../components/AreaFooter.vue';
export default {
    components:{
        Solucion3,
        BarraSuperior,
        AreaFooter,
    }
}
</script> 