<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div
      class="flex flex-col w-full md:w-64 text-gray-300 bg-gray-800 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
      x-data="{ open: false }"
    >
      <div class="bg-gray-900 flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <router-link
          to="/"
          class="text-lg font-semibold tracking-widest text-gray-300 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
        >
          Course Sevice
        </router-link>
        <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            class="w-6 h-6"
          >
            <path
              x-show="!open"
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
            <path
              x-show="open"
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="px-6 py-2 h-full">
        <div class="flex">
          <div class="mr-2 mt-4 w-40">
            <label
              for="country"
              class="block text-sm font-medium text-gray-300"
            >學年</label>
            <select
              id="country"
              name="country"
              autocomplete="country"
              class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>110</option>
              <option>109</option>
              <option>108</option>
              <option>107</option>
            </select>
          </div>

          <div class=" mt-4 w-full">
            <label
              for="country"
              class="block text-sm font-medium text-gray-300"
            >學期</label>
            <select
              id="country"
              name="country"
              autocomplete="country"
              class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>第一學期</option>
              <option>第二學期</option>
              <option>寒假</option>
              <option>暑假</option>
            </select>
          </div>
        </div>

        <div class="mt-4">
          <label
            for="country"
            class="block text-sm font-medium text-gray-300"
          >學制</label>
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>學士</option>
            <option>碩士班</option>
            <option>博士班</option>
            <option>虛擬學制</option>
          </select>
        </div>

        <div class="mt-4">
          <label
            for="country"
            class="block text-sm font-medium text-gray-300"
          >學系</label>
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>ACS 資訊工程學系</option>
            <option>AAR 美術學系</option>
            <option>ACA 諮商與應用心理學系</option>
            <option>ACC 文化創意產業設計與營運學系</option>
          </select>
        </div>

        <div class="mt-4">
          <label
            for="country"
            class="block text-sm font-medium text-gray-300"
          >班級</label>
          <select
            id="country"
            name="country"
            autocomplete="country"
            class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>資一甲</option>
            <option>資二甲</option>
            <option>資三甲</option>
            <option>資四甲</option>
          </select>
        </div>

        <div class="border-t-2 mt-4 border-gray-400 opacity-50" />

        <div class="mt-4">
          <label
            for="about"
            class="block text-sm font-medium text-gray-300 mb-2"
          >
            關鍵字搜尋
          </label>
          <div class="flex">
            <label
              for="email-address"
              class="sr-only"
            >(etc.課程名稱、任課教師、上課時間、上課地點)</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="課程、教師、時間、地點)"
            >

            <button class="ml-2 group relative w-12 flex justify-center items-center border border-transparent font-medium rounded-md text-xl text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              ＋
            </button>
          </div>
        </div>

        <div class="mt-4 bg-gray-50 w-full h-36 rounded-md table-border px-1.5 py-2">
          <label
            for=""
            class=" bg-blue-400 rounded-md px-1.5 py-1 text-xs text-white mx-1"
          >
            K207a
            <i class="fas fa-times ml-1" />
          </label>
          <label
            for=""
            class=" bg-red-300 rounded-md px-1.5 py-1 text-xs text-white mx-1"
          >
            王讚彬
            <i class="fas fa-times ml-1" />
          </label>
        </div>
      </div>

      <div class="flex items-center  px-4 py-2.5 border-t-2 border-gray-700">
        <img
          class="w-8 h-8 object-cover rounded-full"
          alt="User avatar"
          src="../assets/images/cat.svg"
        >
        <div class="mx-2 w-full">
          <p class="font-semibold">
            小貓貓
          </p>
          <p class="text-gray-500 text-xs font-semibold tracking-wide">
            CuteCatMeow@gmail.com
          </p>
        </div>
        <div class="hover:text-white text-gray-400 py-2">
          <i class="fas fa-sign-out-alt" />
        </div>
      </div>
    </div>

    <div class="w-full bg-gradient-to-r from-gray-100 to-gray-400">
      <div class="flex items-center justify-center mt-4">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <!-- 1 card -->
          <!-- <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 right-4 -top-3">
                <i class="fas fa-info-circle text-lg"></i>
            </div>
            <div class=" text-white flex items-center absolute rounded-full shadow-xl  right-4 ">
              <i class="fas fa-info-circle text-lg text-pink-300 hover:text-pink-500" />
            </div>
            <div class="">
              <p class="text-2xl font-bold">
                計算機網路
              </p>
              <div class="flex space-x-2 text-gray-400 text-xs mb-3">
                <p>#ACS00180</p>
              </div>

              <div class="flex space-x-2 text-white text-xs my-3 font-semibold">
                <div class="px-2 py-1 rounded-full bg-yellow-500">
                  <p>必修</p>
                </div>
                <div class="px-2 py-1 rounded-full bg-green-500">
                  <p>3 學分</p>
                </div>
              </div>

              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <i class="fas fa-graduation-cap transform translate-y-1" />
                <p>資一甲</p>
              </div>

              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <i class="fas fa-map-marker-alt transform translate-y-1 translate-x-0.5 pr-2" />
                <p>K207a</p>
              </div>
              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <i class="far fa-calendar-minus transform translate-y-1 translate-x-0.5 pr-1" />
                <p>106 107 108</p>
              </div>
              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <i class="fas fa-chalkboard-teacher transform translate-y-1" />
                <p>王讚彬</p>
              </div>

              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <i class="fas fa-users transform translate-y-1" />
                <div class="box-shadow w-full bg-grey-light rounded-full">
                  <div
                    class="bg-gradient-to-r from-blue-400 to-blue-600 rounded-full text-xs leading-none py-1 text-center text-white"
                    style="width: 75%"
                  >
                    52/70
                  </div>
                </div>
                <i class="fas fa-fill absolute right-2 text-blue-500 transform -translate-y-1 h-flip" />
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
          </div> -->

          <CourseCardSkeleton
            v-for="item in 3"
            v-show="$store.state.course.courses.length <= 0"
            :key="item"
          />

          <CourseCard
            v-for="course in $store.state.course.courses"
            :key="(course.code + course.no + course.class)"
          >
            <template #name>
              {{ course.name }}
            </template>
            <template #code>
              {{ course.code }}
            </template>
            <template #sel>
              {{ course.sel }}
            </template>
            <template #credit>
              {{ course.credit }}
            </template>
            <template #class>
              {{ course.class }}
            </template>
            <template #location>
              {{ course.location }}
            </template>
            <template #time>
              {{ course.time }}
            </template>
            <template #teacher>
              {{ course.teacher }}
            </template>
            <template #selected_nums>
              {{ course.selected_nums }}
            </template>
            <template #limit_nums>
              {{ course.limit_nums }}
            </template>
          </CourseCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseCard from '../components/CourseCard.vue'
import CourseCardSkeleton from '../components/CourseCardSkeleton.vue'

export default {
    components: {
        CourseCard,
        CourseCardSkeleton
    },
    data () {
        return {
            coursesMenu: {
                txtYear: 110
            }
        }
    },
    mounted () {
        // this.$store.dispatch('http/get', {
        //     api: 'course/108/1/A'
        // }).then((data) => {
        //     console.log(data)
        // })
        this.$store.dispatch('course/getAllCourseData')
        console.log(this.$store.state.courses)
    }
}
</script>

<style>
.box-shadow{
  box-shadow: 5px 4px 12px 0px rgb(40 126 255 / 50%);
}
.red-box-shadow{
  box-shadow: 5px 4px 12px 0px rgb(255 111 40 / 50%);
}

.table-border{
  background-image: linear-gradient(90deg,rgba(60,10,30,.04) 6%,transparent 0),linear-gradient(1turn,rgba(60,10,30,.04) 6%,transparent 0);
  background-size: 15px 15px;
}

.h-flip{
  transform:scaleX(-1);
}
</style>
