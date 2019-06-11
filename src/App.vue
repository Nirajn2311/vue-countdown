<template>
  <div id="app">
    <p>Current Time - {{ time }}</p>
	<datetime type='datetime' format='MMMM d yyyy, HH:mm:ss' value-zone='UTC+4' zone='UTC+4' v-model='datetime'></datetime>
	<p>Chosen Time - {{ this.datetime }}</p>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'app',
  data: function() {
    return {
	time: '',
	datetime: ''
    }
  },
  beforeMount() {
    setInterval(() => {
      this.time = moment().format('MMMM D YYYY, HH:mm:ss')
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
