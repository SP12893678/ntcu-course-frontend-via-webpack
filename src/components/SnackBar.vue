<template>
  <div
    class="fixed z-10 inset-0 overflow-y-hidden flex items-end justify-center pointer-events-none"
    aria-labelledby="modal-title"
    aria-modal="true"
  >
    <transition
      v-if="$store.state.snackBar.show"
      name="bounce"
    >
      <div class=" mb-3 h-12 min-w-200 flex text-white bg-gray-700 shadow-md rounded-md pointer-events-auto">
        <div class="flex items-center px-2 py-3 justify-between flex-1">
          <div class="mx-3">
            <p>{{ snackbar.message }}</p>
          </div>
          <div
            class="px-2 py-0.5 transition hover:bg-gray-600 rounded"
            @click="close"
          >
            <i class="fas fa-times" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    data () {
        return {
            snackbar: {
                message: '',
                event: setTimeout(() => { this.close() }, 2000)
            }
        }
    },
    updated () {
        clearTimeout(this.snackbar.event)
        this.snackbar.message = this.$store.state.snackBar.message
        const event = setTimeout(() => { this.close() }, 2000)
        this.snackbar.event = event
    },
    methods: {
        close () {
            this.$store.commit('snackBar', { show: false }, { root: true })
        }
    }
}
</script>

<style scoped>
.min-w-200{
    min-width: 200px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(150%);
  }
}
</style>
