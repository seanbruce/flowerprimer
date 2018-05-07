<template>
    <div class="page2">
      <div class="page2__navigationBar row-center">
        <div class="page2__navigationBar__container">
          <span class="dot progress"></span>
          <span class="dot step3"></span>
        </div>
      </div>
      <div class="page2__content">
        <div class="page2__content__group--phoneNumber">
          <span>手机号码：</span>
          <input type="number" name="" id="">
          <button>发送验证码</button>
        </div>
        <dvi class="page2__content__group--prompt">
          <p><span>请输入手机短信接受到验证码</span></p>
        </dvi>
        <div class="page2__content__group--authCode">
          <span>验证码：</span>
          <input type="number" name="" id="">
          <input type="number" name="" id="">
          <input type="number" name="" id="">
          <input type="number" name="" id="">
        </div>
        <div class="page2__content__group--bottom">
          <button @click="next">提交</button>
        </div>
      </div>
    </div>
</template>



<script>
export default {
  methods: {
    next() {
      this.$emit('changePage', 'appSigninPage3')
    }
  }
}
</script>

<style lang="scss" scoped>
    @import '../../../scss/VARIABLES';
    .page2__navigationBar {
      height: 5.475rem;
      .page2__navigationBar__container {
        width: 18rem;
        height: 0.5rem;
        border-radius: 0.25rem;
        background-color: rgba($color-primary, .15);
        position: relative;
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 66.6666%;
          height: 100%;
          background-color: $color-second;
          border-radius: 0.25rem 0 0 0.25rem;
          z-index: 1;
        }
        .dot {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          display: block;
          z-index: 2;
          border-radius: 50%;
          background-color: $color-second;
        }
        .progress {
          left: 66.6666%;
          width: 0.8rem;
          height: 0.8rem;
          border: solid 2px #FFF;        
        }
        .step3 {
          left: 100%;
          width: 0.2rem;
          height: 0.2rem;
          transform: translate(-200%, -50%);
        }
      }
    }
    .page2__content {
      width: 19.5rem;
      height: 19.675rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .page2__content__group--phoneNumber {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          vertical-align: center;
          font: {
            size: 0.95rem;
            weight: bold;                   
          }
        }
        input {
          padding: {
            left: 0.8rem;
          }
          font: {
            size: 0.8rem;
            weight: bold;
          }
          letter-spacing: 0.3rem;
          width: 9.7rem;
          height: 2rem;
        }
        button {
          width: 4.5105rem;
          height: 2.023rem;
          font: {
            size: 0.5rem;
          }
        }
      }
      .page2__content__group--prompt {
        p {
          margin-top: 2.3rem;
          text-align: center;
          span {
            font: {
              size : 0.7rem;
            }
            color: #949494;
          }
        }
      }
      .page2__content__group--authCode {
        margin-top: 0.45rem;
        span {
          vertical-align: center;
          font: {
            size: 0.95rem;
            weight: bold;                   
          }
        }
        input {
          color: transparent;
          text-shadow: 0 0 0 $color-primary;
          font: {
            size: 1.25rem;
            weight: bold;
          }
          width: 2.8rem;
          height: 2.65rem;
          padding: {
            left:1rem;
          }
          margin-left: 0.5rem;
          &:first-of-type {
            margin-left: 1.25rem;
          }
        }
      }
      .page2__content__group--bottom {
        margin-top: 2.65rem;
        button {
          display: block;
          margin: 0 auto;
        }
      }
    }
    
    button {
        cursor: pointer;
        display: inline-block;
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

    input {
      border-radius: 0.2rem;
      border: solid 1px $color-primary;
      &[type=number]::-webkit-inner-spin-button,
      &[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin:0;
      }
    }
</style>


