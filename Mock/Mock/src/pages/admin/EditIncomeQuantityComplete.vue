<!-- UA013 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block">
              <h5>入荷数量修正</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <p class="text-center fw-bold mb-0" style="font-size: 20px;">
                完了
              </p>
              <div class="cart">
                <ol class="progress-custom">
                  <li class="progress-done step1"></li>
                  <li class="progress-done step2"></li>
                  <li class="progress-current step3"></li>
                </ol>
              </div>
              <p class="text-center mb-5" style="font-size: 16px;">
                入荷数量を修正しました。
              </p>
              <div class="d-md-flex justify-content-end mb-md-1">
                <RouterLink :to="`/admin/income-list/`" class="btn btn-primary fw-bold">
                  入荷一覧へ戻る
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
.progress-custom li.step3:before {
  content: "3";
}
</style>
