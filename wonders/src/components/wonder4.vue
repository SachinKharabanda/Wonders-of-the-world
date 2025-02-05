<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder4);
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
    <h1>MAUSOLEUM AT HALICARNASSUS</h1>
    <p>
      The Mausoleum at Halicarnassus (Μαυσωλεῖον Ἁλικαρνασσεύς) was built in 352 BC and was destroyed by earthquake in 1404 AD. The monument was built as a tomb for Mausolus, a governor in the Persian Empire. Sparing no expense, his widowed wife Artemisia (who was also his sister as was considered customary) commissioned well-known Greek architects and artists to design the tomb and sculptural reliefs for each of the four sides of the building.
      The monument was almost square, nearly 14 stories tall, and its base was more than 10,000 square feet. Each side of the tomb had nine massive columns, and the top was a stepped pyramid on which stood by a four-horse marble chariot in which there were images of Mausolus and Artemisia.
      The monument stood for nearly 17 centuries and was eventually destroyed by a series of earthquakes. And, like the Lighthouse of Alexandria, the tomb was so famous that Mausolus's name has become the root word for large tombs in many languages (for example, "mausoleo" in Spanish).

    </p>
  </div>

</template>
