<template>
    <div class="loginsignin">
        <header class="loginsignin__header">
            <div class="container row">
                <router-link to='/'>
                    <img src="../../assets/icons/logo.svg" alt="">
                </router-link>
            </div>
        </header>
        <div class="loginsignin__middle row">
            <div class="loginsignin__middle__center">
                <transition
                    mode="out-in"
                    enter-active-class="animated fadeInRight"
                    leave-active-class="animated fadeOutLeft">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <footer class="loginsignin__footer"></footer>
    </div>
</template>

<script>
import Login from './Login.vue'
import Signin from './signin/Signin.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        appLogin: Login,
        appSignin: Signin
    },
    created() {
        console.log('LoginSignin created');
    }
}
</script>


<style lang="scss" scoped>
    @import '../../scss/VARIABLES';
    .loginsignin {
        background-color: #d5d5d5;
        .loginsignin__header {
            background-color: $color-second;
            height: 4rem;
            .container {
                height: 100%;
                justify-content: flex-start;
                align-items: center;
                img {
                    width: 13.05rem;
                    height: 2.85rem;
                    fill: #FFF;
                }
            }
        }
        .loginsignin__middle {
            height: 40rem;
            justify-content: center;
            align-items: center;
            .loginsignin__middle__center {
            }
        }
        .loginsignin__footer {
            background: $color-second;
            height: 10rem;
        }
    }
</style>


