<!-- UA022 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <RouterLink :to="`/admin/ship-schedule/`" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i>
              </RouterLink>
              <h5>入出荷情報詳細</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品した道の駅</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">道の駅 OOC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出荷予定日時</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">2024-01-01 00:00</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">入荷予定日時</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">2024-12-31 23:59</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">配送ルート</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">
                          道の駅 OOC <br>
                          道の駅 〇OB <br>
                          物流センター 〇〇Z <br>
                          道の駅 OOA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品一覧</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">
                          〇〇A/20尾 <br>
                          OO赤牛A/700g
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">合計金額（税込）</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">100,000円</span>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">配送費（税込）</label>
                      <div class="col-sm-9">
                        <span class="form-control field-custom">100,000円</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
