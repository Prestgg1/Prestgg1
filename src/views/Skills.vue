<template>
        <div class="contact w-full flex flex-col overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-[#12F3A6] p-4 flex justify-between border-b-white  border-b-2 border-dashed ">
    <h1 class="text-white text-4xl font-serif head shadow-black head">Skills</h1>
    <v-icon color="white" class=" p-4" size="x-large" icon="mdi-anvil"></v-icon>
        </div>
    </div>
    <v-container class="text-white grid md:grid-cols-2 gap-2 items-center justify-center h-full">
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">HTML & CSS</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">JavaScript</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="50" height="20" color="yellow" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">React</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="30" height="20" color="red" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">VueJs</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">Bootstrap & TailwindCss</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">Scss</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="90" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    <div>
        <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">Git</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="50" height="20" color="yellow" ></v-progress-linear>
            </v-card-text>
        </v-card>
    </div>
    </v-container>
</template>