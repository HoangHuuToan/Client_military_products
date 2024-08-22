<template>
  <main-header-second />
  <div class="content">
    <router-view/>
  </div>
  <main-footer/>
</template>
<style>
.content {
  padding-bottom: 65px;
}
</style>
<script setup>
import { onMounted } from 'vue';
import MainHeaderSecond from 'components/common/MainHeaderSecond.vue';
import MainFooter from 'components/common/MainFooter.vue';

onMounted(() => {
  const scripts = [
    '/js/jquery-3.6.0.min.js',
    '/js/jquery-ui.min.js',
    '/js/bootstrap/bootstrap.bundle.min.js',
    '/js/bootstrap/bootstrap-notify.min.js',
    '/js/bootstrap/popper.min.js',
    '/js/feather/feather.min.js',
    '/js/feather/feather-icon.js',
    '/js/lazysizes.min.js',
    '/js/slick/slick.js',
    '/js/slick/slick-animation.min.js',
    '/js/custom-slick-animated.js',
    '/js/slick/custom_slick.js',
    '/js/ion.rangeSlider.min.js',
    '/js/auto-height.js',
    '/js/quantity-2.js',
    '/js/fly-cart.js',
    '/js/clipboard.min.js',
    '/js/copy-clipboard.js',
    '/js/wow.min.js',
    '/js/custom-wow.js',
    '/js/script.js',
    '/js/jquery.elevatezoom.js',
    '/js/zoom-filter.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
