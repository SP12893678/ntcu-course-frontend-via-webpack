<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white px-4 py-4 rounded-lg box-shadow">
      <div class="flex items-center justify-center">
        <img
          class=" px-2 h-12"
          src="../assets/images/education.svg"
          alt="Workflow"
        >
        <h2 class=" text-center text-3xl font-extrabold text-gray-900">
          會員註冊
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        action="#"
        method="POST"
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
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="信箱 *"
            >
          </div>
          <div>
            <label
              for="password"
              class="sr-only"
            >密碼 *</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="密碼 *"
            >
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
              記住密碼
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
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            登入
          </button>
        </div>

        <div>
          <hr class="divide-y-2">
          <router-link
            to="/login"
            class="text-gray-500 hover:text-gray-700"
          >
            <h4 class="mt-6 text-center font-extrabold">
              已成為會員?
            </h4>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            user: {

            }
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

</style>
