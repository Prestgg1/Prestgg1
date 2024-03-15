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
    <v-layout class="h-100">
      <v-main >
        <Navbar/>
        <RouterView></RouterView>
      </v-main>
    </v-layout>
</template>
