<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder1);
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
    <h1>GREAT PYRAMID OF GIZA</h1>
    <p>
      The Great Pyramid of Giza was built in 2570 BC and is still standing today. It is believed to have taken 20 years and as many as 100,000 workers to complete the Great Pyramid, which was built as a tomb for the 4th dynasty Egyptian pharaoh named Khufu. It was built as part of a complex that included temples and many other pyramids.
      The outermost stones of the pyramid were highly polished white limestone, which were eventually loosened by an earthquake more than 600 years ago, and were removed to help build cities and mosques. When these casing stones were present, some believe that the pyramid was so large and bright that it could be seen from the moon.
      There is much speculation about the construction methodologies and intentions of the pyramid, including references to the moon, the Orion constellation, continental gravity, and more. What is known, however, is that the four sides of the base are more than 700 feet long, and differ in length by no more than 8 inches. Each side of the pyramid is almost perfectly aligned with the four cardinal points of the compass. And, the pyramid's dimensions covert to a ratio that equates to 2π with nearly perfect accuracy.
    </p>
  </div>

</template>
