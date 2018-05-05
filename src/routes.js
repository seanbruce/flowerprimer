import Home from './components/home/Home.vue'
import LoginSignin from './components/loginsignin/LoginSignin.vue'
import Cart from './components/cart/Cart.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/loginsignin', component: LoginSignin},
    { path: '/cart', component: Cart},
]