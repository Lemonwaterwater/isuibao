import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/index/Home.vue'),
    meta: {requiHome: false}
  },
  {
    path: '/',
    name: 'guide',
    component: () => import('../components/guide/index_guide.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../components/activity/activity_page.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/test/test1.vue')
  },
  {
    path: '/cho',
    name: 'cho',
    component: () => import('../components/gwuche/shoppingCart.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach( (to,from,next) => {
  var gg = localStorage.getItem('lastnameX');
  if(gg){

    if(to.path == '/'){
       next('/home');
    }else{
      next();
    }

  }else{
    next();
  }
} )
export default router
