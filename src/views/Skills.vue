<template>
    <div class="w-100 yansayfa d-flex flex-column overflow-hidden bg-black animate__bounceInLeft animate__animated">
        <div class="bg-maincolor pa-4 d-flex justify-space-between">
    <h1 class="text-white text-h4 head shadow-black animate__animated animate__fadeIn">Skills</h1>
    <v-icon color="white" class="pa-4" size="x-large" icon="mdi-anvil"></v-icon>
        </div>
    </div>
    <v-container class="text-white animate__animated animate__fadeInUp ">
            <v-row>
                <v-col cols="12" sm="6" md="4" lg="6">
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">HTML & CSS</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="6">
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">JavaScript</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="50" height="20" color="yellow" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="6">
                   
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">React</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
              <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">NextJs</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="60" height="20" color="yeloow" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="6">
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">VueJs</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="6">
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">Bootstrap & TailwindCss</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="80" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="6">
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">Scss</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="90" height="20" color="green" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="6">
                    <v-card class="mx-auto vcard" variant="outlined">
            <v-card-title>
                <span class="headline">Git</span>
            </v-card-title>
            <v-card-text>
                <v-progress-linear class="text-white" model-value="50"  height="20" color="yellow" ></v-progress-linear>
            </v-card-text>
        </v-card>
                </v-col>
            </v-row>
        </v-container>
<!--         
    </div>
    <div>

    </div>
    <div>
        
    </div>
    <div>

    </div>
    <div>

    </div>
    <div>

    </div>
    <div>

    </div> -->
</template>
<style scoped>

.vcard{
    border: 2px solid #12F3A6;
    border-radius: 10px;
    padding: 2px;
 }

</style>
<script setup>
</script>
