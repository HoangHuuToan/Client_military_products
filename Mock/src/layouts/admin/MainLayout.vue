<template>
  <div class="tap-top">
    <span class="lnr lnr-chevron-up"></span>
  </div>
  <div class="page-wrapper compact-wrapper" id="pageWrapper">
    <main-header />
    <div class="page-body-wrapper">
      <main-sidebar />
      <div class="page-body">
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.path" />
        </router-view>
        <main-footer />
      </div>
    </div>
  </div>
  <div id="modalLogout" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="modal-title" id="">通知</h5>
          <p style="font-size: 16px;">ログアウトします。よろしいですか？</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="button-box">
            <button type="button" @click="logout()" class="btn btn--yes btn-primary me-3 fw-bold"
              data-bs-dismiss="modal">はい</button>
            <button type="button" class="btn btn--no mx-0 fw-bold" data-bs-dismiss="modal">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
@import "/css/theme/admin/linearicon.css";
@import "/css/theme/admin/vendors/font-awesome.css";
@import "/css/theme/admin/vendors/themify.css";
@import "/css/theme/admin/vendors/dropzone.css";
@import "/css/theme/admin/vendors/feather-icon.css";
@import "/css/theme/admin/remixicon.css";
@import "/css/theme/admin/dropzone.css";
@import "/css/theme/admin/vendors/scrollbar.css";
@import "/css/theme/admin/vendors/animate.css";
@import "/css/theme/admin/vendors/chartist.css";
@import "/css/theme/admin/vendors/date-picker.css";
@import "/css/theme/admin/vendors/bootstrap.css";
@import "/css/theme/admin/vendors/bootstrap-tagsinput.css";
@import "/css/theme/admin/style.css";

body {
  font-family: "Noto Sans JP", sans-serif;
}

.progress-custom {
  padding: 0;
  margin: 40px 0;
  display: flex;
  align-items: center;
}

.progress-custom li {
  display: inline-block;
  font-family: "Public Sans", sans-serif;
  text-align: center;
  margin: 10px 0;
}

.progress-custom li:before {
  position: relative;
  top: -2px;
  float: left;
  left: 50% !important;
  line-height: 1;
  transform: translate(-50%, -50%) !important;
}

.progress-custom li.progress-todo {
  color: silver;
  border-top: 4px solid silver;
  width: 100% !important;
}

.progress-custom li.progress-todo:before {
  background: silver;
  color: #fff;
  width: 30px;
  height: 30px;
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 900;
  line-height: 2.2em;
  border-radius: 2.2em;
}

.progress-custom li.progress-current {
  color: #212529;
  border-top: 4px solid var(--theme-color);
  width: 100% !important;
}

.progress-custom li.progress-current:before {
  background: var(--theme-color);
  color: #fff;
  width: 30px;
  height: 30px;
  font-family: "Public Sans", sans-serif;
  font-size: 14px;
  font-weight: 900;
  line-height: 2.2em;
  border-radius: 2.2em;
}

.progress-custom li.progress-done {
  color: #212529;
  border-top: 4px solid var(--theme-color);
  width: 100% !important;
}

.progress-custom li.progress-done:before {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f00c";
  color: #fff;
  background-color: var(--theme-color);
  width: 30px;
  height: 30px;
  line-height: 2.2em;
  border: none;
  border-radius: 2.2em;
}

.ck-editor-custom .ck.ck-editor {
  border-radius: .25rem;
  overflow: hidden;
}

.ck-editor-custom .ck.ck-content {
  background-color: #fff !important;
}

.upload-custom {
  aspect-ratio: 1;
  min-height: unset !important;
}

.upload-custom .dz-preview {
  height: 100% !important;
  width: 100% !important;
  background: #fff;
  margin: 0 !important;
}

.upload-custom .dz-image img {
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  cursor: pointer;
}

.upload-custom i::before {
  cursor: pointer;
}

.checkbox-custom input:before {
  left: 0.25rem;
  top: 0.25rem;
  border: 3px solid var(--theme-color);
  border-top-style: none;
  border-right-style: none;
}

.form-control.field-custom {
  border-color: #efefef;
  background-color: #f9f9f6;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
  color: #898989;
  padding: 10px;
  outline: inherit;
  box-shadow: none;
}

.form-control.area-field-custom {
  height: 138px;
  overflow: auto;
}
</style>

<script setup>
import { onMounted } from 'vue';
import MainHeader from 'components/common/admin/MainHeader.vue';
import MainSidebar from 'components/common/admin/MainSidebar.vue';
import MainFooter from 'components/common/admin/MainFooter.vue';

function logout() {
  sessionStorage.clear('AUTH_TOKEN');
  window.location.href = '/login/';
}

onMounted(() => {
  const scripts = [
    '/js/bootstrap/bootstrap.bundle.min.js',
    '/js/icons/feather-icon/feather.min.js',
    '/js/icons/feather-icon/feather-icon.js',
    '/js/scrollbar/simplebar.js',
    '/js/scrollbar/custom.js',
    '/js/config.js',
    '/js/bootstrap-tagsinput.min.js',
    '/js/sidebar-menu.js',
    '/js/dropzone/dropzone.js',
    '/js/dropzone/dropzone-script.js',
    '/js/notify/bootstrap-notify.min.js',
    '/js/notify/index.js',
    '/js/sidebareffect.js',
    '/js/lazysizes.min.js',
    '/js/custom-slick-animated.js',
    '/js/slick/custom_slick.js',
    '/js/admin/script.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
