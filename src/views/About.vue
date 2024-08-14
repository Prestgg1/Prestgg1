<template>
    <div class="contact yansayfa w-100 d-flex flex-column overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-maincolor pa-4 d-flex justify-space-between">
    <h1 class="text-white text-h4 head shadow-black animate__animated animate__fadeIn">About Me</h1>
    <v-icon color="white" size="xxx-large" icon="mdi-information"></v-icon>
        </div>
    </div>

    <div class="about w-100 d-flex flex-column justify-center align-center animate__animated animate__fadeIn">
        <h1 class="font-serif text-h4 font-weight-bold mt-2 text-maincolor">Front end Developer</h1>
        <div class="content d-flex flex-column flex-md-row justify-center align-center ga-2 pa-5">
            <p class="max-w-4xl text-h6 text-md-h5 text-white"> As a passionate and driven {{new Date().getFullYear()-2005}}-year-old, I am eager to embark on a career in this field, despite my lack of professional experience. My enthusiasm for technology started at a young age, leading me to develop strong skills in efficiently using various software and tools. I thrive in collaborative environments, enjoy socializing, and believe that my ability to communicate effectively will allow me to seamlessly integrate into any team. I am excited to contribute and prove my abilities in a professional setting.</p>
            <v-btn class="cvbtn"  variant="outlined" href="../MyCv.pdf" download >Download CV</v-btn>
        </div>
        <table class="mt-2 text-white">
            <caption class="font-serif text-h5 text-maincolor font-weight-bold ">Personal Information</caption>
            <tr>
                <th>Name:</th>
                <td>Səbuhi Sariyev</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>{{new Date().getFullYear()-2005}}</td>
            </tr>
            <tr>
                <th>Adress:</th>
                <td>Azerbaijan Baku Binaqadi</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>prestgg56@gmail.com</td>
            </tr>
            <tr>
                <th>Contact No:</th>
                <td>+994 51 407 05 92</td>
            </tr>
        </table>
    </div>
</template>
<script setup>
</script>
