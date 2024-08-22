<!-- UA024 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block">
              <h5>配送計画登録完了</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <p class="text-center mb-4" style="font-size: 16px;">
                配送計画の登録が完了しました。
              </p>
              <div class="d-md-flex justify-content-end mb-md-1">
                <RouterLink :to="`/admin/ship-plan-list/`" class="btn btn-primary fw-bold">
                  配送計画一覧へ戻る
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
