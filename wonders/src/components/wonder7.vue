<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder7);
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
    <h1>TEMPLE OF ARTEMIS AT EPHESUS</h1>
    <p>
      The Temple of Artemis at Ephesus (Ἀρτεμίσιον) was built in 550 BC and was destroyed by fire in 356 BC. The Temple of Artemis at Ephesus was built and rebuilt over the course of many years. The most famous was built in about 550 BC and was funded by King Croesus of Lydia.
      Unlike many other temples of its time, it was built of marble and glittered with gold. The temple's foundation was over 180 by 350 feet and its steps led to a high platform on which stood more than one hundred beautifully sculptured columns that supported its roof. At least twice the size of the Parthenon, it was so breathtaking it was said to rise to the clouds.
      The temple housed many incredible works of art, but the most famous was the statue of Artemis herself. Although the original no longer exists, it was thought to have been made of gold and other beautiful materials. Her legs were covered with animals and bees and the top of the body covered with breasts symbolizing fertility.
      Although destroyed and rebuilt many times, and ultimately left to be destroyed by man, nature and neglect, the most famous version of the temple was destroyed by arson committed by a man named Herostratus on the night Alexander the Great was born.
      .
    </p>
  </div>

</template>
