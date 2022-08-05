<template>
  <div v-if="GlobalStore.event">
    <h1>{{ GlobalStore.event.title }}</h1>
    <div id="event-nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="GlobalStore.event" />
  </div>
</template>

<script>
export default {
  inject: ['GlobalStore'],
  // created() {
  //   fetch data with id and set it to local data in data method
  //   Eventservics.getEvent(this.id)
  //     .then(response => {
  //       this.event = response.data
  //     })
  //     .catch(error => {
  //       if (error.response && error.response.status == 404) {
  //         this.$router.push({
  //           name: '404resource',
  //           params: { resource: 'event' },
  //         })
  //       } else {
  //         this.$router.push({ name: 'NetworkError' })
  //       }
  //     })
  // },
}
</script>
