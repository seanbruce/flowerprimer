<template>
    <header class="header">
        <div class="row header__container">
            <div class="header__container__items--left">
                <router-link to='/'>
                    <img src="../../assets/icons/logo.png" alt="">
                </router-link>
            </div>
            <div class="header__container__items--right">
                <router-link to="/cart"><div class="position"><img :src="icons.cart" class="cart"/></div></router-link>
                <a><div class="position"><img :src="icons.notification" class="notification"/></div></a>
                <router-link to="/loginsignin"><div class="position"><img :src="icons.account" class="account"/></div></router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            icons: {
                cart: 'src/assets/icons/cart.png',
                notification: 'src/assets/icons/notification.png',
                account: 'src/assets/icons/account.png'
            }
        }
    }
  
}
</script>


<style lang="scss" scoped>
    @import '../../scss/VARIABLES';

    @keyframes moveUp {
        0% {
            
        }
        100% {
            transform: translateY(-0.15rem);
            box-shadow: 0 10px 10px rgba(0,0,0, .2);
        }
    }
    
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .header {
        height: 5.6rem;
        .header__container {
            justify-content: space-between;
            align-items: center;
            height: 4rem;
            border: {
                bottom: solid 1px lighten($color-primary, 80%);
            }
            .header__container__items--left {
                img {
                    width: 13.05rem;
                    height: 2.85rem;
                }
            }
            .header__container__items--right {
                a {
                    display: inline-block;
                    height: 1.4rem;
                    margin: {
                        right: 1.5rem;
                    }
                    cursor: pointer;
                    .position {
                        position: relative;
                        width: 1.5rem;
                        height: 1.5rem;
                        img {
                            text-align: center;
                            z-index: 10;
                            height: 1.4rem;
                            background-color: transparent;
                        }
                    }
                }
            }
        }
    }
</style>


