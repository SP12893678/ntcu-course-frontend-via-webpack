<template>
  <div
    class="VuePagination px-4 py-3 flex items-center justify-between  sm:px-6"
  >
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div class="m-auto">
        <nav
          v-show="props.showPagination"
          class="relative z-0 inline-flex rounded-md shadow-md"
        >
          <a
            class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            @click="props.setPrevPage"
          >
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              v-bind="{...props.aProps,...props.prevProps}"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            v-for="page in props.pages"
            :key="page"
            :class="(props.page == page)?'z-10 bg-blue-500 blue-box-shadow text-gray-100':'bg-white  text-gray-500 hover:bg-gray-50 '"
            class="cursor-pointer hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium"
            v-on="props.pageEvents(page)"
          >
            <a
              v-bind="props.aProps"
            >{{ page }}</a>
          </a>

          <a
            class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md  bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            @click="props.setNextPage"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              v-bind="{...props.aProps, ...props.nextProps}"
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <!--hidden  -->
          <li
            v-if="props.hasEdgeNav"
            class=" hidden"
            :class="props.theme.firstPage"
            @click="props.setFirstPage"
          >
            <a v-bind="{...props.aProps,...props.firstPageProps}">{{ props.texts.first }}</a>
          </li>

          <li
            v-if="props.hasChunksNav"
            class=" hidden"
            :class="props.theme.prevChunk"
            @click="props.setPrevChunk"
          >
            <a v-bind="{...props.aProps, ...props.prevChunkProps}">{{ props.texts.prevChunk }}</a>
          </li>

          <li
            v-if="props.hasChunksNav"
            class=" hidden"
            :class="props.theme.nextChunk"
            @click="props.setNextChunk"
          >
            <a v-bind="{...props.aProps, ...props.nextChunkProps}">{{ props.texts.nextChunk }}</a>
          </li>

          <li
            v-if="props.hasEdgeNav"
            class=" hidden"
            :class="props.theme.lastPage"
            @click="props.setLastPage"
          >
            <a v-bind="{...props.aProps, ...props.lastPageProps}">{{ props.texts.last }}</a>
          </li>

          <p
            v-show="props.hasRecords"
            class=" hidden"
            :class="props.theme.count"
          >
            {{ props.count }}
          </p>

          <li
            v-for="page in props.pages"
            :key="`999${page}`"
            class=" hidden"
            :class="props.pageClasses(page)"
            v-on="props.pageEvents(page)"
          >
            <a
              v-bind="props.aProps"
              :class="props.theme.link"
            >{{ page }}</a>
          </li>

          <li
            class=" hidden"
            :class="props.theme.next"
            @click="props.setNextPage"
          >
            <a v-bind="{...props.aProps, ...props.nextProps}">{{ props.texts.nextPage }}</a>
          </li>

          <li
            v-if="props.hasChunksNav"
            class=" hidden"
            :class="props.theme.nextChunk"
            @click="props.setNextChunk"
          >
            <a v-bind="{...props.aProps, ...props.nextChunkProps}">{{ props.texts.nextChunk }}</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MyPagination',
    props: ['props']
}
</script>

<style scoped>
.blue-box-shadow{
  box-shadow: 5px 4px 12px 0px rgb(40 126 255 / 50%);
}
</style>
