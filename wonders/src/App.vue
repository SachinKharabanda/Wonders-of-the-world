<script setup>
  
</script>

<template>
  <div class="flexbox">
    <div class="title">
      <h1>THE 7 WONDERS OF THE WORLD</h1>
    </div>
    <div class="navigation">
      <ol>
        <li :class="{ active: $route.path === '/wonder1' }">
          <router-link to="/wonder1">Wonder 1</router-link>
        </li>
        <li :class="{ active: $route.path === '/wonder2' }">
          <router-link to="/wonder2">Wonder 2</router-link>
        </li>
        <li :class="{ active: $route.path === '/wonder3' }">
          <router-link to="/wonder3">Wonder 3</router-link>
        </li>
        <li :class="{ active: $route.path === '/wonder4' }">
          <router-link to="/wonder4">Wonder 4</router-link>
        </li>
        <li :class="{ active: $route.path === '/wonder5' }">
          <router-link to="/wonder5">Wonder 5</router-link>
        </li>
        <li :class="{ active: $route.path === '/wonder6' }">
          <router-link to="/wonder6">Wonder 6</router-link>
        </li>
        <li :class="{ active: $route.path === '/wonder7' }">
          <router-link to="/wonder7">Wonder 7</router-link>
        </li>
      </ol>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
