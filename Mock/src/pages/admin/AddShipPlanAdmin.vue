<!-- UA024 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <a href="javascript:" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i></a>
              <h5>道の駅</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center select-custom">
                      <label class="col-sm-4 form-label-title mb-2 mb-md-0">入荷希望者が指定した商品受取場所</label>
                      <div class="col-sm-8">
                        <select class="js-example-basic-single w-100"
                          style="height: 46px; background: #fff !important; border-radius: .25rem;">
                          <option disabled selected>入荷希望者が指定した商品受取場所の選択</option>
                          <option>入荷希望者が指定した商品受取場所</option>
                        </select>
                      </div>
                    </div>
                    <div class="row align-items-center select-custom">
                      <label class="col-sm-4 form-label-title mb-2 mb-md-0">最寄りの配送経由地点</label>
                      <div class="col-sm-8">
                        <select class="js-example-basic-single w-100"
                          style="height: 46px; background: #fff !important; border-radius: .25rem;">
                          <option disabled selected>最寄りの配送経由地点の選択</option>
                          <option>最寄りの配送経由地点</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-4 form-label-title mb-2 mb-md-0">出荷予定日時</label>
                      <div class="col-sm-4">
                        <input class="form-control" type="date" style="height: 46px; background: #fff !important;" />
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-4 form-label-title mb-2 mb-md-0">入荷予定日時</label>
                      <div class="col-sm-4">
                        <input class="form-control" type="date" style="height: 46px; background: #fff !important;" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <form class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-4 form-label-title mb-2 mb-md-0">配送費（税込）</label>
                      <div class="col-sm-8">
                        <span class="form-control field-custom">¥100,000</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/add-ship-plan-complete/`" class="btn btn-primary fw-bold">
                  配送計画を登録する
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
