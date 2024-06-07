<template>
<v-col cols="12" sm="4" md="3" >
  <div class="box animate__animated animate__fadeIn">
<v-container class="h-100 w-100 text-white z-20">
  <v-dialog
         v-model="dialog"
         transition="dialog-bottom-transition"
         fullscreen
       >
       <template v-slot:activator>

        <v-card
        @click="dialog=true"
    class=" text-white  rounded-lg"
    
    color="black"
    :title="title"
    link
  >
    <template v-slot:subtitle>
      <span class="text-white d-flex flex-column ga-2">
        <p>{{ subtitle }}</p>
      </span>
    </template>
    <template v-slot:text>
      <span class="text-white d-flex flex-column ga-2">
        <img :src="image" :alt="title" class="rounded-md w-100 " style="object-fit: cover; height: 200px;">
      </span>
    </template>
</v-card>
</template>
<v-card>
           <v-toolbar flat app>

             <v-btn
               icon="mdi-close"
               @click="dialog = false"
             ></v-btn>
             <v-toolbar-title>{{ title }}</v-toolbar-title>
             <v-spacer></v-spacer>
           </v-toolbar>
<iframe :src="url" frameborder="0" class="h-100"></iframe>
         </v-card>
</v-dialog>
</v-container>

</div>

</v-col>
   </template>
   <script>
     export default {
       data () {
         return {
           dialog: false,
         }
       },
       props:['title','subtitle','image','url'],
     }
   </script>
<style>

</style>