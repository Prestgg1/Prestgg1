<template>
     <v-app-bar
        color="black"
      >
        <v-toolbar-title>
          <template  v-slot:text>
            <span @click="$router.push('/')" class="cursor-pointer text-[#12F3A6] text-2xl font-extrabold">Prestgg</span>
          </template>
        </v-toolbar-title>
        <v-spacer class="lg:hidden"/>
        <div class="flex items-center flex-row lg:hidden">
          <v-app-bar-nav-icon v-if="!drawer" variant="text" @click.stop="scri"></v-app-bar-nav-icon>
          <v-btn v-else @click="drawer=!drawer"><v-icon icon="mdi-close"></v-icon></v-btn>
        </div>
        <v-list class="hidden lg:flex bg-transparent overflow-hidden text-[#12F3A6]">
  <v-list-item 
    v-for="n in items"
    :key="n"
    color="teal-darken-4"
    class="text-4xl"
  ><v-btn @click="$router.push(n.to)" color="teal-accent-3"><v-icon class="p-4" :icon="n.icon"></v-icon>{{ n.title }}</v-btn> </v-list-item>
</v-list>

      </v-app-bar>
      <v-navigation-drawer
      class="bg-black border-4 overflow-hidden border-white text-center"
        v-model="drawer"
        location="top"
        temporary
      >
      <v-list class="h-full flex flex-col justify-center overflow-hidden">
    <v-list-item

    v-for="n in items"
    :key="n"
    color="teal-darken-4"
    v-ripple
    style="color:#12F3A6"
    @click="$router.push(n.to)"
  ><v-icon class="p-4" :icon="n.icon"></v-icon>{{ n.title }} </v-list-item>
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
  windows.value = drawer.value? window.innerWidth : 'auto'
}
</script>