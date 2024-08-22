<template>
  <header class="pb-0">
    <div class="top-nav top-header sticky-header header-custom">
      <div class="container-fluid-lg">
        <div class="row">
          <div class="col-12">
            <div class="navbar-top">
              <button class="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu"
                v-if="router.currentRoute.value.name !== 'login' && router.currentRoute.value.name !== 'home-page'">
                <i class="fa-solid fa-bars text-white"></i>
              </button>
              <RouterLink :to="`/`" class="web-logo nav-logo">
                <h2 class="web-name">道の駅スマート物流</h2>
              </RouterLink>
              <div class="middle-box"
                v-if="router.currentRoute.value.name !== 'login' && router.currentRoute.value.name !== 'home-page'">
                <div class="search-box">
                  <div class="input-group">
                    <input type="search" class="form-control" id="txtsearching" v-model="txtseachname"
                      @change="updateDataSearchName" />
                    <div>{{ txtseachname }}</div>
                    <button class="btn" type="button" id="button-addon2" @click="toProductList()">
                      <i data-feather="search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="rightside-box"
                v-if="router.currentRoute.value.name !== 'login' && router.currentRoute.value.name !== 'home-page'">
                <div class="search-full">
                  <div class="input-group">
                    <span class="input-group-text">
                      <i data-feather="search" class="font-light"></i>
                    </span>
                    <input type="text" class="form-control search-type" placeholder="" />
                    <span class="input-group-text close-search">
                      <i data-feather="x" class="font-light"></i>
                    </span>
                  </div>
                </div>
                <ul class="right-side-menu">
                  <li class="right-side">
                    <div class="delivery-login-box">
                      <div class="delivery-icon">
                        <div class="search-box">
                          <i data-feather="search"></i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="right-side header-cart">
                    <RouterLink :to="`/cart/`">
                      <div class="onhover-dropdown header-badge">
                        <button type="button" class="btn p-0 position-relative header-wishlist text-white">
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span class="position-absolute top-0 start-100 translate-middle badge">2
                            <span class="visually-hidden">unread messages</span>
                          </span>
                        </button>
                      </div>
                    </RouterLink>
                  </li>
                  <li class="right-side onhover-dropdown">
                    <div class="delivery-login-box">
                      <div class="delivery-icon text-white me-3 icon-user">
                        <i class="fa-solid fa-user"></i>
                      </div>
                      <div class="delivery-detail">
                        <h6 class="text-white">工藤 新一</h6>
                      </div>
                    </div>
                    <div class="onhover-div onhover-div-login">
                      <ul class="user-box-name">
                        <li class="product-box-contain">
                          <a href="/admin/">販売業者管理サイト</a>
                        </li>
                        <li class="product-box-contain">
                          <a href="javascript:" class="dropdown-item"
                          data-bs-toggle="modal" data-bs-target="#logoutModal">
                            <span>ログアウト</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid-lg menu-custom"
      :class="[router.currentRoute.value.name !== 'login' && router.currentRoute.value.name !== 'home-page' ? '' : 'd-lg-none']">
      <div class="row">
        <div class="col-12">
          <div class="header-nav">
            <div class="header-nav-middle">
              <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                  <div class="offcanvas-header navbar-shadow">
                    <h5>メニュー</h5>
                    <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas"></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <RouterLink :to="`/`" class="nav-link nav-link-no-dropdown dropdown-toggle">
                          ホーム
                        </RouterLink>
                      </li>
                      <li class="nav-item dropdown" v-if="router.currentRoute.value.name !== 'login' && router.currentRoute.value.name === 'product-list'">
                        <a class="nav-link nav-link-dropdown dropdown-toggle" href="javascript:"
                          data-bs-toggle="dropdown">カテゴリー</a>
                        <ul class="dropdown-menu">
                          <li>
                            <RouterLink :to="`/product-list/`" class="dropdown-item">
                              果物
                            </RouterLink>
                          </li>
                          <li>
                            <RouterLink :to="`/product-list/`" class="dropdown-item">
                              野菜
                            </RouterLink>
                          </li>
                          <li>
                            <RouterLink :to="`/product-list/`" class="dropdown-item">
                              鮮魚
                            </RouterLink>
                          </li>
                          <li>
                            <RouterLink :to="`/product-list/`" class="dropdown-item">
                              精肉
                            </RouterLink>
                          </li>
                          <li>
                            <RouterLink :to="`/product-list/`" class="dropdown-item">
                              加工品
                            </RouterLink>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown dropdown-toggle" href="javascript:"
                          data-bs-toggle="dropdown">商品</a>
                        <ul class="dropdown-menu">
                          <li>
                            <RouterLink :to="`/product-list/`" class="dropdown-item">
                              商品一覧
                            </RouterLink>
                          </li>
                          <li>
                            <RouterLink :to="`/cart/`" class="dropdown-item">
                              カート
                            </RouterLink>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown dropdown-toggle" href="javascript:"
                          data-bs-toggle="dropdown">出品管理</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="/admin/add-product/" class="dropdown-item">
                              出品登録
                            </a>
                          </li>
                          <li>
                            <a href="/admin/product-list/" class="dropdown-item">
                              出品一覧
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown dropdown-toggle" href="javascript:"
                          data-bs-toggle="dropdown">入荷管理</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="/admin/income-list/" class="dropdown-item">
                              入荷一覧
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link nav-link-dropdown dropdown-toggle" href="javascript:"
                          data-bs-toggle="dropdown">配送管理</a>
                        <ul class="dropdown-menu">
                          <!-- <li>
                            <a href="javascript:" class="dropdown-item">
                              マッチング一覧
                            </a>
                          </li>
                          <li>
                            <a href="javascript:" class="dropdown-item">
                              配送パターン
                            </a>
                          </li> -->
                          <li>
                            <a href="/admin/ship-plan-list/" class="dropdown-item">
                              配送計画登録
                            </a>
                          </li>
                          <li>
                            <a href="/admin/ship-schedule/" class="dropdown-item">
                              配送スケジュール
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown" id="item-logout">
                        <a class="nav-link nav-link-dropdown dropdown-toggle" href="javascript:"
                          data-bs-toggle="dropdown">その他</a>
                        <ul class="dropdown-menu">
                          <li>
                            <a href="javascript:" class="dropdown-item">
                              プライバシーポリシー
                            </a>
                          </li>
                          <li>
                            <a href="javascript:" class="dropdown-item">
                              マニュアル
                            </a>
                          </li>
                          <li>
                            <a href="javascript:" class="dropdown-item">
                              ライセンス
                            </a>
                          </li>
                          <li>
                            <a href="javascript:" class="dropdown-item">
                              利用規約
                            </a>
                          </li>
                          <li>
                            <a href="javascript:" class="dropdown-item" data-bs-toggle="modal"
                              data-bs-target="#logoutModal">
                              <span>ログアウト</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="modal fade theme-modal" id="logoutModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">通知</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="modal-body pt-0" style="font-size: 16px;">ログアウトします。よろしいですか？</div>
        <div class="modal-footer pt-0">
          <button type="button" @click="logout()" class="btn btn-md fw-bold text-light theme-bg-color"
            data-bs-dismiss="modal">はい</button>
          <button type="button" class="btn btn-md btn-theme-outline fw-bold" data-bs-dismiss="modal">いいえ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.header-custom {
  background-color: var(--theme-color);
}

