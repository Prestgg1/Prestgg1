<template>
    <div class="bg-[#12F3A6] yansayfa p-4 flex justify-between animate__bounceInLeft animate__animated">
    <h1 class="text-white text-4xl font-serif head">Projects</h1>
    <v-icon color="white" class=" p-4" size="x-large" icon="mdi-folder-multiple"></v-icon>
        </div>

<div class="flex mt-5 items-center justify-center">
  <div class="kapsayici grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 ">
    <project-vue v-for="item in projectList" :key="item.id" :title="item.title" :subtitle="item.subtitle" :url="item.url" :image="item.image"></project-vue>
  <project-vue v-for="item in projectList" :key="item.id" :title="item.title" :subtitle="item.subtitle" :url="item.url" :image="item.image"></project-vue>
  <project-vue v-for="item in projectList" :key="item.id" :title="item.title" :subtitle="item.subtitle" :url="item.url" :image="item.image"></project-vue>
  </div>


<!--   <div class="box text-white"><h1 class="z-20">Salam</h1></div>
  <div class="box text-white"><h1 class="z-20">Salam</h1></div>
  <div class="box text-white"><h1 class="z-20">Salam</h1></div>
  <div class="box text-white"><h1 class="z-20">Salam</h1></div> -->
</div>

</template>
<script>
import ProjectVue from '../components/Project.vue'
import Artifical from '../assets/img/altifical.png'
import Portfolio from '../assets/img/portfoliocreater.png'
  export default {
    data(){
      return{
        projectList:[
          {
            id:1,
            title:'PortFolioCreater',
            subtitle:'Using Html CSS',
            image:Portfolio,
            url:'https://prestgg1.github.io/PortfolioCreator/'
          },
          {
            id:2,
            title:'Artifical',
            subtitle:'Using Html CSS Javascript',
            image:Artifical,
            url:'https://prestgg1.github.io/Artificial-Intelligence/'
          }
        ]
      }
    },
    components:{ProjectVue}
  }
</script>
<style scoped>
</style>