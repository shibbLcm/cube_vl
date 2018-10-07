import Vue from 'vue'
import Router from 'vue-router'

import Job from "./page/Job.vue"
import Interview from "./page/Interview.vue"
import Message from "./page/Message.vue"
import Personal from "./page/Personal.vue"
import Login from "./page/Login.vue"
import Detail from "./page/Detail.vue"
import Layout from "./components/Layout.vue"
import LayoutBase from "./components/LayoutBase.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/layout",
      name:"layout",
      component:Layout,
      children:[
        {
          path:"job",
          name:"job",
          component:Job
        },
        {
          path:"interview",
          name:"interview",
          component:Interview
        },
        {
          path:"message",
          name:"message",
          component:Message
        },
        {
          path:"personal",
          name:"personal",
          component:Personal
        },
      ]
    },
    {
      path:"/layoutBase",
      name:"layoutBase",
      component:LayoutBase,
      children:[
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail,
        },
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
      ]
    },
    {
      path:"/",
      redirect:"/layout/job"
    }
  ]
})
