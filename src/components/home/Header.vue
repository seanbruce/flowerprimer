<template>
    <header class="header container">
        <div class="row header-container">
            <div class="items-left">
                <router-link to='/'>
                    <img src="../../assets/icons/logo.png" alt="">
                </router-link>
            </div>
            <div class="items-right">
                <router-link to="/cart"><img :src="icons.cart" class="cart"/></router-link>
                <a><img :src="icons.notification" class="notification"/></a>
                <router-link to="/loginsignin"><img :src="icons.account" class="account"/></router-link>
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
    .header {
        height: 112px;
        .header-container {
            justify-content: space-between;
            align-items: center;
            height: 80px;
            border: {
                bottom: solid 1px lighten($color-primary, 80%);
            }
            .items-left {
                img {
                    width: 261px;
                    height: 57px;
                }
            }
            .items-right {
                a {
                    cursor: pointer;
                    img {
                        transition: all 250ms ease-out;
                        height: 28px;
                        margin: {
                            right: 30px;
                        }
                        padding: 5px;
                        &:hover {
                            outline: solid 1px $color-primary;
                        }
                    }
                }
            }
        }
    }
</style>


