<template>
  <p>Edit event here</p>
</template>

<script>
export default {
  props: ['event'],
  data() {
    return {
      unsavedchanges: true,
    }
  },
  beforeRouteLeave() {
    if (this.unsavedchanges) {
      const answer = window.confirm(
        'are you sure you want to exit before save changes'
      )

      if (!answer) {
        return false
      }
    }
  },
}
</script>
