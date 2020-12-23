<template>
    <div class="container-fluid m-5">
        <div class="container">
            <barra-superior/>
            <the-login/>
            <area-footer/>
        </div>
    </div>
</template>


<script>
import BarraSuperior from '@/components/BarraSuperior.vue';
import TheLogin from "@/components/Auth/TheLogin.vue";
import AreaFooter from '@/components/AreaFooter.vue';


export default {
    components:{
        BarraSuperior,
        TheLogin,
        AreaFooter,
    }
}
</script> 
