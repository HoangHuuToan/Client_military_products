<template>
  <div class="col-12">
    <div class="slick-product-detail-image-1 product-main no-arrow" :key="keyCount">
      <div>
        <div class="slider-image">
          <img src="/images/fruit/product/1.png" id="img-1" data-zoom-image="/images/fruit/product/1.png" class="
                                                      img-fluid image_zoom_cls-0 blur-up lazyload" alt="">
        </div>
      </div>
      <div>
        <div class="slider-image">
          <img src="/images/fruit/product/2.png" data-zoom-image="/images/fruit/product/2.png" class="
                                                      img-fluid image_zoom_cls-1 blur-up lazyload" alt="">
        </div>
      </div>
      <div>
        <div class="slider-image">
          <img src="/images/fruit/product/3.png" data-zoom-image="/images/fruit/product/3.png" class="
                                                      img-fluid image_zoom_cls-2 blur-up lazyload" alt="">
        </div>
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="slick-product-detail-image-2 left-slider-image left-slider no-arrow slick-top" :key="keyCount">
      <div>
        <div class="sidebar-image">
          <img src="/images/fruit/product/1.png" class="img-fluid blur-up lazyload" alt="">
        </div>
      </div>
      <div>
        <div class="sidebar-image">
          <img src="/images/fruit/product/2.png" class="img-fluid blur-up lazyload" alt="">
        </div>
      </div>
      <div>
        <div class="sidebar-image">
          <img src="/images/fruit/product/3.png" class="img-fluid blur-up lazyload" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref, watch, onMounted, nextTick, computed,
} from 'vue';

const keyCount = ref(0);

const props = defineProps({
  slides: {
    type: Array,
    default: () => [],
  },
});
const slides = computed(() => props.slides);

onMounted(() => {
  keyCount.value++;
  nextTick(() => {
    window.initSlickProductDetailImage();
  });
});

watch(slides, () => {
  keyCount.value++;
  nextTick(() => {
    window.initSlickProductDetailImage();
  });
}, { deep: true });
</script>
