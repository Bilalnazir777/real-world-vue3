<template>
  <div id="app">
    <div id="flashmessages" v-if="GlobalStore.flashMessages">
      {{ GlobalStore.flashMessages }}
    </div>
    <nav>
      <router-link :to="{ name: 'EventList' }">Event</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  inject: ['GlobalStore'],
}
</script>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}
/* #flashmessages {
  transition: transform 1s;
} */
#flashmessages {
  /* transform: rotate(90deg) scale(2) translateY(-50%) translateX(50%); */
  animation-name: yellowfade;
  animation-duration: 3s;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h4 {
  font-size: 20px;
}
</style>
