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
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
