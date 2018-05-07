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
            <input v-model="registerInfo.userName" type="text">
          </div>
          <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--email">
            <p><span>邮箱</span></p>
            <input v-model="registerInfo.userEmail" type="email">
          </div>
          <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--password">
            <p><span>密码</span></p>
            <input v-model="registerInfo.userPassword" type="password">
          </div>
          <div class="page1__formContent__leftPart__group page1__formContent__leftPart__group--confirmPassword">
            <p><span>确认密码</span></p>
            <input v-model="registerInfo.userConfirmPassword" type="password">
          </div>
        </div>
        <div class="page1__formContent__rightPart">
            <p class="warning" v-if="errors.length">
                <span>您输入的信息有误</span>
                <ul>
                    <li v-for="(error, index) of errors" :key="index" >{{ error}}</li>
                </ul>
            </p>
          <button @click="next">下一步</button>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
        registerInfo: {
          userName: null,
          userEmail: null,
          userPassword: null,
          userConfirmPassword: null,
        },
        errors: [],
    }
  },
  props: ['user'],
  methods: {
    next() {
      if(this.validate()) this.$emit('changePage', 'appSigninPage2')
    },
    validate() {
        this.errors = [];
        if(!this.registerInfo.userName) this.errors.push('用户名不能为空');
        if(!this.registerInfo.userEmail) {
          this.errors.push('邮箱不能为空')
        } else if(!this.validateEmail(this.registerInfo.userEmail)) {
          this.errors.push('邮箱的格式不正确')
        }
        if(!this.registerInfo.userPassword) {
          this.errors.push('密码不能为空')
        } else if(!this.validatePassword(this.registerInfo.userPassword)) {
          this.errors.push('密码不符合规范')
        } else if(this.registerInfo.userConfirmPassword !== this.registerInfo.userConfirmPassword) {
          this.errors.push('两次输入的密码不一致')
        }
        if(!this.errors.length) return true
    },
    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validatePassword(password) {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
      return re.test(password)
    }
  },
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
        position: relative;
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .warning {
          position: absolute;
          border: solid 0.05rem $color-second;
          border-radius: 0.4rem;
          padding: 0.2rem;
          top: 0;
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
