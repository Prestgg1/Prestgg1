<template>
    <Background></Background>
    <v-layout class="flex w-full h-full justify-center items-center mainpage">
        <main class="flex flex-col w-1/2 ">
            <h1 class="animate__animated animate__bounceInDown text-center text-4xl md:text-8xl p-4 text-white">I'm Prestgg <span class="overflow-hidden whitespace-nowrap anime border-r-white pr-5 text-white font-bold"></span> Developer</h1>
            <div class="animate__animated animate__bounceInUp flex justify-center">
                
                <v-btn variant="outlined" class="p-3 font-extralight  bg-black border-4  hover:scale-125 " @click="$router.push('/contact')" color="#12F3A6" >Hire Me</v-btn>
            </div>
        </main>
    </v-layout>



</template>
<script setup>
import Background from '../components/Background.vue'
</script>
<style  scoped>
.v-btn--variant-outlined{
    border: 2px solid #12F3A6;
    color: #12F3A6;
    font-weight: 900;
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