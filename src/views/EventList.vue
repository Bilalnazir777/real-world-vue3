<template>
  <div class="Events">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      msj="Welcome to pet event website"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import Eventservics from '@/services/Eventservics.js'
export default {
  name: 'EventsList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    Eventservics.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.Events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
