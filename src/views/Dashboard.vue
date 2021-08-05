<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div
      class=" h-screen fixed z-50 flex flex-col w-full md:w-64 text-gray-300 bg-gray-800 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
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
              v-model="courseMenu.year"
              class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option
                v-for="year in $store.state.course.year"
                :key="year"
              >
                {{ year }}
              </option>
            </select>
          </div>

          <div class=" mt-4 w-full">
            <label
              for="country"
              class="block text-sm font-medium text-gray-300"
            >學期</label>
            <select
              v-model="courseMenu.term"
              class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option
                v-for="term in $store.state.course.term"
                :key="term.value"
                :value="term"
              >
                {{ term.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="mt-4">
          <label
            class="block text-sm font-medium text-gray-300"
          >學制</label>
          <select
            v-model="courseMenu.ddlEdu"
            class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            @change="onChangeDdlEdu"
          >
            <option
              v-for="option in getDdlEduOption"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>

        <div class="mt-4">
          <label
            for="country"
            class="block text-sm font-medium text-gray-300"
          >學系</label>
          <select
            v-model="courseMenu.ddlDept"
            class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            @change="onChangeDdlDept"
          >
            <option value="0">
              全部
            </option>
            <option
              v-for="option in getDdlDeptOption"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>

        <div class="mt-4">
          <label
            for="country"
            class="block text-sm font-medium text-gray-300"
          >班級</label>
          <select
            v-model="courseMenu.ddlClass"
            class="text-gray-700 mt-1 block w-full py-2 px-3 border border-gray-700 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="0">
              全部
            </option>
            <option
              v-for="option in getDdlClassOption"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
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
              v-model="courseMenu.searchInput"
              type="text"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="課程、教師、時間、地點)"
            >

            <button
              class="ml-2 group relative w-12 flex justify-center items-center border border-transparent font-medium rounded-md text-xl text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              @click="addKeyWord"
            >
              ＋
            </button>
          </div>
        </div>
        <div class="mt-4 bg-gray-50 w-full h-36 rounded-md table-border px-1.5 py-2">
          <vue-scroll>
            <label
              v-for="(keyWord,index) in courseMenu.keyWords"
              :key="(keyWord+index)"
              :class="colorSet[index%colorSet.length] +' rounded-md px-1.5 py-1 text-xs text-white mx-1  inline-block mt-2'"
            >
              {{ keyWord }}
              <i
                class="fas fa-times ml-1 cursor-pointer"
                @click="removeKeyWord(keyWord)"
              />
            </label>
          </vue-scroll>
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

    <div class="flex pl-64 w-full bg-gradient-to-r from-gray-100 to-gray-400 relative h-screen overflow-x-hidden">
      <div class="flex-1 w-full overflow-x-hidden">
        <vue-scroll>
          <div
            v-if="!reviewPanel.show"
            class="flex  fixed z-50 top-4 right-0 rounded-l-md py-6 px-1 bg-white shadow-lg"
            @click="reviewPanel.show = !reviewPanel.show"
          >
            <i class="fas fa-angle-double-left fa-lg" />
          </div>
          <!-- view mode -->
          <div class="flex absolute top-4 left-4 rounded-lg bg-gray-100 shadow-lg">
            <div class="px-4 py-2 rounded-l-lg text-gray-800">
              <i class="fas fa-grip-horizontal fa-lg" />
            </div>
            <div class="px-4 py-2 rounded-r-lg bg-gray-300 inner-shadow hover:bg-gray-100">
              <i class="fas fa-list fa-lg text-gray-800" />
            </div>
          </div>
          <Pagination
            v-model="page"
            :records="getFitCourses.length"
            :per-page="perPageNums"
            :options="paginationTemplate"
          />
          <!-- <CourseListTable class="mx-4" /> -->
          <div class="flex items-center justify-center mt-4">
            <div
              class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 "
              :class="(reviewPanel.show)?'xl:grid-cols-3':'xl:grid-cols-4'"
            >
              <CourseCardSkeleton
                v-for="item in 3"
                v-show="$store.state.course.courses.length <= 0"
                :key="item"
              />

              <CourseCard
                v-for="course in getPageCourse"
                :key="(course.code + course.no + course.class)"
                :course="course"
                @clickReviewEvent="openReviewPanel(course.name,course.code,course.teacher)"
                @clickDetailEvent="openDetailPanel(course.id)"
              />
            </div>
          </div>
        </vue-scroll>
      </div>
      <transition
        v-if="reviewPanel.show"
        name="slide-fade"
        appear
      >
        <CourseReview
          :course-code="reviewPanel.courseCode"
          :course-teacher="reviewPanel.courseTeacher"
        >
          <template slot="toggle">
            <div
              class="flex absolute z-50 top-4 left-0 transform  -translate-x-full rounded-l-md py-6 px-1 bg-white shadow-lg"
              @click="reviewPanel.show = !reviewPanel.show"
            >
              <i class="fas fa-angle-double-right fa-lg" />
            </div>
          </template>
        </CourseReview>
      </transition>
    </div>

    <transition
      v-if="detailPanel.show"
      name="fade"
      appear
    >
      <div
        class="fixed w-full h-full bg-black bg-opacity-30 z-50 "
      >
        <div
          class="flex justify-center items-center w-full h-full"
          @click.self="closeDetailPanel"
        >
          <div class="w-11/12 h-5/6 bg-white rounded-lg">
            <div class="flex justify-between items-center">
              <div class="px-2 py-2 font-semibold text-lg">
                課程詳細資料
              </div>
              <div
                class="px-2 mr-2 hover:bg-gray-100 rounded-full"
                @click="closeDetailPanel"
              >
                <i class="fas fa-times" />
              </div>
            </div>

            <div class=" w-full course-detail-panel-content rounded-b-lg">
              <vue-scroll class="rounded-b-lg">
                <div v-html="detailPanel.content" />
              </vue-scroll>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CourseCard from '../components/CourseCard.vue'
import CourseListTable from '../components/CourseListTable.vue'
import CourseCardSkeleton from '../components/CourseCardSkeleton.vue'
// import Pagination from '../components/Pagination.vue'
import Pagination from 'vue-pagination-2'
import MyPagination from '../components/MyPagination.vue'
import CourseReview from '../components/CourseReview.vue'

export default {
    components: {
        CourseCard,
        CourseListTable,
        CourseCardSkeleton,
        Pagination,
        CourseReview
    },
    data () {
        return {
            courseMenu: {
                year: 108,
                term: { value: 1, name: '第一學期' },
                ddlEdu: 'A',
                ddlDept: 0,
                ddlClass: 0,
                searchInput: '',
                keyWords: []
            },
            colorSet: ['bg-red-300', 'bg-yellow-300', 'bg-green-300', 'bg-blue-400', 'bg-purple-300', 'bg-pink-300'],
            viewMode: 'card',
            page: 1,
            perPageNums: 12,
            paginationTemplate: {
                template: MyPagination
            },
            detailPanel: {
                show: false,
                content: ''
            },
            reviewPanel: {
                show: false,
                courseName: '',
                courseCode: '',
                courseTeacher: ''
            }
        }
    },
    computed: {
        getDdlEduOption () {
            const course = this.$store.state.course
            const ddlEduOption = course.courseOptions.find(option => {
                return option.year == this.courseMenu.year && option.term == this.courseMenu.term.value
            })
            if (ddlEduOption == undefined) return null
            return ddlEduOption.ddlEdu
        },
        getDdlDeptOption () {
            if (this.getDdlEduOption == null) return []
            const ddlEdu = this.getDdlEduOption.find(item => item.value == this.courseMenu.ddlEdu)
            return (ddlEdu != undefined) ? ddlEdu.ddlDept : []
        },
        getDdlClassOption () {
            if (this.getDdlDeptOption == null) return []
            const ddlEdu = this.getDdlDeptOption.find(item => item.value == this.courseMenu.ddlDept)
            return (ddlEdu != undefined) ? ddlEdu.ddlClass : []
        },
        getFitCourses () {
            const courses = this.$store.state.course.courses
            return courses.filter(course => {
                const isFitYear = course.year == this.courseMenu.year
                const isFitTerm = course.term == this.courseMenu.term.value
                const isFitDdlEdu = course.ddl_edu == this.courseMenu.ddlEdu
                const isFitDdlDept = (course.ddl_dept == this.courseMenu.ddlDept || this.courseMenu.ddlDept == 0)
                const isFitDdlClass = (course.ddl_class == this.courseMenu.ddlClass || this.courseMenu.ddlClass == 0)

                const courseString = JSON.stringify(course).toLowerCase()
                const keyWords = this.courseMenu.keyWords
                const isFitKeyWords = !keyWords.length || keyWords.every(keyword => courseString.includes(keyword.toLowerCase()))
                const Fits = [isFitYear, isFitTerm, isFitTerm, isFitDdlEdu, isFitDdlDept, isFitDdlClass, isFitKeyWords]
                return !Fits.includes(false)
            })
        },
        getPageCourse () {
            const fitCourse = this.getFitCourses
            return fitCourse.slice((0 + this.perPageNums * (this.page - 1)), this.perPageNums * (this.page))
        }
    },
    mounted () {
        this.$store.dispatch('course/getAllCourseData')
        this.$store.dispatch('course/getCourseOptions')

        console.log(this.$store.state.courses)

        // addEventListener('keydown', () => {
        //     this.reviewPanel.show = !this.reviewPanel.show
        // })
    },
    methods: {
        onChangeDdlEdu () {
            this.courseMenu.ddlDept = 0
            this.courseMenu.ddlClass = 0
            this.resetPage()
        },
        onChangeDdlDept () {
            this.courseMenu.ddlClass = 0
            this.resetPage()
        },
        addKeyWord () {
            if (this.courseMenu.searchInput.trim().length <= 0) return
            if (this.courseMenu.keyWords.length >= 6) return
            this.courseMenu.keyWords.push(this.courseMenu.searchInput)
            this.courseMenu.searchInput = ''
            this.resetPage()
        },
        removeKeyWord (index) {
            this.courseMenu.keyWords.splice(index, 1)
            this.resetPage()
        },
        resetPage () {
            this.page = 1
        },
        openDetailPanel (courseID) {
            let courseDetail = this.$store.state.course.coursesDetail.find(course => course.id == courseID)
            if (courseDetail != undefined) {
                this.detailPanel.content = courseDetail.content
                this.detailPanel.show = true
            } else {
                this.$store.dispatch('course/getCourseDetail', courseID).then(res => {
                    courseDetail = this.$store.state.course.coursesDetail.find(course => course.id == courseID)
                    this.detailPanel.content = courseDetail.content
                    this.detailPanel.show = true
                })
            }
        },
        closeDetailPanel () {
            this.detailPanel.show = false
        },
        openReviewPanel (courseName, courseCode, courseTeacher) {
            const { code, teacher } = this.$store.state.course.courseReviews
            const isNeedFetchReview = !(code == courseCode && teacher == courseTeacher)
            if (isNeedFetchReview) { this.$store.dispatch('course/getCourseReviews', { courseCode, courseTeacher }) }
            this.reviewPanel.courseName = courseName
            this.reviewPanel.courseCode = courseCode
            this.reviewPanel.courseTeacher = courseTeacher
            this.reviewPanel.show = true
        }

    }
}
</script>

<style scoped>
.table-border{
  background-image: linear-gradient(90deg,rgba(60,10,30,.04) 6%,transparent 0),linear-gradient(1turn,rgba(60,10,30,.04) 6%,transparent 0);
  background-size: 15px 15px;
}
.inner-shadow{
  box-shadow: inset 0 0 6px #b1b1b1;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
}

.course-detail-panel-content{
  height: calc(100% - 44px);
}

/* .tab-active:hover{
  background-color: rgba(25, 94, 158, 0.788);
} */

/* .textarea-scroll{
  min-height: 120px;
  overflow-y: hidden;
} */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s linear;
}

.slide-fade-enter {
    width: 0px;
    transform: translateX(100%);
}

.slide-fade-enter-to {
    transform: translateX(0);
}

.slide-fade-leave-to {
    width: 0px;
    transform: translateX(100%);
}
</style>
