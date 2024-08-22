<template>
  <section class="breadcrumb-section pt-0">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-contain">
            <h2>新鮮な桃</h2>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <RouterLink :to="`/`">
                    <i class="fa-solid fa-house"></i>
                  </RouterLink>
                </li>
                <li class="breadcrumb-item">
                  <RouterLink :to="`/product-list/`">
                    出品一覧
                  </RouterLink>
                </li>
                <li class="breadcrumb-item active">新鮮な桃</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="product-section">
    <div class="container-fluid-lg">
      <div class="row m-auto">
        <div class="col-xxl-9 col-xl-12 col-lg-7 wow fadeInUp m-auto  ">
          <div class="row g-4">
            <div class="col-xl-4 wow fadeInUp">
              <div class="product-left-box">
                <div class="row g-sm-4 g-2">
                  <slick-product-image />
                </div>
              </div>
            </div>
            <div class="col-xl-8 wow fadeInUp">
              <div class="right-box-contain pickup-box">
                <div class="description-date">
                  <h4 class="description-date-title">商品情報</h4>
                </div>
                <div class="product-information">
                  <table>
                    <tr>
                      <td>価格順</td>
                      <td>2000円（税込)</td>
                    </tr>
                    <tr>
                      <td>在庫数</td>
                      <td>20個</td>
                    </tr>
                    <tr>
                      <td>出品開始日時</td>
                      <td>2024-10-05 17:00</td>
                    </tr>
                    <tr>
                      <td>出品終了日時</td>
                      <td>2024-10-06 17:00</td>
                    </tr>
                    <tr>
                      <td>カテゴリ</td>
                      <td>果物</td>
                    </tr>
                  </table>
                </div>
                <div class="product-information pickup-box">
                  <table>
                    <tr>
                      <td>賞味期限</td>
                      <td>2024-10-05 17:00</td>
                    </tr>
                    <tr>
                      <td>消費期限</td>
                      <td>2024-10-06 17:00</td>
                    </tr>
                    <tr>
                      <td>生産者</td>
                      <td>OO OO</td>
                    </tr>
                  </table>
                </div>
                <div class="pickup-box">
                  <div class="description-seller">
                    <h4 class="description-seller-title">出品者情報</h4>
                  </div>
                  <div class="product-information">
                    <table>
                      <tr>
                        <td>道の駅</td>
                        <td>OOA</td>
                      </tr>
                      <tr>
                        <td>名前</td>
                        <td>OO OO</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="note-box product-package">
                  <div class="cart_qty qty-box product-qty">
                    <h4 class="qty-title">入荷希望数</h4>
                    <div class="input-group">
                      <button type="button" class="qty-left-minus" data-type="minus" data-field="">
                        <i class="fa fa-minus"></i>
                      </button>
                      <input class="form-control input-number qty-input" type="text" name="quantity" value="1" />
                      <button type="button" class="qty-right-plus" data-type="plus" data-field="">
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="box-total-detailsp">
                    <div class="price-title m-auto">
                      <h4 class="price-title">合計金額（税込み）</h4>
                    </div>
                    <div class="total m-auto">
                      2000円
                    </div>
                  </div>
                  <button @click="toCart()" class="btn btn-md bg-dark cart-button text-white w-25">
                    カートへ追加
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-b-space">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="product-section-box m-0">
            <ul class="nav nav-tabs custom-nav" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description"
                  type="button" role="tab">
                  商品説明
                </button>
              </li>
            </ul>
            <div class="tab-content custom-tab" id="myTabContent">
              <div class="tab-pane fade show active" id="description" role="tabpanel">
                <div class="product-description">
                  <div class="description">
                    <p class="description-title-contain" >この新鮮な桃は、最高の桃畑から厳選され、芳香で甘く、栄養豊富な桃をお届けします。新鮮な桃は自然な甘さがあり、爽やかな香りと柔らかくてジューシーな果肉を持っています。</p>
                    <span class="description-utinity">商品の特徴 : </span> <br>

                    <span class="description-title">原産地 :</span>
                    <p class="description-constain">熊本</p>

                    <span class="description-title">風味 :</span>
                    <p class="description-constain">自然な軽い酸味と共に、甘く爽やかな味わい。</p>

                    <span class="description-title">サイズ : </span>
                    <p class="description-constain">均一で食べやすいサイズ、すべての対象者に適しています。</p>

                    <span class="description-title">色 : </span>
                    <p class="description-constain">ピンクがかった美しい皮と明るいオレンジ色の果肉。</p>

                    <span class="description-title">新鮮さ : </span>
                    <p class="description-constain">収穫してその日のうちに包装され、新鮮さと自然の風味を保ちます。</p>

                    <span class="description-title">栄養 : </span>
                    <p class="description-constain">ビタミンA、ビタミンC、食物繊維。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
table {
  border: unset !important;
}
.contain-text {
  font-size: 18px;
  font-weight: 400;
}
.description-utinity {
  font-size: 16px;
  font-weight: bold;
}
.description-seller-title,
.description-date-title{
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
}
.description-title {
  font-size: 16px;
  font-weight: bold;
  padding-left: 20px;
}
.description-constain {
  padding-left: 35px;
}
.description-title-contain {
  font-size: 18px !important;
}
.product-information {
  margin-top: 15px;
}
.product-information td {
  padding-right:20px;
  font-size: 16px;
  color: #4a5568;
}
.box-total-detailsp
.price-title, .qty-title {
  font-size: 14px;
}
.total {
  text-align: center;
  font-size: 20px;
}
.description {
  padding-left: 35px;
}
</style>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import SlickProductImage from 'src/components/slick-slider/product-detail/ProductImage.vue';

const router = useRouter();

function toCart() {
  router.push({ name: 'cart' });
}

onMounted(() => {
  const scripts = [
    '/js/feather/feather.min.js',
    '/js/feather/feather-icon.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
