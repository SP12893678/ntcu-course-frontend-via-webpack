<template>
  <div>
    <router-view />
    <v-dialog-box />
  </div>
</template>

<script>
import vDialogBox from './components/DialogBox.vue'

export default {
    components: {
        vDialogBox: vDialogBox
    },
    data () {
        return {
            show: true
        }
    }
}
</script>

<style >

</style>
