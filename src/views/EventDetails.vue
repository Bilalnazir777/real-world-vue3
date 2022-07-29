<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }}</p>
    <p>{{ event.description }}</p>
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
