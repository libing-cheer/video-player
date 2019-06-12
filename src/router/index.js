import Vue from 'vue'
import Router from 'vue-router'
import VideoPlayer from '@/components/VideoPlayer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VideoPlayer',
      component: VideoPlayer
    }
  ]
})
