<template>
  <div class="page1">
    <div class="page1__navigationBar row-center">
      <div class="page1__navigationBar__container">
        <span class="dot progress"></span>
        <span class="dot step2"></span>
        <span class="dot step3"></span>
      </div>
    </div>
    <div class="page1__formContent">
      <div class="page1__formContent__leftPart">
        <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--name">
          <p><span>姓名</span></p>
          <input type="text">
        </div>
        <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--email">
          <p><span>邮箱</span></p>
          <input type="email">
        </div>
        <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--password">
          <p><span>密码</span></p>
          <input type="password">
        </div>
        <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--confirmPassword">
          <p><span>确认密码</span></p>
          <input type="password">
        </div>
      </div>
      <div class="page1__formContent__rightPart">
        <button @click="next">下一步</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['user'],
  methods: {
    next() {
      this.$emit('changePage', 'appSigninPage2')
    }
  }
}
</script>



<style lang="scss" scoped>
    @import '../../../scss/VARIABLES';
    .page1__navigationBar {
      height: 5.475rem;
      .page1__navigationBar__container {
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
          width: 33.3333%;
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
          left: 33.333%;
          width: 0.8rem;
          height: 0.8rem;
          border: solid 2px #FFF;        
        }
        .step2 {
          left: 66.666%;
          width: 0.2rem;
          height: 0.2rem;


        }
        .step3 {
          left: 100%;
          width: 0.2rem;
          height: 0.2rem;
          transform: translate(-200%, -50%);
        }
      }
    }
    .page1__formContent {
      display: flex;
      height: 19.675rem;
      width: 37.6rem;
      margin: 0 auto;
      .page1__formContent__leftPart {
        width: 25.375rem;
        height: 17.65rem;
        border-right: solid 1px rgba($color-primary, .5);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        .page1__formContent__leftPart__group {
          margin-top: 0.5rem;
          &.page1__formContent__leftPart__group--email {
            input {
              letter-spacing: 0.2rem;
            }
          }
          &.page1__formContent__leftPart__group--name {
            margin-top: 0;
          }
        }
      }
      .page1__formContent__rightPart {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      &::after, &::before {
        content: '';
        display: table;
      }
      &::after {
        clear: both;
      }
    }

    input {
      width: 18rem;
      height: 2.5rem;
      border-radius: 0.25rem;
      letter-spacing: 0.5rem;
      padding: {
        left: 1rem;
        right: 1rem;
      }
      font: {
        size: 1rem;
      }
      border: solid 0.1rem lighten($color-primary, 60%);
      &:focus {
          border-color: $color-primary;
      }
    }
    button {
        transform: translateY(-50%);
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
