import { ref } from "vue";

/**
 * useCarousel - A reusable Vue composable for handling an image carousel
 * @param {Array} imagesArray - An array of image URLs
 */
export function useCarousel(imagesArray) {
  const images = ref(imagesArray);
  const currentIndex = ref(0);

  /**
   * Moves the carousel forward by 1 image.
   * Loops back to the start if at the end.
   */
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  };

  /**
   * Moves the carousel backward by 1 image.
   * Loops to the last image if at the beginning.
   */
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
  };

  return {
    images,
    currentIndex,
    nextSlide,
    prevSlide,
  };
}
