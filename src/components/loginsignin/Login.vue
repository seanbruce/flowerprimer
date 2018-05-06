<template>
    <div class="login">
        <div class="login__top">
            <div class="login__top__group login__top__group--email">
                <p><span>邮箱</span></p>
                <input type="email"  placeholder="example@email.com">
            </div>
            <div class="login__top__group login__top__group--password">
                <p><span>密码</span></p>
                <input type="password" name="" id="">
            </div>
            <button>登陆</button>
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
                p {
                    height: auto;
                    span {
                        display: inline-block;
                        height: 0.95rem;
                        line-height: 0.95rem;
                        font: {
                            size: 0.9rem;
                            // weight: bold;
                        }
                    }
                }
                width: 18rem;
                input {
                    margin-top: 0.35rem;
                    display: block;
                    width: 100%;
                    height: 2.5rem;
                    border: solid 0.1rem lighten($color-primary, 60%);
                    border-radius: 0.5rem;
                    font-size: 0.9rem;
                    padding: {
                        left: 1rem;
                        right: 1rem;
                    }
                    transition: all 300ms ease-out;
                    &:focus {
                        border-color: $color-primary;
                    }
                }
                &.login__top__group--email {
                    input {
                        letter-spacing: 0.2rem;
                    }
                }
                &.login__top__group--password {
                    margin-top: 1.75rem;
                    input {
                        letter-spacing: 0.5rem;
                    }
                }
            }
            button {
                margin: 1.9rem auto 1.025rem auto;
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
                margin: 1.025rem auto 0 auto;
            }
        }
    }
    button {
        cursor: pointer;
        display: block;
        width: 7.4rem;
        height: 2.4rem;
        border: solid 0.1rem $color-primary;
        border-radius: 1.2rem;
        background-color: #fff;
        font-size: 0.8rem;
        font-weight: bold;
        color: $color-primary;
        transition: all 200ms ease-out;
        &:hover {
            color: #FFF;
            background-color: $color-primary;
        }
    }
</style>


