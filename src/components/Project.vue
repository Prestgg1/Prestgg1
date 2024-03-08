<template>
<!--     <div class="text-center pa-4">
       <v-dialog
         v-model="dialog"
         transition="dialog-bottom-transition"
         fullscreen
       >
         <template v-slot:activator="{ props: activatorProps }">
           <v-btn
             prepend-icon="mdi-cog"
             size="small"
             text="View"
             v-bind="activatorProps"
           ></v-btn>
         </template>
   
         <v-card>
           <v-toolbar>
             <v-btn
               icon="mdi-close"
               @click="dialog = false"
             ></v-btn>
             <v-toolbar-title>Settings</v-toolbar-title>
             <v-toolbar-items>
               <v-btn
                 text="Save"
                 variant="text"
                 @click="dialog = false"
               ></v-btn>
             </v-toolbar-items>
           </v-toolbar>
Content
         </v-card>
       </v-dialog>
     </div>
    -->



<v-dialog
         v-model="dialog"
         transition="dialog-bottom-transition"
         fullscreen
       >
       <template v-slot:activator>


        <v-card
        @click="dialog=true"
    class="mx-auto my-8 text-white vcard"
    max-width="344"
    variant="outlined"
    :title="title"
    link
  >
    <template v-slot:subtitle>
      <span class="text-white flex flex-col gap-2">
        <p>{{ subtitle }}</p>
        <img :src="image" alt="" class="w-full h-40 object-fill">
      </span>
    </template>
    <template v-slot:text>
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
<iframe :src="url" frameborder="0" class="h-full"></iframe>
         </v-card>
</v-dialog>
   </template>
   <script>
     export default {
       data () {
         return {
           dialog: false,
         }
       },
       props:['title','subtitle','image','url']
     }
   </script>

<style>
.vcard{
    border-color: #12F3A6;
}
</style>