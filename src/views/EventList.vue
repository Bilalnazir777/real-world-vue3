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
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventsList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 4565,
          category: "animal welfare",
          title: "cat adoption day",
          description: "find your new friend at this event",
          location: "meow town",
          date: "july 28",
          time: "10:00",
          petallowed: true,
          organizer: "bilal nazir",
        },
        {
          id: 212,
          category: "animal welfare",
          title: "Horse adoption day",
          description: "find your new friend at this event",
          location: "horsy town",
          date: "july 12",
          time: "9:00",
          petallowed: true,
          organizer: "bilal nazir",
        },
        {
          id: 8780,
          category: "animal welfare",
          title: "goat adoption day",
          description: "find your new friend at this event",
          location: "maa town",
          date: "july 18",
          time: "5:00",
          petallowed: true,
          organizer: "bilal nazir",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
