<template>
  <div class="skeleton-box relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    <div class="">
      <div class="h-6 bg-gray-300 rounded-full w-3/6" />

      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-graduation-cap transform translate-y-1" />
        <div class="h-4 bg-gray-300 rounded-full w-5/6 mt-1" />
      </div>

      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-map-marker-alt transform translate-y-1 translate-x-0.5 pr-2" />
        <div class="h-4 bg-gray-300 rounded-full w-3/6 mt-1" />
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="far fa-calendar-minus transform translate-y-1 translate-x-0.5 pr-1" />
        <div class="h-4 bg-gray-300 rounded-full w-8/12 mt-1" />
      </div>
      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-chalkboard-teacher transform translate-y-1" />
        <div class="h-4 bg-gray-300 rounded-full w-5/12 mt-1" />
      </div>

      <div class="flex space-x-2 text-gray-400 text-sm my-3">
        <i class="fas fa-users transform translate-y-1" />
        <div class="h-4 bg-gray-300 rounded-full w-9/12 mt-1" />
      </div>

      <div class="border-t-2" />

      <div class="flex justify-between">
        <div class="mt-4 h-7 bg-gray-300 rounded-md w-6/12" />
        <div class="mt-4 h-7 bg-gray-300 rounded-md w-5/12" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.skeleton-box {
  position: relative;
  overflow: hidden;
}
.skeleton-box::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
            transform: translateX(-100%);
    background-image: -webkit-gradient(
      linear,
      left top, right top,
      color-stop(0, rgba(255, 255, 255, 0)),
      color-stop(20%, rgba(255, 255, 255, 0.2)),
      color-stop(60%, rgba(255, 255, 255, 0.5)),
      to(rgba(255, 255, 255, 0))
    );
    background-image: -o-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    -webkit-animation: shimmer 3s infinite;
            animation: shimmer 3s infinite;
    content: '';
  }
@-webkit-keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}
@keyframes shimmer {
  100% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
}
</style>
