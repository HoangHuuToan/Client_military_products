<!-- UA013 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <a href="javascript:" class="fw-bold" data-bs-target="#modalBack" data-bs-toggle="modal"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i></a>
              <h5>入荷数量修正</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <p class="text-center fw-bold mb-0" style="font-size: 20px;">
                修正
              </p>
              <div class="cart">
                <ol class="progress-custom">
                  <li class="progress-current step1"></li>
                  <li class="progress-todo step2"></li>
                  <li class="progress-todo step3"></li>
                </ol>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">数量</label>
                      <div class="col-sm-9">
                        <input class="form-control" type="number" min="0"
                          style="height: 46px; background: #fff !important;" />
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">在庫数量</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">1kg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/edit-income-quantity-confirm/`" class="btn btn-primary fw-bold">
                  修正内容を確認する
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalBack" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="modal-title" id="">通知</h5>
          <p style="font-size: 16px;">修正を取り消します。よろしいですか？</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="button-box">
            <button type="button" @click="back()" class="btn btn--yes btn-primary me-3 fw-bold"
              data-bs-dismiss="modal">はい</button>
            <button type="button" class="btn btn--no mx-0 fw-bold" data-bs-dismiss="modal">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-custom li.step1:before {
  content: "1";
}

.progress-custom li.step2:before {
  content: "2";
}

.progress-custom li.step3:before {
  content: "3";
}
</style>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function back() {
  router.push({ name: 'income-detail-admin' });
}
</script>
