<template>
        <div class="w-100 yansayfa d-flex flex-column overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-maincolor pa-4 d-flex justify-space-between">
    <h1 class="text-white text-h4 head shadow-black animate__animated animate__fadeIn">Projects</h1>
    <v-icon color="white" class=" pa-4" size="x-large" icon="mdi-folder-multiple"></v-icon>
        </div>
    </div>
        <v-container class="fill-height   w-100">
          <v-row align-content="center" justify="center" class="ga-16 ">
            <project-vue v-for="item in projectList" :key="item.id" :title="item.title" :subtitle="item.subtitle" :url="item.url" :image="item.image"></project-vue>
            
          </v-row>
        </v-container>


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