<!-- UA008 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <RouterLink :to="`/admin/product-list/`" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i>
              </RouterLink>
              <h5>出品情報詳細</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品画像</label>
                      <div class="col-sm-9 slide-custom">
                        <slick-product-image />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品名</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">商品名</span>
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品説明</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom area-field-custom">商品説明</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">カテゴリ</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">果物</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品単価（税込み）</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">¥100,000</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">数量</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">1kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <form class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品状態</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">出品中</span>
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品開始日時</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">2024-01-01 00:00</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品終了日時</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">2024-12-31 23:59</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">公開</label>
                      <div class="col-sm-9">
                        <div class="form-check user-checkbox ps-0 mb-0 checkbox-custom">
                          <input class="checkbox_animated check-it" type="checkbox" checked="true" />
                          <label class="form-label-title mb-0">出品を公開する</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/edit-product/`" class="btn btn-primary fw-bold">
                  出品内容を修正する
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SlickProductImage from 'components/slick-slider/admin/ProductImage.vue';
</script>
