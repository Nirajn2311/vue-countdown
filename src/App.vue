<template>
  <div id="app">
    <p>Current Time - {{ time }}</p>
	<datetime type='datetime' format='MMMM d yyyy, HH:mm:ss' value-zone='UTC+4' zone='UTC+4' v-model='datetime'></datetime>
	<p>Chosen Time - {{ datetime }}</p>
	<p>Remaining Time - {{ remtime }}</p>
  </div>
</template>

<script>
import moment from 'moment'
import countdown from 'countdown'
require('moment-countdown')

export default {
  name: 'app',
  data: function() {
    return {
	time: '',
	datetime: '',
	remtime: ''
    }
  },
  beforeMount() {
    setInterval(() => {
      this.time = moment().format("MMMM D YYYY, HH:mm:ss");
      this.datetime = localStorage.datetime != "Invalid date" ? localStorage.getItem("datetime") : moment(this.datetime).format("MMMM D YYYY, HH:mm:ss");
      if (this.datetime) {
		localStorage.setItem("remtime", moment().countdown(this.datetime).toString());
		localStorage.setItem("datetime", this.datetime);
	  }
	  this.remtime = localStorage.getItem("remtime");
    }, 1000)
  }
}
</script>
