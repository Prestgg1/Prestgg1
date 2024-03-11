import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Skills from "../views/Skills.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/about',
            name:'about',

            component: About
        },
        {
            path:'/projects',
            name:'projects',

            component: () => import("../views/Projects.vue")
        },
        {
            path:'/skills',
            name:'skills',

            component: Skills
        },
        {
            path:'/contact',
            name:'Contact',

            component: Contact
        }
    ]
});
export default router;