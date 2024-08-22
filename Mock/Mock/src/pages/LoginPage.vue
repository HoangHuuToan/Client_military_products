<template>
  <div v-if="isShow == true">
    <section class="breadcrumb-section pt-0">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-contain">
              <h2 class="mb-2">ログイン</h2>
              <nav>
                <ol class="breadcrumb mb-0">
                  <li class="breadcrumb-item">
                    <RouterLink :to="`/`">
                      <i class="fa-solid fa-house"></i>
                    </RouterLink>
                  </li>
                  <li class="breadcrumb-item active">ログイン</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="log-in-section background-image-2 section-b-space">
      <div class="container-fluid-lg w-100">
        <div class="row">
          <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
            <div class="image-contain">
              <img src="/images/inner-page/log-in.png" class="img-fluid" alt="">
            </div>
          </div>
          <div class="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
            <div class="log-in-box">
              <div class="input-box">
                <form class="row g-4" action="javascript:" @submit="login()">
                  <div class="col-12">
                    <div class="form-floating theme-form-floating log-in-form">
                      <input type="text" pattern="[a-zA-Z0-9]+" class="form-control" id="id" placeholder="ID" required>
                      <label for="id">ID</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating theme-form-floating log-in-form">
                      <input type="password" pattern="[a-zA-Z0-9]+" class="form-control" id="password"
                        placeholder="パスワード" required>
                      <label for="password">パスワード</label>
                      <span class="password-toggle-icon d-flex"><i class="fas fa-eye"></i></span>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-animation w-100 justify-content-center me-0 me-md-3 mb-2"
                      type="submit">ログイン</button>
                    <button class="btn btn-animation btn-animation-green w-100 justify-content-center" type="button"
                      onclick="location.href = 'javascript:'">QRコードログイン</button>
                  </div>
                  <div class="col-12">
                    <div class="forgot-box justify-content-end">
                      <a href="javascript:" class="forgot-password">パスワードを忘れた方はこちらへ</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="modal fade theme-modal" id="loginUnsuccessfulModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title">通知</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="modal-body pt-0" style="font-size: 16px;">IDまたはパスワードが違います。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.password-toggle-icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
}

.password-toggle-icon i {
  font-size: 18px;
  line-height: 1;
  color: #212529;
  transition: color 0.3s ease-in-out;
}

.password-toggle-icon i {
  font-size: 18px;
  line-height: 1;
  color: #212529;
  transition: color 0.3s ease-in-out;
}

.password-toggle-icon i.fa-eye {
  padding-right: 0.75rem;
}

.password-toggle-icon i.fa-eye-slash {
  padding-right: 0.7rem;
}

.btn-animation-green {
  background: #0da487 !important;
  background: linear-gradient(90deg, #0da487 0%, #0e947a 100%) !important;
}

.btn-animation-green::after {
  background: #0da487 !important;
  background: linear-gradient(90deg, #0e947a 0%, #0da487 100%) !important;
}

@media (min-width: 992px) {
  .row .col-lg-6 {
    width: 50%;
  }
}

@media (min-width: 1200px) {
  .row .col-xl-5 {
    width: 41.66666667%;
  }
}

@media (min-width: 1400px) {
  .row .col-xxl-4 {
    width: 33.33333333%;
  }

  .row .col-xxl-6 {
    width: 50%;
  }
}
</style>

<script setup>
import {
  onBeforeMount, onMounted, ref, reactive, nextTick,
} from 'vue';
import { useRouter } from 'vue-router';
import AuthService from 'services/auth.service';

const router = useRouter();
const isShow = ref(false);

async function checkLogin() {
  const token = sessionStorage.getItem('AUTH_TOKEN');
  const resultCheckLogin = await AuthService.check(token);
  if (resultCheckLogin) {
    router.push({ name: 'product-list' });
  } else {
    isShow.value = true;
    await nextTick();
    const passwordField = document.getElementById('password');
    const togglePassword = document.querySelector('.password-toggle-icon i');
    togglePassword.addEventListener('click', () => {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        togglePassword.classList.remove('fa-eye');
        togglePassword.classList.add('fa-eye-slash');
      } else {
        passwordField.type = 'password';
        togglePassword.classList.remove('fa-eye-slash');
        togglePassword.classList.add('fa-eye');
      }
    });
  }
}

async function login() {
  const loginInfo = reactive({
    peerReview: null,
    connection: null,
    initial: document.getElementById('id').value,
    password: document.getElementById('password').value,
  });
  const result = await AuthService.login(loginInfo);
  if (result) {
    router.push({ name: 'product-list' });
  } else {
    window.showLoginUnsuccessfulModal();
  }
}

onBeforeMount(() => {
  checkLogin();
});

onMounted(() => {
  const scripts = [
    '/js/feather/feather.min.js',
    '/js/feather/feather-icon.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
