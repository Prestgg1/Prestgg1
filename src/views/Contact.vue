<script>
import { useVuelidate } from '@vuelidate/core'
import { required,minLength,helpers } from '@vuelidate/validators'
import Background from '../components/Background.vue'
export default {
  data(){
    return {
      name: '',
      email: '',
      description:'',
      formconfig:{
          SecureToken:'9b0ca10e-8038-4731-9ad9-63907a38a106',
          To : 'prestgg56@gmail.com',
          From : "prestgg56@gmail.com",
          Subject : "This is the subject",
          Body : "And this is the body"
      }
    }
  },
  components: {
    Background
  },
  validations: {
    name: { required,minLength:minLength(5) },
    email: { required:helpers.withMessage('Ya bu Alan Zorunlu',required) },
    description: { required },
  },
  methods:{
     onformSubmit(){
      this.v$.$touch()
      if(this.v$.$errors.length==0){
        this.formconfig.Subject = `${this.v$.name.$model} Adında Bir Adam Yazdi`
        this.formconfig.Body = `Email:${this.v$.email.$model} Messaji: ${this.v$.description.$model}`
        window.Email.send(this.formconfig).then((event)=>alert(event))
      }
    }
  },
  setup: () => ({ v$: useVuelidate() })
}
</script>
<template>
    <div class="contact w-full h-full flex flex-col overflow-hidden bg-black">
        <div class="bg-[#12F3A6] p-4 flex justify-between animate__bounceInLeft animate__animated border-b-white border-b-2 border-dashed ">
    <h1 class="text-white text-4xl font-serif">Contact Me</h1>
    <v-icon color="white" class="border-2 rounded-full p-4" size="x-large" icon="mdi-account"></v-icon>
        </div>
        <div class="flex flex-col w-full justify-center items-center h-full">
<form ref="form" @submit.prevent="onformSubmit" class="p-10 w-full flex flex-col items-center gap-4 justify-center text-white">

<v-text-field
  hide-details="auto"
  class="w-full"
  name="name"
  :error="v$.name.$dirty && v$.name.$invalid"
  :error-messages="(v$.name.$dirty && v$.name.$invalid)? v$.name.$errors[0].$message : ''"
  v-model="v$.name.$model"
  label="Name"
  @blur="v$.name.$touch"
>
</v-text-field>

<v-text-field
  hide-details="auto"
  class="w-full"
  name="email"
  :error="v$.email.$dirty && v$.email.$invalid"
  :error-messages="(v$.email.$dirty && v$.email.$invalid)? v$.email.$errors[0].$message : ''"
  v-model="v$.email.$model"
  label="Email"
  @blur="v$.email.$touch"
>
</v-text-field>
<v-textarea
  hide-details="auto"
  name="message"
  class="w-full"
  :error="v$.description.$dirty && v$.description.$invalid"
  :error-messages="(v$.description.$dirty && v$.description.$invalid)? v$.description.$errors[0].$message : ''"
  v-model="v$.description.$model"
  label="Description"
  @blur="v$.description.$touch"
>
</v-textarea>
<v-btn type="submit" class="bana" variant="outlined" :disabled="v$.$error">Submit</v-btn>
</form>
        </div>
        
    </div>
  
</template>