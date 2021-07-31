<template>
  <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
    <div class=" text-white flex items-center absolute rounded-full shadow-xl  right-4 ">
      <i class="fas fa-info-circle text-lg text-pink-300 hover:text-pink-500" />
    </div>
    <div class="">
      <p class="text-xl font-bold truncate ">
        {{ course.name }}
      </p>
      <div class="flex space-x-2 text-gray-400 text-xs mb-3">
        <p>#{{ course.code }}</p>
      </div>

      <div class="flex space-x-2 text-white text-xs my-3 font-semibold">
        <div class="px-2 py-1 rounded-full bg-purple-500">
          <p>{{ course.sel }}修</p>
        </div>
        <div class="px-2 py-1 rounded-full bg-green-500">
          <p>{{ course.credit }} 學分</p>
        </div>
      </div>

      <div
        v-clipboard:copy="course.class"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="group flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="card-icon fas fa-graduation-cap transform translate-y-1" />
        <p class="flex-1">
          {{ course.class }}
        </p>
        <div class="opacity-0 group-hover:opacity-100">
          <i class="card-icon fas fa-copy hover:text-gray-300" />
        </div>
      </div>

      <div
        v-clipboard:copy="course.location"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="group flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="card-icon fas fa-map-marker-alt transform translate-y-1 translate-x-0.5 pr-2" />
        <p class="flex-1">
          {{ course.location }}
        </p>
        <div class="opacity-0 group-hover:opacity-100">
          <i class="card-icon fas fa-copy hover:text-gray-300" />
        </div>
      </div>
      <div
        v-clipboard:copy="course.time"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="group flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="card-icon far fa-calendar-minus transform translate-y-1 translate-x-0.5 pr-1" />
        <p class="flex-1">
          {{ course.time }}
        </p>
        <div class="opacity-0 group-hover:opacity-100">
          <i class="card-icon fas fa-copy hover:text-gray-300" />
        </div>
      </div>
      <div
        v-clipboard:copy="course.teacher"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError"
        class="group flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="card-icon fas fa-chalkboard-teacher transform translate-y-1" />
        <p class="flex-1">
          {{ course.teacher }}
        </p>
        <div class="opacity-0 group-hover:opacity-100">
          <i class="card-icon fas fa-copy hover:text-gray-300" />
        </div>
      </div>

      <div
        v-if="getNumsPercentage < 50"
        class="flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="card-icon fas fa-users transform translate-y-1" />
        <div class="green-box-shadow w-full bg-grey-light rounded-full">
          <div
            class="progress-bar green-progress-bar rounded-full text-xs leading-none py-1 text-center text-white"
            :style="'width:'+ (getNumsPercentage<=22?22:getNumsPercentage) + '%;'"
          >
            {{ course.selected_nums }}/{{ course.limit_nums }}
          </div>
        </div>
        <i class="fas fa-wind absolute right-2 text-green-500 transform -translate-y-1 h-flip" />
      </div>

      <div
        v-else-if="getNumsPercentage >= 50 && getNumsPercentage <= 90"
        class="flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="fas fa-users transform translate-y-1" />
        <div class="blue-box-shadow w-full bg-grey-light rounded-full">
          <div
            class="progress-bar blue-progress-bar rounded-full text-xs leading-none py-1 text-center text-white"
            :style="'width:'+ getNumsPercentage + '%;'"
          >
            {{ course.selected_nums }}/{{ course.limit_nums }}
          </div>
        </div>
        <i class="fas fa-fill absolute right-2 text-blue-500 transform -translate-y-1 h-flip" />
      </div>

      <div
        v-else
        class="flex space-x-2 text-gray-400 text-sm my-3"
      >
        <i class="fas fa-users transform translate-y-1" />
        <div class="red-box-shadow w-full bg-grey-light rounded-full">
          <div
            class="progress-bar red-progress-bar rounded-full text-xs leading-none py-1 text-center text-white"
            :style="'width:'+ (getNumsPercentage>100?100:getNumsPercentage) + '%;'"
          >
            {{ course.selected_nums }}/{{ course.limit_nums }}
          </div>
        </div>
        <i class="fas fa-fire absolute right-3 text-red-500 transform -translate-y-1" />
      </div>

      <div class="border-t-2" />

      <div class="flex">
        <button class="mt-4 mx-1 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
          <i class="fas fa-info-circle  mr-2 transform translate-y-0.5" />
          詳細資料
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
    props: {
        course: {
            type: Object,
            default: null
        }
    },
    computed: {
        getNumsPercentage () {
            return Math.round((this.course.selected_nums / this.course.limit_nums) * 100)
        }
    },
    methods: {
        onCopy (e) {
            this.$store.commit('snackBar', { show: true, message: 'Copy!' }, { root: true })
        },
        onError (e) {
            this.$store.commit('snackBar', { show: true, message: 'Failed!' }, { root: true })
        }
    }
}
</script>

<style scoped>
.card-icon{
  flex: 0 0 18px;
}
.green-box-shadow{
  box-shadow: 5px 4px 12px 0px rgb(38 193 79 / 50%);
}
.blue-box-shadow{
  box-shadow: 5px 4px 12px 0px rgb(40 126 255 / 50%);
}
.red-box-shadow{
  box-shadow: 5px 4px 12px 0px rgb(255 111 40 / 50%);
}
.h-flip{
  transform:scaleX(-1);
}

.green-progress-bar{
  background: linear-gradient(90deg,#33D197,#1AB17F 25%,#07986B 51%,#33D197 75%, #1AB17F);
}

.blue-progress-bar{
  background: linear-gradient(90deg,#3292ff,#1582ff 25%,hsl(202, 100%, 65%) 51%,#3292ff 75%, #1582ff);
}

.red-progress-bar{
  background: linear-gradient(90deg,#F59D0C,#F4851C 17%,#F16331 34%,#EF4543 51%,#F59D0C 68%, #F4851C 85%,#F16331);
}

.progress-bar{
  background-size: 300% 100%;
  -webkit-animation: progress-animation 2s linear infinite;
          animation: progress-animation 2s linear infinite;
}
@-webkit-keyframes progress-animation {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}

@keyframes progress-animation {
  0% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
