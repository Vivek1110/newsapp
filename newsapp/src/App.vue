<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/header/Header'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'app-header': Header
  }
}
</script>

<style>

</style>
