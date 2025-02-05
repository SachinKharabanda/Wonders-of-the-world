<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder6);
</script>

<template>
  <div class="carousel-container">
    <!-- Left navigation button -->
    <button @click="prevSlide" class="nav-button">←</button>

    <!-- Image display -->
    <div class="image-container">
      <img v-for="(image, index) in images"
           :key="index"
           :src="image"
           :class="{ 'active-image': index === currentIndex, 'faded-image': index !== currentIndex }"
           class="carousel-image" />
    </div>

    <!-- Right navigation button -->
    <button @click="nextSlide" class="nav-button">→</button>
  </div>

  <!-- Navigation Dots -->
  <div class="carousel-dots">
    <span v-for="(dot, index) in images.length"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index">
      ●
    </span>
  </div>

  <div class="description-container">
    <h1>LIGHTHOUSE OF ALEXANDRIA</h1>
    <p>
      The Lighthouse of Alexandria (ὁ Φάρος τῆς Ἀλεξανδρείας) was built in 280 BC and was destroyed by earthquake in 1323 AD. Located on the island of Pharos in the harbor of Alexandria, the lighthouse may be the most famous lighthouse in history. The lighthouse was very different than modern lighthouses in that it was built in three stages, all sloping inward. Built of marble blocks with lead mortar; the lowest was square, the next octagonal, and the top cylindrical. Within the lighthouse was a ramp and "dumbwaiter" that allowed wood to be transported to the fire that burned at night.
      Inside the open top of the lighthouse was a large curved mirror that was used to reflect the sunlight during the day and the fire at night. It is said that mariners could see the light up to 35 miles away. Legends have it that the light was so bright it could be used to burn enemy ships.
      There are many stories about its ultimate demise, however, the most likely cause is believed to be as many as 22 earthquakes between 320 AD and 1323 AD which led to its decommission.
      The Lighthouse of Alexandria was so famous in ancient times that the island on which it stood, Pharos, became the root word for lighthouse in many languages (for example, "phare" in French).
    </p>
  </div>

</template>
