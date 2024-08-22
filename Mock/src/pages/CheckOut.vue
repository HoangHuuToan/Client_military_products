<template>
  <!-- Breadcrumb Section Start -->
  <section class="breadcrumb-section pt-0">
      <div class="container-fluid-lg">
          <div class="row">
              <div class="col-12">
                  <div class="breadcrumb-contain">
                      <h2>入荷希望</h2>
                      <nav>
                          <ol class="breadcrumb mb-0">
                              <li class="breadcrumb-item">
                                  <a href="/">
                                      <i class="fa-solid fa-house"></i>
                                  </a>
                              </li>
                              <li class="breadcrumb-item">
                                <a href="/cart">
                                  カート
                                </a>
                              </li>
                              <li class="breadcrumb-item active">入荷希望</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- Breadcrumb Section End -->

  <section class="checkout-section-2 section-b-space">
    <div class="container-fluid-lg">
      <div class="row g-sm-4 g-3">
        <div class="col-lg-8">
          <div class="left-sidebar-checkout">
            <div class="checkout-detail-box">
              <ul>
                <li>
                  <div class="checkout-box">
                    <div class="checkout-title">
                      <h4>商品受取場所</h4>
                    </div>
                    <div class="checkout-detail">
                      <div class="col-sm-6">
                        <select class="js-example-basic-single w-100"
                        style="height: 42px; background: #fff !important; border-radius: .25rem;">
                          <option value="">
                            自身の道の駅
                          </option>
                          <option value="">
                            出品元まで受け取りに行く
                          </option>
                          <optgroup label="以降の選択肢については">
                            <option>
                              道の駅 ○○
                            </option>
                            <option>
                              物流センター ○○
                            </option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="right-side-summery-box">
            <div class="summery-box-2">
              <div class="summery-header">
                <h3>合計金額（税込）</h3>
              </div>
              <h4 class="price">19999.28円</h4>
            </div>

            <button
              class="btn theme-bg-color text-white btn-md w-100 mt-4 fw-bold"
              onclick="location.href = 'order-success';"
            >
              出品者へ入荷を希望する
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { ref } from 'vue';

// const radioAddress = ref();
</script>

<style scoped>
.checkout-section-2
  .left-sidebar-checkout
  .checkout-detail-box
  > ul
  > li
  .checkout-box {
  margin-left: 0;
}
</style>
