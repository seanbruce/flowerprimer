<template>
    <div class="login">
        <div class="login__top">
            <div class="login__top__group login__top__group--email">
                <p><span>邮箱</span></p>
                <input type="email" name="" id="">
            </div>
            <div class="login__top__group login__top__group--password">
                <p><span>密码</span></p>
                <input type="password" name="" id="">
            </div>
            <button></button>
        </div>
        <div class="login__bottom">
            <span class="prompt">还没有账号？注册一下</span>
            <button @click="navigateToSignin">注册</button>
        </div>
    </div>
</template>


<script>
export default {
  methods: {
      navigateToSignin() {
          this.$router.push('/loginsignin/signin');
      }
  },
  created() {
      console.log('Login created')
  }
}
</script>


<style lang="scss" scoped>
    @import '../../scss/VARIABLES';
    .login {
        border: solid 1px #EEE;
        background-color: #fff;
        width: 38.5rem;
        height: 25.15rem;
        .login__top {
            margin: 0 auto;
            width: 30.35rem;
            height: 17.475rem;
            border-bottom: solid 1px rgba($color-primary, .15);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            .login__top__group {
                width: 18rem;
                input {
                    display: block;
                    width: 100%;
                    height: 2.5rem;
                    border: solid 1px $color-primary;
                    border-radius: 0.5rem;
                }
            }
            .login__top__email {
            }
            .login__top__password {
            }
            button {
                cursor: pointer;
                display: block;
                margin: 0 auto 1.025rem auto;
                width: 7.4rem;
                height: 2.4rem;
                border: solid 1px $color-primary;
                border-radius: 1.2rem;
                background-color: #fff;
                font-size: 0.8rem;
                color: $color-primary;
            }
        }
        .login__bottom {
            text-align: center;
            margin: 0 auto;
            width: 30.35rem;
            height: 7.675rem;
            .prompt {
                display: block;
                margin: 1.025rem auto 0 auto;
                color: #B4B4B4;
                line-height: 0.7rem;
                font: {
                    size: 0.6rem;
                }
            }
            button {
                cursor: pointer;
                display: block;
                margin: 1.025rem auto 0 auto;
                width: 7.4rem;
                height: 2.4rem;
                border: solid 1px $color-primary;
                border-radius: 1.2rem;
                background-color: #fff;
                font-size: 0.8rem;
                color: $color-primary;
            }
        }
    }
</style>


