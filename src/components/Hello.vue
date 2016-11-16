<template>
  <main-layout>
    <div class="hello">
      This is developed
    </div>
  </main-layout>
</template>

<script>
import MainLayout from './Main.vue'

export default {
  name: 'hello',
  components: {
    MainLayout
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


</style>
