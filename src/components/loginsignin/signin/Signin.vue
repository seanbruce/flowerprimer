<template>
    <div class="signin">
        <component :is="activePage" :user="user"></component>
    </div>
</template>




<script>
import SigninPage1 from './SigninPage1.vue'
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
        appSigninPage1: SigninPage1
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


