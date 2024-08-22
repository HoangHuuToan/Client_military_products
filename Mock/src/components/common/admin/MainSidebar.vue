<template>
  <div class="sidebar-wrapper">
    <div id="sidebarEffect"></div>
    <div>
      <div class="logo-wrapper logo-wrapper-center justify-content-between">
        <a href="/">
          <div style="font-size: 20px; font-weight: bold; color: #fff;">道の駅スマート物流</div>
        </a>
        <div class="back-btn">
          <i class="fa fa-angle-left"></i>
        </div>
        <div class="toggle-sidebar">
          <i class="ri-apps-line status_toggle middle sidebar-toggle"></i>
        </div>
      </div>
      <div class="logo-wrapper logo-wrapper-center" style="padding: 0 30px 27px;">
        <div style="font-size: 18px; font-weight: bold; color: #fff;">ユーザー名</div>
      </div>
      <div class="logo-icon-wrapper">
        <a href="/">
          <div class="text-center" style="font-size: 28px; color: #fff;"><i class="ri-home-line"></i></div>
        </a>
      </div>
      <div class="logo-icon-wrapper" style="padding: 0 14px 14px">
        <div class="text-center" style="font-size: 24px; color: #fff;"><i class="ri-user-line"></i></div>
      </div>
      <nav class="sidebar-main sidebar-custom">
        <div id="sidebar-menu">
          <ul class="sidebar-links mt-0" id="simple-bar">
            <li class="back-btn"></li>
            <li class="sidebar-list">
              <a class="linear-icon-link sidebar-link sidebar-title" href="javascript:">
                <i class="ri-store-3-line"></i>
                <span>商品</span>
              </a>
              <ul class="sidebar-submenu">
                <li>
                  <a href="/product-list/">
                    商品一覧
                  </a>
                </li>
                <li>
                  <a href="/cart/">
                    カート
                  </a>
                </li>
              </ul>
            </li>
            <li class="sidebar-list">
              <a class="linear-icon-link sidebar-link sidebar-title" href="javascript:">
                <i class="ri-store-3-line"></i>
                <span>出品管理</span>
              </a>
              <ul class="sidebar-submenu">
                <li>
                  <RouterLink :to="`/admin/add-product/`">
                    出品登録
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="`/admin/product-list/`">
                    出品一覧
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="sidebar-list">
              <a class="linear-icon-link sidebar-link sidebar-title" href="javascript:">
                <i class="ri-archive-line"></i>
                <span>入荷管理</span>
              </a>
              <ul class="sidebar-submenu">
                <li>
                  <RouterLink :to="`/admin/income-list/`">
                    入荷一覧
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="sidebar-list">
              <a class="linear-icon-link sidebar-link sidebar-title" href="javascript:">
                <i class="ri-list-check-2"></i>
                <span>配送管理</span>
              </a>
              <ul class="sidebar-submenu">
                <li>
                  <RouterLink :to="`/admin/ship-plan-list/`">
                    配送計画登録
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="`/admin/ship-schedule/`">
                    配送スケジュール
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="sidebar-list">
              <a class="linear-icon-link sidebar-link sidebar-title" href="javascript:">
                <i class="ri-list-check-2"></i>
                <span>その他</span>
              </a>
              <ul class="sidebar-submenu">
                <li>
                  <a href="javascript:">プライバシーポリシー</a>
                </li>
                <li>
                  <a href="javascript:">マニュアル</a>
                </li>
                <li>
                  <a href="javascript:">ライセンス</a>
                </li>
                <li>
                  <a href="javascript:">利用規約</a>
                </li>
                <li>
                  <a data-bs-toggle="modal" data-bs-target="#modalLogout" href="javascript:">
                    <span>ログアウト</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<style>
.sidebar-custom .simplebar-wrapper {
  position: relative !important;
}

.sidebar-custom .simplebar-mask {
  top: 0 !important;
}

.sidebar-custom .simplebar-offset {
  top: 0 !important;
}

.sidebar-custom .sidebar-link span {
  font-family: "Noto Sans JP", sans-serif !important;
  font-weight: bold;
}

.sidebar-custom .sidebar-submenu li a {
  font-family: "Noto Sans JP", sans-serif !important;
}

.sidebar-custom .sidebar-submenu li a span {
  font-family: "Noto Sans JP", sans-serif !important;
}
</style>
