import Vue from 'vue'
import Router from 'vue-router'

import Job from "./page/Job.vue"
import Interview from "./page/Interview.vue"
import Message from "./page/Message.vue"
import Personal from "./page/Personal.vue"
import Login from "./page/Login.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/job',
      name: 'job',
      component: Job,
        meta:{
          showFooter:true
        }
    },
    {
      path: '/interview',
      name: 'interview',
      component: Interview,
        meta:{
            showFooter:true
        }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
        meta:{
            showFooter:true
        }
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
        meta:{
            showFooter:true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
      path:"/",
      redirect:"/job"
    }
  ]
})
