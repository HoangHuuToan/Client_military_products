<template>
  <div class="order-md-2">
    <div class="slick-product-detail-image-admin-1 product-main-2 no-arrow" :key="keyCount">
      <div>
        <div class="slider-image">
          <img src="/images/product/1.jpg" id="img-1" data-zoom-image="/images/product/1.jpg"
            class="img-fluid image_zoom_cls-0 blur-up lazyload" alt="" width="100%">
        </div>
      </div>
      <div>
        <div class="slider-image">
          <img src="/images/product/2.jpg" data-zoom-image="/images/product/2.jpg"
            class="img-fluid image_zoom_cls-1 blur-up lazyload" alt="" width="100%">
        </div>
      </div>
      <div>
        <div class="slider-image">
          <img src="/images/product/3.jpg" data-zoom-image="/images/product/3.jpg"
            class="img-fluid image_zoom_cls-2 blur-up lazyload" alt="" width="100%">
        </div>
      </div>
    </div>
  </div>
  <div class="order-md-1">
    <div class="slick-product-detail-image-admin-2 left-slider-image-2 left-slider no-arrow slick-top" :key="keyCount">
      <div>
        <div class="sidebar-image">
          <img src="/images/product/1.jpg" class="img-fluid blur-up lazyload" alt="">
        </div>
      </div>
      <div>
        <div class="sidebar-image">
          <img src="/images/product/2.jpg" class="img-fluid blur-up lazyload" alt="">
        </div>
      </div>
      <div>
        <div class="sidebar-image">
          <img src="/images/product/3.jpg" class="img-fluid blur-up lazyload" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  user-select: none;
  touch-action: pan-y;
}

.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }

  &.dragging {
    cursor: pointer;
    cursor: hand;
  }
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:before,
  &:after {
    content: "";
    display: table;
  }

  &:after {
    clear: both;
  }

  .slick-loading & {
    visibility: hidden;
  }
}

.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;

  [dir="rtl"] & {
    float: right;
  }

  img {
    display: block;
  }

  &.slick-loading img {
    display: none;
  }

  display: none;

  &.dragging img {
    pointer-events: none;
  }

  .slick-initialized & {
    display: block;
  }

  .slick-loading & {
    visibility: hidden;
  }

  .slick-vertical & {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
}

.slick-arrow.slick-hidden {
  display: none;
}

@media only screen and (min-width: 768px) {
  .slide-custom {
    display: flex;
  }

  .slide-custom .order-md-1 {
    width: 20%;
  }

  .slide-custom .order-md-2 {
    width: 80%;
  }
}
</style>

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
    window.initSlickProductDetailImageAdmin();
  });
});

watch(slides, () => {
  keyCount.value++;
  nextTick(() => {
    window.initSlickProductDetailImageAdmin();
  });
}, { deep: true });
</script>
