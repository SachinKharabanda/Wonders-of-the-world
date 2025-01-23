<script setup>
  
  
</script>

<template>
  <div class="flexbox">
    <div class="title">
      <h1>THE 7 WONDERS OF THE WORLD</h1>
    </div>
    <div class="navigation">
      <ol>
        <li><router-link to="/wonder1">Wonder 1</router-link></li>
        <li><router-link to="/wonder2">Wonder 2</router-link></li>
        <li>Wonder 3</li>
        <li>Wonder 4</li>
        <li>Wonder 5</li>
        <li>Wonder 6</li>
        <li>Wonder 7</li>
      </ol>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
