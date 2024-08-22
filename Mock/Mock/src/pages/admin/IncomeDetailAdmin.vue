<!-- UA012 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <RouterLink :to="`/admin/income-list/`" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i>
              </RouterLink>
              <h5>入荷情報詳細</h5>
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
                        <span class="form-control field-custom">入荷希望依頼中</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/edit-income-quantity/`"
                  class="btn btn-primary me-0 me-md-3 mb-2 mb-md-0 fw-bold">
                  入荷希望数量を修正する
                </RouterLink>
                <a class="btn btn-primary fw-bold" href="javascript:" data-bs-target="#modalCancel"
                  data-bs-toggle="modal">
                  入荷希望を取消する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalCancel" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="modal-title" id="">通知</h5>
          <p style="font-size: 16px;">入荷希望を取り消します。よろしいですか？</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="button-box">
            <button type="button" @click="toIncomeCancel()" class="btn btn--yes btn-primary me-3 fw-bold"
              data-bs-dismiss="modal">はい</button>
            <button type="button" class="btn btn--no mx-0 fw-bold" data-bs-dismiss="modal">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import SlickProductImage from 'components/slick-slider/admin/ProductImage.vue';

const router = useRouter();

function toIncomeCancel() {
  router.push({ name: 'income-cancel-admin' });
}
</script>
