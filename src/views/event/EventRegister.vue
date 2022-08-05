<template>
  <p>Register event here</p>
  <button @click="register">Register here</button>
</template>

<script>
export default {
  props: ['event'],
  inject: ['GlobalStore'],
  methods: {
    register() {
      //call to api
      //if registered then redirect to event details

      this.GlobalStore.flashMessages =
        'you are successfully registed for ' + this.event.title

      setTimeout(() => {
        this.GlobalStore.flashMessages = ''
      }, 3000)
      this.$router.push({
        name: 'EventDetails',
        // params:{id:this.event.id}
      })
    },
  },
}
</script>
