import Vue from 'vue'
import Router from 'vue-router'

import Job from "./page/Job.vue"
import Interview from "./page/Interview.vue"
import Message from "./page/Message.vue"
import Personal from "./page/Personal.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/job',
      name: 'job',
      component: Job
    },
    {
      path: '/interview',
      name: 'interview',
      component: Interview
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path:"/",
      redirect:"/job"
    }
  ]
})
