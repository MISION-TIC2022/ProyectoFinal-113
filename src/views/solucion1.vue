<template>
 
<div class="container-fluid" style="margin-top:80px;">
    <div >
        <barra-superior/>
        <hr><hr><hr>
        <solucion-1/>
        <area-footer/>
    </div>
    
</div>

</template>


<script>
//Se referencia al componnte TheLogin en una nueva carpeta auth
import BarraSuperior from '../components/BarraSuperior.vue';
import Solucion1 from "@/components/solucion1.vue";
import AreaFooter from '../components/AreaFooter.vue';
// import AreaFooter from '../components/AreaFooter.vue';
export default {
    components:{
        BarraSuperior,
        Solucion1,
        AreaFooter,
    }
}
</script> 