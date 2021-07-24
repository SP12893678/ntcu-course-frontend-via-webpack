<template>
  <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    <div class=" text-white flex items-center absolute rounded-full shadow-xl  right-4 ">
      <i class="fas fa-info-circle text-lg text-pink-300 hover:text-pink-500" />
    </div>
    <div class="">
      <p class="text-xl font-bold truncate ">
        <slot name="name" />
      </p>
      <div class="flex space-x-2 text-gray-400 text-xs mb-3">
        <p>#<slot name="code" /></p>
      </div>

      <div class="flex space-x-2 text-white text-xs my-3 font-semibold">
        <div class="px-2 py-1 rounded-full bg-purple-500">
          <p><slot name="sel" /></p>
        </div>
        <div class="px-2 py-1 rounded-full bg-green-500">
          <p><slot name="credit" /> 學分</p>
        </div>
      </div>

      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-graduation-cap transform translate-y-1" />
        <p><slot name="class" /></p>
      </div>

      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-map-marker-alt transform translate-y-1 translate-x-0.5 pr-2" />
        <p><slot name="location" /></p>
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="far fa-calendar-minus transform translate-y-1 translate-x-0.5 pr-1" />
        <p><slot name="time" /></p>
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-chalkboard-teacher transform translate-y-1" />
        <p><slot name="teacher" /></p>
      </div>

      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-users transform translate-y-1" />
        <div class="red-box-shadow w-full bg-grey-light rounded-full">
          <div
            class="bg-gradient-to-r from-yellow-500 to-red-500 rounded-full text-xs leading-none py-1 text-center text-white"
            style="width: 100%"
          >
            <slot name="selected_nums" />/<slot name="limit_nums" />
          </div>
        </div>
        <i class="fas fa-fire absolute right-3 text-red-500 transform -translate-y-1" />
      </div>

      <div class="border-t-2" />

      <div class="flex">
        <button class="mt-4 mx-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <i class="fas fa-calendar-plus mr-2 transform translate-y-0.5" />
          預約
        </button>
        <button class="mt-4 mx-1 group relative w-40 flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <i class="fas fa-comments mr-2 transform translate-y-0.5" />
          評論
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
