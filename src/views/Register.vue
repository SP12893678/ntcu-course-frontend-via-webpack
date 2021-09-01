<template>
  <div class="panel min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white px-4 py-4 rounded-lg box-shadow">
      <div class="flex items-center justify-center">
        <!-- <img
          class=" px-2 h-12"
          src="../assets/images/education.svg"
          alt="Workflow"
        > -->
        <div class="flex text-2xl MajorMonoDisplay">
          <h1>N</h1>
          <h1>T</h1>
          <h1>C</h1>
          <h1>U</h1>
        </div>
        <h2 class=" text-center text-2xl font-semibold text-gray-900">
          會員註冊
        </h2>
      </div>
      <form
        class="mt-8 space-y-4"
        action="#"
        method="POST"
      >
        <div class=" px-2 pt-2 pb-4 border border-gray-300 rounded-md space-y-4">
          <div class=" text-gray-500 text-sm font-medium">
            選擇你的頭像
          </div>
          <div class="flex gap-6 justify-center">
            <div
              v-for="avatar in avatars"
              :key="avatar.type"
            >
              <button
                id="user-menu-button"
                type="button"
                class="max-w-xs bg-gradient-to-r  px-4 py-4 rounded-lg flex items-center text-sm focus:outline-none "
                :class="(user.avatar.type == avatar.type)?'from-blue-200 via-blue-100  ring-2 ring-offset-2 ring-offset-blue-500 ring-white':'from-gray-200 via-gray-100 to-gray-200'"
                @click="user.avatar = avatar"
              >
                <img
                  class="h-20 w-20"
                  :src="avatar.image"
                  alt=""
                >
              </button>
            </div>
          </div>
        </div>
        <input
          type="hidden"
          name="remember"
          value="true"
        >
        <div class="rounded-md shadow-sm space-y-2">
          <div>
            <label
              for="email-address"
              class="sr-only"
            >暱稱 *</label>
            <input
              v-model="user.name"
              type="text"
              required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="暱稱 *"
              @input="$v.user.name.$touch"
            >
            <div v-if="$v.user.name.$error">
              <div
                v-if="!$v.user.name.required"
                class="error"
              >
                必填
              </div>
              <div
                v-if="!$v.user.name.maxLength"
                class="error"
              >
                暱稱最多{{ $v.user.name.$params.maxLength.max }}個長度
              </div>
            </div>
          </div>
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
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="信箱 *"
              @input="$v.user.email.$touch"
            >
            <div v-if="$v.user.email.$error">
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
            </div>
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
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="密碼 *"
              @input="$v.user.password.$touch"
            >
            <div v-if="$v.user.password.$error">
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
          </div>
          <div>
            <label
              for="password"
              class="sr-only"
            >再輸入一次密碼 *</label>
            <input
              v-model="user.confirmPassword"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="再輸入一次密碼 *"
              @input="$v.user.confirmPassword.$touch"
            >
            <div v-if="$v.user.confirmPassword.$error">
              <div
                v-if="!$v.user.confirmPassword.required"
                class="error"
              >
                必填
              </div>
              <div
                v-else-if="!$v.user.confirmPassword.sameAsPassword"
                class="error"
              >
                必須與密碼一樣
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            @click="submit"
          >
            註冊
          </button>
        </div>

        <div>
          <hr class="divide-y-2">
          <router-link
            to="/login"
            class="text-gray-500 hover:text-gray-700"
          >
            <h4 class="mt-6 text-center">
              已成為會員?
            </h4>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, between, email, sameAs } from 'vuelidate/lib/validators'

import cat from '../assets/images/cat.svg'
import grayBao from '../assets/images/gray-bao.png'
import yellowBao from '../assets/images/yellow-bao.png'

export default {
    data () {
        return {
            user: {
                avatar: {
                    image: cat,
                    type: '1'
                },
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            avatars: [
                {
                    image: cat,
                    type: '1'
                },
                {
                    image: grayBao,
                    type: '2'
                },
                {
                    image: yellowBao,
                    type: '3'
                }
            ]
        }
    },
    validations: {
        user: {
            name: {
                required,
                maxLength: maxLength(8)
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(8),
                maxLength: maxLength(16)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password')
            }
        }
    },
    methods: {
        submit () {
            if (this.$v.$invalid) return
            this.$store.dispatch('user/registerUser', {
                avatar: this.user.avatar.type,
                name: this.user.name,
                email: this.user.email,
                password: btoa(this.user.password)
            })
        }
    }
}
</script>

<style scoped>
.panel{
    background: linear-gradient(to right, #f5f5f5 0%, rgb(0, 49, 122) 100%);
    padding: 12px;
}

.box-shadow{
  box-shadow: 0px 14px 35px -9px rgb(0 0 0 / 50%);
}

.shape{
  position: fixed;
  width: 300px;
  height: 300px;
  z-index: -1;
}
.icon{
  position: fixed;
  width: 311px;
  height: 300px;
  z-index: 0;
}
.error{
  @apply text-xs text-red-600 py-2;
}
</style>
