<template>
    <div class="contact w-full flex flex-col overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-[#12F3A6] p-4 flex justify-between border-b-white  border-b-2 border-dashed ">
    <h1 class="text-white text-4xl font-serif head shadow-black">My About</h1>
    <v-icon color="white" class="border-2 rounded-full p-4" size="x-large" icon="mdi-exclamation"></v-icon>
        </div>
    </div>


    <div class="about w-full md:h-full flex flex-col justify-center items-center ">
        <h1 class="font-serif text-white  text-2xl font-bold mt-2">Front end Developer</h1>
        <div class="content flex justify-center items-center gap-2 p-2">
            <p class="text-sm md:text-xl max-w-4xl text-white">I am very enthusiastic and excited to work as a young person who has never worked in this field before. As a 18-year-old young man, I love using computers from a young age. I know how to use the programs on the computer faster and more efficiently. I like socialising and establishing a healthy communication. In this way, I believe that I will get
            along very well with my teammates and I want to prove it.</p>
            <v-btn class="cvbtn" variant="outlined" href="../MyCv.pdf" download >Download CV</v-btn>
        </div>
        <table class="mt-2 text-white">
            <caption class="font-serif text-2xl font-bold">Personal Information</caption>
            <tr>
                <th>Name:</th>
                <td>Səbuhi Sariyev</td>
            </tr>
            <tr>
                <th>Age:</th>
                <td>18</td>
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
<style scoped>
.box{
    height: 500px;
    width: 500px;
    border-radius: 50%;
    border: 2px solid white;

}
.head{
    text-shadow: 2px 2px 2px #000;
}
.cvbtn{
    color: #12F3A6;
    border: 2px solid #12F3A6;
}
.cvbtn:hover{
    background-color: #12F3A6;
    color: white;
}
</style>