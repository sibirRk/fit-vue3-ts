<template>
  <div id="app">
    <b-container>
      <navigation />
      <router-view />
    </b-container>
  </div>
</template>

<script lang="ts">
import navigation from '@/components/navigation.vue';

export default {
  name: 'App',

  components: {
    navigation,
  }
}
</script>

<style lang="scss" src="./main.scss"></style>