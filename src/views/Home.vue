<template>
    <Background></Background>
    <v-layout class="d-flex w-100 h-100 justify-center align-center mainpage">
        <main class="d-flex flex-column  justify-center align-center">
            <h1 class="animate__animated animate__bounceInDown text-center text-h4 text-md-h1 p-4 text-white w-50">I'm Prestgg <span class="font-weight-bold overflow-hidden whitespace-nowrap anime border-r-white pr-5 text-white "></span> Developer</h1>
            <div class="animate__animated animate__bounceInUp d-flex justify-center">
                
                <v-btn size="x-large" variant="outlined"  class="rounded-lg p-3 mt-5 bg-black border-4 hire" @click="$router.push('/contact')">Hire Me</v-btn>
            </div>
        </main>
    </v-layout>



</template>
<script setup>
import Background from '../components/Background.vue'
</script>
<style  scoped>
.hire{
    border: 3px solid #12F3A6;
    color: #12F3A6 !important;
    transition: 250ms all;
}
.hire:hover{
    background: #12F3A6 !important;
    border: 3px solid white;
    transition: 250ms all;
    color: white !important;
}

span.anime{
    position: relative;
    line-height: clamp(3rem,15vw,9rem);
}
span.anime::before{
    content: "Frontend";
    color: #12F3A6;
}
span.anime::after{
    content:'';
    position: absolute;
    height: 100%;
    width: calc(100% + 1px);
    right: 10px;
    top: 0;
    background: black;
    animation: blink 0.8s infinite,typin 15s infinite;
    border-left: 4px solid white;
}
@keyframes blink {
    to{
        border-left:2px solid #F39C12;
    }
}
@keyframes typin{
    10%,15%,20%,30%,35%,40%,50%,55%,70%,75%,90%,95%{
        width: 0;
    }
}

</style>