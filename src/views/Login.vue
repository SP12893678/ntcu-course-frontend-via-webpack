<template>
  <div class="panel min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white px-4 py-4 rounded-lg box-shadow">
      <div class="flex items-center justify-center">
        <img
          class=" px-2 h-12"
          src="../assets/images/education.svg"
          alt="Workflow"
        >
        <h2 class=" text-center text-3xl font-extrabold text-gray-900">
          會員登入
        </h2>
      </div>
      <form
        name="loginForm"
        class="mt-8 space-y-6"
        @submit.prevent
      >
        <input
          type="hidden"
          name="remember"
          value="true"
        >
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label
              for="email-address"
              class="sr-only"
            >信箱 *</label>
            <input
              id="email-address"
              v-model="user.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="信箱 *"
            >
          </div>
          <div
            v-if="!$v.user.email.required"
            class="error"
          >
            必填
          </div>
          <div
            v-if="!$v.user.email.email"
            class="error"
          >
            須符合Email格式
          </div>
          <div>
            <label
              for="password"
              class="sr-only"
            >密碼 *</label>
            <input
              id="password"
              v-model="user.password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="密碼 *"
            >
          </div>
          <div
            v-if="!$v.user.password.required"
            class="error"
          >
            必填
          </div>
          <div
            v-if="!$v.user.password.minLength"
            class="error"
          >
            密碼至少{{ $v.user.password.$params.minLength.min }}個長度
          </div>
          <div
            v-if="!$v.user.password.maxLength"
            class="error"
          >
            密碼最多{{ $v.user.password.$params.maxLength.max }}個長度
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            >
            <label
              for="remember_me"
              class="ml-2 block text-sm text-gray-900"
            >
              保持登入
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-blue-600 hover:text-blue-500"
            >
              忘記密碼?
            </a>
          </div>
        </div>

        <div>
          <button
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            @click="submitLogin"
          >
            登入
          </button>
        </div>

        <div>
          <hr class="divide-y-2">
          <router-link
            to="/register"
            class="text-gray-500 hover:text-gray-700"
          >
            <h4 class="mt-6 text-center font-extrabold">
              尚未成為會員?
            </h4>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, between, email } from 'vuelidate/lib/validators'

export default {
    data () {
        return {
            name: '',
            user: {
                tt: '',
                email: '',
                password: ''
            },
            submit: {
                text: '',
                disable: false
            }
        }
    },
    validations: {
        user: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(16)
            }
        }
    },
    methods: {
        submitLogin () {
            if (this.$v.$invalid) return
            this.submit.disable = true
            this.$store.dispatch('http/post', {
                api: 'api/auth/login',
                user: {
                    email: this.user.email,
                    password: btoa(this.user.password)
                }
            })
                .then((data) => {
                    if (data == false) return
                    // 若保持登入...將loginToken存入localstorage
                    localStorage.setItem('loginToken', data.loginToken)
                    // 彈出登入成功提示框 按鈕->轉址到首頁
                    const goToIndexPage = () => {
                        this.$router.push({ path: '/' })
                    }
                    this.$store.commit('dialogBox', {
                        dialog: true,
                        option: {
                            dialog: { title: '登入成功', message: '按下確定前往首頁', btnConfirm: { event: goToIndexPage } }
                        }
                    }, { root: true })
                    this.submit.disable = false
                })
        }
    }
}
</script>

<style  scoped>

.panel{
    background: linear-gradient(to right, #f5f5f5 0%, rgb(0, 49, 122) 100%);
    padding: 12px;
}

.box-shadow{
  box-shadow: 0px 14px 35px -9px rgb(0 0 0 / 50%);
}

.error{
  @apply text-xs text-red-600 py-2;
}
</style>
