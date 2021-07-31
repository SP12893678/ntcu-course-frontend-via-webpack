<template>
  <div>
    <router-view />
    <v-dialog-box />
    <v-snack-bar />
  </div>
</template>

<script>
import vDialogBox from './components/DialogBox.vue'
import vSnackBar from './components/SnackBar.vue'

export default {
    components: {
        vDialogBox, vSnackBar
    },
    data () {
        return {

        }
    },
    mounted () {
        // addEventListener('keydown', () => {
        //     this.$store.commit('dialogBox', { dialog: true }, { root: true })
        // })
    }
}
</script>

<style >

</style>
