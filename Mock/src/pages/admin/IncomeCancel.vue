<!-- UA014 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block">
              <h5>入荷取消</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <p class="text-center mb-4" style="font-size: 16px;">
                入荷希望を取り消しました。
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
