<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="event-nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister', params: { id } }"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }"
        >Edit</router-link
      >
    </div>
    <router-view :event="event" />
  </div>
</template>

<script>
import Eventservics from '@/services/Eventservics'

export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    //   fetch data with id and set it to local data in data method
    Eventservics.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>
