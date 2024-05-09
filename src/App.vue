<template>
  <div id="app">
    <div class="flex justify-between border-b border-gray-500">
        <NavBar/>
        <SearchBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
