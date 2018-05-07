<template>
    <div class="page3">
        <div class="page3__content">
            <div class="page3__content__top">
                <img src="../../../assets/icons/success.png" alt="">
                <p><span>注册成功</span></p>
            </div>
            <div class="page3__content__bottom">
                <router-link to="/loginsignin/login" tag="button">返回</router-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @import '../../../scss/VARIABLES';
    .page3__content {
        width: 10.8rem;
        height: 25.15rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .page3__content__top {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          img {
            width: 2.8175rem;
            height: 4.094rem;
          }
          p {

            span {
              text-align: center;
              margin-right: -1.2rem;
              font: {
                size : 1.5rem;
              }
              letter-spacing: 1.2rem;
            }
          }
        }
        .page3__content__bottom {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          button {

          }
        }
    }

    button {
        cursor: pointer;
        display: block;
        width: 7.4rem;
        height: 2.4rem;
        border: solid 0.1rem $color-second;
        border-radius: 0.2rem;
        background-color: #fff;
        font-size: 0.8rem;
        font-weight: bold;
        color: $color-primary;
        transition: all 200ms ease-out;
        &:hover {
            color: #FFF;
            background-color: $color-second;
        }
    }
</style>
