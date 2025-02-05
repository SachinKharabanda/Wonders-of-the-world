<script setup>
  import { useCarousel } from "../composables/useCarousel"; // Use relative path
  import { wonderImages } from "../data/imageData"; // Use relative path

  // Setup carousel with images for this wonder
  const { images, currentIndex, nextSlide, prevSlide } = useCarousel(wonderImages.wonder3);
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
    <h1>STATUE OF ZEUS AT OLYMPIA</h1>
    <p>
      The Statue of Zeus at Olympia (Δίας μυθολογία) was built in 430 BC and was destroyed by fire in 426 AD. Carved from ivory, on a throne of cedarwood, the statue was created by the Greek sculptor Phidias around 430 BC. In its right hand was a life-size statue of Nike, the goddess of victory, and in its left was a large sceptre topped with an eagle. The statue, nearly 40 feet tall, was said to fill the entire width of the one of the aisles of the Temple of Zeus, and its head nearly scraped the temple's ceiling.
      In 426 AD, the temple was destroyed and many historians believe that the statue was destroyed at that time. Others believe, however, that the statue was moved to Constantinople (now Istanbul) and was destroyed about 50 years later.
      Although many copies of the statue were made during its 800+ year lifespan, none are known to have survived.
    </p>
  </div>

</template>
