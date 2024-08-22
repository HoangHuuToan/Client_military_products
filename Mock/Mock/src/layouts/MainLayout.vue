<template>
  <main-header />
  <div style="padding-bottom: 66px;">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
  <main-footer />
</template>
<style>
@import "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
@import "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
@import "/css/theme/vendors/bootstrap.css";
@import "/css/theme/animate.min.css";
@import "/css/theme/vendors/ion.rangeSlider.min.css";
@import "/css/theme/font-style.css";
@import "/css/theme/style.css";

body {
  font-family: "Noto Sans JP", sans-serif;
}

header .onhover-dropdown .onhover-div-login {
  width: 200px;
}

.breadcrumb-section .breadcrumb-contain nav .breadcrumb .breadcrumb-item+.breadcrumb-item {
  margin-top: 2px;
}

.slick-loading .slick-list {
  background: #fff url("/ajax-loader.gif") center center no-repeat !important;
}
</style>

<script setup>
import { onMounted } from 'vue';
import MainHeader from 'components/common/MainHeader.vue';
import MainFooter from 'components/common/MainFooter.vue';

onMounted(() => {
  const scripts = [
    // '/js/jquery-3.6.0.min.js',
    '/js/jquery-ui.min.js',
    '/js/bootstrap/bootstrap.bundle.min.js',
    '/js/bootstrap/bootstrap-notify.min.js',
    '/js/bootstrap/popper.min.js',
    // '/js/feather/feather.min.js',
    // '/js/feather/feather-icon.js',
    '/js/lazysizes.min.js',
    // '/js/slick/slick.js',
    // '/js/slick/slick-animation.min.js',
    '/js/custom-slick-animated.js',
    '/js/slick/custom_slick.js',
    '/js/ion.rangeSlider.min.js',
    '/js/auto-height.js',
    '/js/quantity-2.js',
    '/js/fly-cart.js',
    '/js/clipboard.min.js',
    '/js/copy-clipboard.js',
    // '/js/wow.min.js',
    '/js/custom-wow.js',
    // '/js/jquery.elevatezoom.js',
    // '/js/zoom-filter.js',
    '/js/filter-sidebar.js',
    '/js/script.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
