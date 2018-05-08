<template>
    <div class="signin">
        <transition 
            name="component-fade" 
            mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut">
            <component :is="activePage" :user="user" @changePage="changeActivePage"></component>
        </transition>
    </div>
</template>




<script>
import SigninPage1 from './SigninPage1.vue'
import SigninPage2 from './SigninPage2.vue'
import SigninPage3 from './SigninPage3.vue'
export default {
    data() {
        return {
            activePage: 'appSigninPage1',
            user: {
                userName: '',
                userEmail: '',
                userPassword: '',
            }
        }
    },
    components: {
        appSigninPage1: SigninPage1,
        appSigninPage2: SigninPage2,
        appSigninPage3: SigninPage3,
    },
    methods: {
        changeActivePage(page) {
            this.activePage = page
        }
    }
}
</script>



<style lang="scss" scoped>
    @import '../../../scss/VARIABLES';
    .signin {
        background-color: #fff;
        width: 50rem;
        height: 25.15rem;
    }
</style>


