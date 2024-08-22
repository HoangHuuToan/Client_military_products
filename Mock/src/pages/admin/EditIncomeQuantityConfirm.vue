<!-- UA013 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <RouterLink :to="`/admin/edit-income-quantity/`" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i>
              </RouterLink>
              <h5>入荷数量修正</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <p class="text-center fw-bold mb-0" style="font-size: 20px;">
                確認
              </p>
              <div class="cart">
                <ol class="progress-custom">
                  <li class="progress-done step1"></li>
                  <li class="progress-current step2"></li>
                  <li class="progress-todo step3"></li>
                </ol>
              </div>
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
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品した道の駅</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">出品した道の駅</span>
                      </div>
                    </div>
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
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品単価</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">¥100,000</span>
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">数量</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">1kg</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">金額（税込み）</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">¥100,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <form class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">入荷希望依頼日時</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">2024-01-01 00:00</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">取引状態</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">入荷希望依頼中（数量修正）</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/edit-income-quantity-complete/`" class="btn btn-primary fw-bold">
                  修正内容を確定する
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-custom li.step2:before {
  content: "2";
}

.progress-custom li.step3:before {
  content: "3";
}
</style>

<script setup>
import SlickProductImage from 'components/slick-slider/admin/ProductImage.vue';
</script>
