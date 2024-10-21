<script>
import Background from '../components/Background.vue'
export default {
  data(){
    return {
      name: '',
      email: '',
      description:'',
      emailrules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      namerules:[
        value => !!value || "Required",
        value => (value || '').length >= 5 || 'Minium 5 characters'
      ],
      desrules:[
      value => !!value || "Required",
        value => (value || '').length >= 20 || 'Minium 20 characters'
      ],
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
  methods:{
     async onformSubmit(){
      const { valid } = await this.$refs.form.validate()
      if(valid){
        this.formconfig.Subject = `${this.name} Adında Bir Adam Yazdi`
        this.formconfig.Body = `Email:${this.email} Messaji: ${this.description}`
        window.Email.send(this.formconfig).then(()=>alert('Your Message has been sent'))
      }
    }
  },
}
</script>
<template>
<div class="w-100 h-100 d-flex flex-column align-center">
  <!-- Burası SubHeader -->
  <div class="w-100 yansayfa d-flex flex-column overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-maincolor pa-4 d-flex justify-center">
    <h1 class="text-white text-h4 head shadow-black animate__animated animate__fadeIn">Contact Me</h1>
        </div>
    </div>
        <!-- Burası Content -->
    <div class="d-flex w-100 h-100 justify-center align-center">
      <v-form ref="form"  @submit.prevent="onformSubmit" class="pa-10 w-100 d-flex flex-column items-center ga-4 justify-center text-white">
        <v-text-field
  hide-details="auto"
  class="w-100"
  name="name"
  :rules="namerules"
  v-model="name"
  rounded="lg"
  required
  label="Name"
></v-text-field>
<v-text-field
  hide-details="auto"
  class="w-100 "
  rounded="lg"
  required
  name="email"
  :rules="emailrules"
  v-model="email"
  label="Email"
  
/>
<v-textarea
  hide-details="auto"
  name="message"
  validation-on="input"
  rounded="lg"
  :rules="desrules"
  class="w-100"
  v-model="description"
  clearable
  
  label="Description"
/>

<div class="d-flex justify-center"><v-btn type="submit" color="#12F3A6"  class="text-white font-extrabold"  >Submit</v-btn></div>
<!-- 
 -->

</v-form>

    </div>

        
  </div>


    
  
</template>
<style scoped>
.font-extrabold{
  font-weight: 800;
  letter-spacing: 3px;
  text-shadow: 3px 2px 5px black;
}
</style>