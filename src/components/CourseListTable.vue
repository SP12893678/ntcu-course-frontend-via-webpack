<template>
  <div>
    <!-- colum names-->
    <div class="flex list-none shadow-xl rounded-sm bg-white py-2">
      <li>課程名稱</li>
      <li>代碼</li>
      <li>選修別</li>
      <li>學分數</li>
      <li>班級</li>
      <li>地點</li>
      <li>時間</li>
      <li>教師</li>
      <li>人數</li>
    </div>

    <!-- table list -->
    <div class="mt-4 py-4 list-none shadow-xl rounded-sm bg-white">
      <li
        v-for="item in 10"
        :key="item"
        class="flex hover:bg-gray-200 border-b-2 py-2"
      >
        <div>
          素描Drawing
        </div>
        <div>
          # AAR00661
        </div>
        <div class="px-2 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
          <p>必修</p>
        </div>
        <div class="px-2 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
          <p>2 學分</p>
        </div>
        <div>
          美一甲
        </div>
        <div>
          H602
        </div>
        <div>
          306 307 308
        </div>
        <div>
          郭家宏
        </div>
        <div>
          49/52
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
