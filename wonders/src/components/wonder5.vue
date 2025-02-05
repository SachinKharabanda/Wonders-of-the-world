<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder5);
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
    <h1>COLOSSUS OF RHODES</h1>
    <p>
      The Colossus of Rhodes (Κολοσσός της Ρόδου) was built in 282 BC and was destroyed by earthquake in 226 BC. In 294 BC, the people of the island of Rhodes began building a colossal statue of the sun god Helios. They believed that it was because of his blessings that they were able to withstand a long siege on the island and emerge victorious.
      The Colossus was built with bronze, reinforced with iron, and weighted with stones. While it is often depicted straddling Mandrákion harbor, this is now considered technically impossible; and therefore, it likely stood beside the harbor.
      The statue was toppled by an earthquake in 226 BC. It snapped at the knees and fell over on to the land. The Oracle of Delphi suggested that it fell because the people of Rhodes had offended Helios, and they decided not to rebuild it.
      The statue remained on the ground until 654 AD., and even broken, it was so impressive that many traveled to see it.
    </p>
  </div>

</template>
