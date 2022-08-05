<template>
  <div class="Events">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      msj="Welcome to pet event website"
    />
    <div class="pagination">
      <router-link
        id="prev-page"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; prev page</router-link
      >
      <router-link
        id="next-page"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >next page &#62;</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import Eventservics from '@/services/Eventservics.js'

export default {
  name: 'EventsList',
  props: ['page'],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalevents: 0,
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    Eventservics.getEvents(2, parseInt(routeTo.query.page || 1))
      .then(response => {
        next(VM => {
          VM.events = response.data
          VM.totalevents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo) {
    return Eventservics.getEvents(2, parseInt(routeTo.query.page || 1))
      .then(response => {
        this.events = response.data
        this.totalevents = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
  },
  computed: {
    hasNextPage() {
      var totalpages = Math.ceil(this.totalevents / 2)
      return this.page < totalpages
    },
  },
}
</script>

<style scoped>
.Events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: wavy;
  color: black;
}
#prev-page {
  text-align: left;
}
#next-page {
  text-align: right;
}
</style>
