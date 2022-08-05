<template>
  <h1>Oops</h1>
  <h3>thbe {{ resource }} you are looking for is not here</h3>
  <router-link :to="{ name: 'EventList' }">Back to home page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page',
    },
  },
}
</script>
