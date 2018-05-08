<template>
    <div class="login">
        <div class="login__top">
            <div class="login__top__group login__top__group--email">
                <p><span>邮箱</span></p>
                <input @input="formErrors.length=0" type="email" v-model="loginInfo.email" placeholder="example@email.com">
            </div>
            <div class="login__top__group login__top__group--password">
                <p><span>密码</span></p>
                <input type="password" v-model="loginInfo.password" name="" id="">
            </div>
            <button @click.prevent="login">登陆</button>
            <transition 
                name="test"
                enter-active-class="animated fadeInRight"
                leave-active-class="animated fadeOutRight">
                <p class="warning" v-if="formErrors.length">
                    <span>您输入的信息有误</span>
                    <ul>
                        <li v-for="(error, index) of formErrors" :key="index" >{{ error}}</li>
                    </ul>
                </p>
            </transition>
        </div>
        <div class="login__bottom">
            <span class="prompt">还没有账号？注册一下</span>
            <button @click.prevent="navigateToSignin">注册</button>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            loginInfo: {
                email: null,
                password: null,
            },
            formErrors: [],
        }
    },
    methods: {
        login() {
            if(this.checkForm()) { 
            } else {
            }
        },
        navigateToSignin() {
            this.$router.push('/loginsignin/signin');
        },
        checkForm() {
            this.formErrors = []
            if(!this.loginInfo.email) {
                this.formErrors.push('请输入账号')
            } else if(!this.validEmail(this.loginInfo.email)) {
                this.formErrors.push('账号必须是邮箱地址的形式')
            }
            if(!this.loginInfo.password) this.formErrors.push('密码不能为空')
            if(!this.formErrors.length) {
                return true
            } else {
                return false
            }
        },
        validEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
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
            position: relative;
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
            .warning {
                position: absolute;
                top: 3.5rem;
                right: -3rem;
                border: solid 0.05rem $color-second;
                border-radius: 0.4rem;
                padding: 0.2rem;
                span {
                    color: $color-second;
                    border-bottom: solid 0.05rem $color-second;
                    padding-bottom: 0.5rem;
                    font: {
                        weight: bold;
                    }
                }
                ul {
                    padding: 0.5rem 0;
                    li {
                        font: {
                            size: 0.7rem;
                        }
                        color: #B4B4B4;
                        text-align: center;
                    }
                }
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


