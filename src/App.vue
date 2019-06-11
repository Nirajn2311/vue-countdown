<template>
  <div id="app">
    <p>Current Time - {{ time }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'app',
  data: function() {
    return {
      time: ''
    }
  },
  beforeMount() {
    setInterval(() => {
      this.time = moment().format('MMMM D YYYY, hh:mm:ss a')
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
