import Vue from 'vue'
import Router from 'vue-router'


import Login from "@/components/Login"
import Usermanage from "@/components/User/Usermanage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/user_manage",
      name:"Usermanage",
      component: Usermanage,meta:{shownav:true}
    },
    {
      path:"/",
      name:"Login",
      component: Login,meta:{shownav:false}
    }
  ]
})
