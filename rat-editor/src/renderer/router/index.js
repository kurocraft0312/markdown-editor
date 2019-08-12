import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },

    // {
    //   path: '/next',
    //   name: 'next-page',
    //   component: require('@/components/Next').default
    // },

    {
      path: '/',
      name: 'markdown-page',
      component: require('@/components/MarkdownPage').default
    },

    {
      path: '*',
      redirect: '/'
    }
  ]
})
