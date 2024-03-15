<template>
     <v-app-bar
      class="appbar"
      >
        <v-toolbar-title class="d-lg-none">
          <template  v-slot:text>
            <span @click="$router.push('/')" class="cursor-pointer text-maincolor font-weight-bold text-h5">Prestgg</span>
          </template>
        </v-toolbar-title>
        <v-spacer class="d-lg-none"/>
        <div class="d-flex align-center flex-row d-lg-none">
          <v-app-bar-nav-icon v-if="!drawer" variant="text" color="white" @click.stop="scri"></v-app-bar-nav-icon>
          <v-btn v-else @click="drawer=!drawer"><v-icon color="white" icon="mdi-close"></v-icon></v-btn>
        </div>
        <v-list class="d-none d-lg-flex bg-transparent overflow-hidden text-maincolor">
  <v-list-item 
    v-for="n in items"
    :key="n"
    color="maincolor"
  ><v-btn class="animate__animated animate__fadeIn" @click="$router.push(n.to)" color="maincolor"><v-icon class="pa-4" :icon="n.icon"></v-icon>{{ n.title }}</v-btn> </v-list-item>
</v-list>

      </v-app-bar>
      <v-navigation-drawer
      class="bg-black border-4 overflow-hidden text-center"
        v-model="drawer"
        temporary
      >
      <v-list class="h-100 d-flex flex-column justify-center overflow-hidden">
    <v-list-item

    v-for="n in items"
    :key="n"
    class="text-maincolor"
    v-ripple
    @click="$router.push(n.to)"
  ><v-icon class="pr-3" :icon="n.icon"></v-icon>{{ n.title }} </v-list-item>
  </v-list>
      </v-navigation-drawer>
</template>
<script setup>
import { ref } from 'vue';
const items = [
{
            title:'Home',
            icon:'mdi-home',
            to:'/'
        },
        {
            title:'About Me',
            icon:'mdi-information',
            to:'/about'
        },
        {
            title:'Contact',
            icon:'mdi-email',
            to:'/contact'
        },
        {
            title:'Projects',
            icon:'mdi-folder-multiple',
            to:'/projects'
        },
        {
            title:'Skills',
            icon:'mdi-anvil',
            to:'/skills'
        }
]
const drawer = ref(false)
const windows = ref('auto')
const scri = () => {
  drawer.value =!drawer.value
  windows.value = window.innerWidth
}
</script>
<style scoped>
header.v-app-bar{
 background: transparent;
}
#app div.v-layout main.v-main:has(.yansayfa) header.v-app-bar{
  background: black;
}
</style>