.all-category {
  width: 150px;
}

.nav-link-dropdown {
  margin-right: 12px;
}

.nav-link-no-dropdown::before {
  content: none !important;
}

.icon-user {
  font-size: 20px;
}

@media (max-width: 767px) {
  .menu-custom {
    background-color: var(--theme-color);
  }

  header .top-nav {
    padding-bottom: 24px;
  }

  header .top-nav .navbar-top .rightside-box .right-side-menu .right-side.header-cart {
    display: block;
  }

  header #item-logout {
    display: block;
  }

  .modal .modal-body .button-box {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .btn-primary {
    background-color: #0da487 !important;
    border-color: #0da487 !important;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1060;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .fade {
    transition: opacity 0.15s linear;
  }

  .modal.show .modal-dialog {
    transform: none;
  }

  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
  }

  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
  }

  .modal-fullscreen-sm-down .modal-content {
    height: auto !important;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .modal .modal-body h5 {
    font-weight: 700;
    font-size: calc(17px + (25 - 17) * ((100vw - 320px) / (1920 - 320)));
    margin-bottom: calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));
  }

  p {
    font-size: 13px;
    line-height: 1.7;
    letter-spacing: 0.7px;
  }

  .modal .btn-close {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .modal-title {
    line-height: 1.5;
  }

  .modal .modal-body .button-box {
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .modal .modal-body .btn--no {
    margin-left: auto;
    margin-right: 15px;
    color: #fff !important;
    background-color: #6c757d !important;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: calc(7px + (10 - 7) * ((100vw - 320px) / (1920 - 320))) calc(14px + (32 - 14) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    border: none;
    font-size: 14px;
    z-index: 0;
    white-space: nowrap;
    padding: 6px 7px;
  }
}

.web-name {
  color: #ffffff;
}
</style>
<script setup>
import { useRouter } from 'vue-router';
import { useAppStore } from 'src/stores/app-store';
import { ref } from 'vue';

const router = useRouter();
const appstore = useAppStore();
const txtseachname = ref(null);

function updateDataSearchName() {
  appstore.updatedatasearchname(txtseachname);
}

function toProductList() {
  router.push({ name: 'product-list' });
}

function logout() {
  sessionStorage.clear('AUTH_TOKEN');
  router.push({ name: 'login' });
}
</script>
