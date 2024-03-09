<template>

<div class="box animate__animated animate__fadeIn">
<v-container class="h-full w-full text-white z-20">
  <v-dialog
         v-model="dialog"
         transition="dialog-bottom-transition"
         fullscreen
       >
       <template v-slot:activator>


        <v-card
        @click="dialog=true"
    class=" text-white  rounded-lg"
    max-width="344"
    color="black"
    :title="title"
    link
  >
    <template v-slot:subtitle>
      <span class="text-white flex flex-col gap-2">
        <p>{{ subtitle }}</p>
      </span>
    </template>
    <template v-slot:text>
      <span class="text-white flex flex-col gap-2">
        <p>{{ text }}</p>
        <img :src="image" alt="" class="rounded-md w-full h-40 object-fill">
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
<iframe :src="url" frameborder="0" class="h-full"></iframe>
         </v-card>
</v-dialog>
</v-container>

</div>



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
.box{
  position: relative;
  border-radius: 20px;
  display: flex;
  transition: 250ms ;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: black;
  overflow: hidden;
}
.box::after{
  content:'';
  position: absolute;
  background: black;
  inset:8px;
  border-radius: 16px;
}
.box::before{
  content: '';
  position: absolute;
  width: 50%;
  height: 160%;
  border-radius: 20px;
  background: linear-gradient(#12F3A6,orange);
  animation: rotate 4s linear infinite;
}
@keyframes rotate{
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
</style>