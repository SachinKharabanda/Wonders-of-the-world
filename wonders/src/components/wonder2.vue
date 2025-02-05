<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder2);
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
    <h1>HANGING GARDENS OF BABYLON</h1>
    <p>
      The Hanging Gardens of Babylon was built in 600 BC and was destroyed by earthquake in 226 BC. The first and most interesting fact about the gardens is that there is significant controversy about whether the gardens existed at all.
      Whether they did or did not exist, there are many elaborate accounts and poetic descriptions of the gardens. They are generally believed to have been built by King Nebuchadrezzar II for his wife because she missed the gardens of her home. Some research suggests that it was an elaborate series of rooftop gardens. Another theory suggests that the gardens were built in the walls of the royal palace.
      Babylon, being in the middle of the desert, had no such natural greenery, however; calling into question of how such lushness would have survived in the dryness of the desert. Recent excavations have suggested the use of an exceptional system of irrigation using a cellar well in conjunction with a chain pump to raise the water to the gardens. Still, other theories even suggest that the gardens weren't in Babylon at all. Rather, that they were constructed by Sennacherib at the eastern bank of the Tigris river.
      Regardless of the final outcome, it is interesting to note that the imagination of the poets and ancient historians have created one of the Wonders of the World.
    </p>
  </div>

</template>
