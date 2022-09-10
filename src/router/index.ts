import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    component:()=> import('../components/EnrollForm.vue')
  },
  {
    path:'/welcome',
    component:() => import('../components/Welcome.vue')
  }
];
const router = createRouter({
  history:createWebHashHistory(),
  routes
});
export default router;