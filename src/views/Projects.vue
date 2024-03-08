<template>
        <div class="bg-[#12F3A6] p-4 flex justify-between animate__bounceInLeft animate__animated border-b-white border-b-2 border-dashed ">
    <h1 class="text-white text-4xl font-serif head">Projects</h1>
    <v-icon color="white" class=" p-4" size="x-large" icon="mdi-folder-multiple"></v-icon>
        </div>
<div class="flex flex-wrap">
  <project-vue v-for="item in projectList" :key="item.id" :title="item.title" :subtitle="item.subtitle" :url="item.url" :image="item.image"></project-vue>
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