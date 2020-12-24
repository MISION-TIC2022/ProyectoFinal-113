<template>
 
<div class="container-fluid" style="margin-top:80px;">
    <div >
        <barra-superior/>
        <hr><hr><hr>
        <solucion-2/>
        <area-footer/>
    </div>
</div>

</template>


<script>
//Se referencia al componnte TheLogin en una nueva carpeta auth
import BarraSuperior from '../components/BarraSuperior.vue';
import Solucion2 from "@/components/solucion2.vue";
import AreaFooter from '../components/AreaFooter.vue';
// import AreaFooter from '../components/AreaFooter.vue';
export default {
    components:{
        BarraSuperior,
        Solucion2,
        AreaFooter,
    }
}
</script> 