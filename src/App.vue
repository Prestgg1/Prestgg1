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