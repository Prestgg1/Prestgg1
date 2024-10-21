<template>
        <div class="w-100 yansayfa d-flex flex-column overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-maincolor pa-4 d-flex justify-space-between">
    <h1 class="text-white text-h4 head shadow-black animate__animated animate__fadeIn">Projects</h1>
    <v-icon color="white" class=" pa-4" size="x-large" icon="mdi-folder-multiple"></v-icon>
        </div>
    </div>
        <v-container class="fill-height  w-100">
          <v-row align-content="center" justify="center" class="ga-16 ">
            <v-progress-circular v-if="loading" color="#12F3A6" indeterminate :size="128"></v-progress-circular>

            <project-vue v-else v-for="item in projectList" :key="item.id" :title="item.title" :subtitle="item.subtitle" :url="item.url" :image="item.image"></project-vue>
            
          </v-row>
        </v-container>


</template>
<script>
import ProjectVue from '../components/Project.vue';
import axios from 'axios';
  export default {
    data(){
      return{
        projectList:[
        ],
        loading:true
      }
    },
    mounted(){
      this.getProjectList();
    },
    methods:{
      async getProjectList(){
        const response = await axios.get('https://faux-api.com/api/v1/projectlist_9744218644067304')
        this.loading = false;
        this.projectList = response.data.result
      }
    },
    components:{ProjectVue}
  }
</script>
<style scoped>
</style>
