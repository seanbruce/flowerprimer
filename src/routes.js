import Home from './components/home/Home.vue'
import LoginSignin from './components/loginsignin/LoginSignin.vue'
import Login from './components/loginsignin/Login.vue'
import Signin from './components/loginsignin/signin/Signin.vue'
import Cart from './components/cart/Cart.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/loginsignin', component: LoginSignin, children: [
        {path: 'login', component: Login},
        {path: 'signin', component: Signin},
    ]},
    { path: '/cart', component: Cart},
]