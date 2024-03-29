<template>
  <div class="course-review-panel bg-white shadow-lg overflow-x-hidde flex flex-col  h-screen relative">
    <!--toogle for closing  -->
    <slot name="toggle" />

    <div class="flex justify-center items-center font-medium">
      <div
        v-for="(item,index) in types"
        :key="item"
        class="py-2 flex-1 text-center hover:bg-gray-100"
        :class="(index+1 == type)?'tab-active':''"
        @click="setType(index)"
      >
        {{ item }}
      </div>
    </div>
    <div class="flex justify-between items-center text-sm py-2">
      <button class="bg-gray-100 hover:bg-gray-200 mx-2 px-2 py-1 rounded text-gray-500">
        我的評論
      </button>
      <div>
        評論排序方式
        <button
          class=" bg-gray-100 hover:bg-gray-200 mx-2 px-2 py-1 rounded "
          @click="sort.show = !sort.show"
        >
          <i
            class="fas mr-1"
            :class="sort.selected.icon"
          />
          {{ sort.selected.text }}
        </button>
        <transition name="slide-fade">
          <div
            v-if="sort.show"
            class="origin-top-right absolute z-40 right-0 mt-2 mx-2 w-24 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
          >
            <a
              v-for="option in sort.options"
              :key="option.value"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
              @click="selectReviewsSort(option)"
            >
              <i
                class="fas mr-2 w-3"
                :class="option.icon"
              />
              {{ option.text }}
            </a>
          </div>
        </transition>
      </div>
    </div>
    <div class="h-full overflow-y-auto border-t-2">
      <vue-scroll>
        <div
          v-for="(review,index) in getCourseReviews"
          :key="index"
          class="px-2 py-2 border-b-2"
        >
          <div class="flex items-center">
            <img
              class="w-8 h-8 object-cover rounded-full"
              alt="User avatar"
              src="../assets/images/cat.svg"
            >
            <div class="mx-2 w-full flex-1">
              <p class="font-semibold">
                {{ review.user_id }}
              </p>
              <p class="text-gray-500 text-xs font-semibold tracking-wide">
                {{ getDateTimeString(review.date_time) }}
              </p>
            </div>
            <div class="mx-2">
              <i
                class=" mr-1 fas fa-thumbs-up fa-lg  hover:text-blue-500"
                :class="(review.has_like)?'text-blue-500':'text-gray-300'"
                @click="likeReview(review.has_like,review.id)"
              />
              {{ review.likes }}
            </div>
          </div>
          <div class="mt-4">
            {{ review.review_content }}
          </div>
        </div>

        <div
          v-if="getCourseReviews.length == 0"
          class=" text-center py-8 text-gray-400"
        >
          尚未有人留下評論(｡ŏ﹏ŏ)
        </div>
      </vue-scroll>
    </div>
    <div class=" border-t-2 border-blue-500 blue-box-shadow">
      <!-- <vue-scroll> -->
      <textarea
        v-model="content"
        class="w-full px-3 py-2 text-gray-700 border focus:outline-none border-t-2 textarea-scroll"
        rows="4"
        placeholder="請輸入留言..."
      />
      <button
        class=" bg-blue-500 text-white w-full py-1"
        type="button"
        @click="sendReview"
      >
        送出
      </button>
      <!-- </vue-scroll> -->
    </div>
  </div>
</template>

<script>
export default {
    props: {
        courseCode: {
            type: String
        },
        courseTeacher: {
            type: String
        }
    },
    data () {
        return {
            type: 1,
            types: ['一般', '能學習到的內容', '這堂課的優點'],
            sort: {
                show: false,
                selected: { text: '熱門', value: 'hot', icon: 'fa-fire' },
                options: [
                    { text: '熱門', value: 'hot', icon: 'fa-fire' },
                    { text: '最新', value: 'latest', icon: 'fa-sort-amount-up-alt' },
                    { text: '最舊', value: 'oldest', icon: 'fa-sort-amount-down-alt' }
                ]
            },
            content: ''
        }
    },
    computed: {
        getCourseReviews () {
            const reviews = this.$store.state.course.courseReviews.reviews
            if (!reviews) return []
            const fitReviews = reviews.filter(review => review.type == this.type)
            return this.sortCourseReviews(this.sort.selected.value, fitReviews)
        }

    },
    methods: {
        getDateTimeString (date_time) {
            const convertTwoDigit = (value) => value < 10 ? '0' + value : '' + value
            const month = convertTwoDigit(date_time.getMonth())
            const day = convertTwoDigit(date_time.getDay())
            const hour = convertTwoDigit(date_time.getHours())
            const minute = convertTwoDigit(date_time.getMinutes())
            return `${month}月${day}日 ${hour}:${minute}`
        },
        setType (index) {
            this.type = index + 1
        },
        sendReview () {
            if (this.content.trim().length <= 0) {
                this.$store.commit('dialogBox', { dialog: true, option: { dialog: { title: '送出錯誤', message: '評論不可空白' } } }, { root: true })
                return
            }

            this.$store.dispatch('course/postCourseReview', {
                courseCode: this.courseCode,
                courseTeacher: this.courseTeacher,
                reviewType: this.type,
                reviewContent: this.content
            })
        },
        likeReview (like, id) {
            this.$store.dispatch('course/likeCourseReview', {
                reviewID: id,
                like: !like
            })
        },
        sortCourseReviews (key, reviews) {
            const sort = {
                hot (reviews) {
                    return reviews.sort((a, b) => (a.likes > b.likes) ? -1 : 1)
                },
                latest (reviews) {
                    return reviews.sort((a, b) => (a.date_time > b.date_time) ? -1 : 1)
                },
                oldest (reviews) {
                    return reviews.sort((a, b) => (a.date_time < b.date_time) ? -1 : 1)
                }
            }
            return sort[key](reviews)
        },
        selectReviewsSort (option) {
            this.sort.show = false
            if (option.value == this.sort.selected.value) return
            else this.sort.selected = option
        }
    }
}
</script>

<style scoped>

.blue-box-shadow{
  box-shadow: 10px 0px 12px 0px rgb(40 126 255 / 50%);
}
.tab-active{
  color: #1867c0;
  border-bottom: 3px solid #1867c0;
}
.course-review-panel{
  width: 26rem;
}
</style>
