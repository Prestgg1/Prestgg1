<script>
import Navbar from "./components/Header.vue"
import { RouterLink,RouterView} from 'vue-router'
export default {
  
  name:'App',
  data(){
    return {
    }
  },
  components:{
    Navbar,RouterLink,RouterView
  }

}
</script>

<template>
    <v-layout class="h-full">
    
   <Navbar/>
      <v-main>
        <RouterView></RouterView>
      </v-main>
    </v-layout>
</template>
<style>


.bana{
    border: 1px solid #12F3A6;
    color: #12F3A6;
}
.bana:hover{
    background: #12F3A6;
    color: white !important;
}
.head{
    text-shadow: 2px 2px 2px #000;
}
@media (min-width:1000px) {
  .v-toolbar-title{
    flex: none !important;
  }
  .v-toolbar__content{
    justify-content: space-around;
    align-items: center;
  }
}

</style>