<template>
    <div class="loginsignin">
        <header class="loginsignin__header">
            <div class="container row">
                <router-link to='/'>
                    <img src="../../assets/icons/logo.svg" alt="">
                </router-link>
            </div>
        </header>
        <div class="loginsignin__middle"></div>
        <footer class="loginsignin__footer"></footer>
    </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
    @import '../../scss/VARIABLES';
    .loginsignin {
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
        }
        .loginsignin__footer {
            background: $color-second;
            height: 10rem;
        }
    }
</style>


