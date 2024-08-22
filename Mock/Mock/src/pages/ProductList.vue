<template>
  <section class="breadcrumb-section pt-0">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-contain">
            <h2>出品一覧</h2>
            <nav>
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <RouterLink :to="`/`">
                    <i class="fa-solid fa-house"></i>
                  </RouterLink>
                </li>
                <li class="breadcrumb-item active">出品一覧</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section-b-space shop-section mb-5">
    <div class="container-fluid-lg">
      <div class="row">
        <div class="col-custom-3">
          <div class="left-box wow fadeInUp">
            <div class="shop-left-sidebar">
              <div class="back-button">
                <h3><i class="fa-solid fa-arrow-left"></i> Back</h3>
              </div>
              <div class="accordion custom-accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne">
                      <span>カテゴリー</span>
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                      <div class="form-floating theme-form-floating-2 search-box">
                        <input type="search" class="form-control" id="search" placeholder="Search .."
                          v-model="txtsearchcate" />
                        <label for="search">検索</label>
                      </div>
                      <div>{{ txtsearchname }}</div>
                      <div>{{ txtsearchcate }}</div>
                      <div>{{ catefilter }}</div>
                      <ul class="category-list custom-padding custom-height">
                        <li>
                          <div class="form-check ps-0 m-0 category-list-box">
                            <input class="checkbox_animated" type="radio" id="fruit" name="filter_category" value="1"
                              v-model="catefilter" @click="changevaluefilter('1')" />
                            <label class="form-check-label" for="fruit">
                              <span class="name">果物</span>
                              <span class="number">(15)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check ps-0 m-0 category-list-box">
                            <input class="checkbox_animated" type="radio" id="cake" name="filter_category" value="2"
                              v-model="catefilter" @click="changevaluefilter('2')" />
                            <label class="form-check-label" for="cake">
                              <span class="name">野菜</span>
                              <span class="number">(12)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check ps-0 m-0 category-list-box">
                            <input class="checkbox_animated" type="radio" id="beverages" name="filter_category"
                              value="3" v-model="catefilter" @click="changevaluefilter('3')" />
                            <label class="form-check-label" for="beverages">
                              <span class="name">鮮魚</span>
                              <span class="number">(12)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check ps-0 m-0 category-list-box">
                            <input class="checkbox_animated" type="radio" id="snacks" name="filter_category" value="4"
                              v-model="catefilter" @click="changevaluefilter('4')" />
                            <label class="form-check-label" for="snacks">
                              <span class="name">精肉</span>
                              <span class="number">(05)</span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check ps-0 m-0 category-list-box">
                            <input class="checkbox_animated" type="radio" id="beauty" name="filter_category" value="5"
                              v-model="catefilter" @click="changevaluefilter('5')" />
                            <label class="form-check-label" for="beauty">
                              <span class="name">加工品</span>
                              <span class="number">(30)</span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-custom-">
          <div class="show-button">
            <div class="filter-button-group mt-0">
              <div class="filter-button d-inline-block d-lg-none">
                <a><i class="fa-solid fa-filter"></i> Filter Menu</a>
              </div>
            </div>
            <div class="top-filter-menu">
              <div class="category-dropdown">
                <h5 class="text-content"> 並び替え :</h5>
                <div class="dropdown">
                  <select class="form-control form-select">
                    <option>
                      <a class="dropdown-item" id="pop" href="javascript:">新着順</a>
                    </option>
                    <option>
                      <a class="dropdown-item" id="pop" href="javascript:">価格順</a>
                    </option>
                    <option>
                      <a class="dropdown-item" id="pop" href="javascript:">在庫数量順</a>
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
            <div>
              <div class="product-box-3 h-100 wow fadeInUp">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/2.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">パン・ペストリー用小麦粉 200 g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Cheesy feet cheesy grin brie. Mascarpone cheese and wine hard cheese
                      the big cheese everyone loves smelly cheese macaroni cheese croque
                      monsieur.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 08.02円（税込)</span>
                      <h6 class="unit">在庫数量 : 250 個</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.05s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/3.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ピーナッツバターバイトプレミアムバタークッキー600g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Feta taleggio croque monsieur swiss manchego cheesecake dolcelatte
                      jarlsberg. Hard cheese danish fontina boursin melted cheese fondue.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 04.33円（税込)</span>
                      <h6 class="unit">在庫数量 : 350 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.1s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/4.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">SnackAmor ジョワールスティックとジョワールチップのコンボパック</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Lancashire hard cheese parmesan. Danish fontina mozzarella cream
                      cheese smelly cheese cheese and wine cheesecake dolcelatte stilton.
                      Cream cheese parmesan who moved my cheese when the cheese comes out
                      everybody's happy cream cheese red leicester ricotta edam.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 12.52円（税込)</span>
                      <h6 class="unit">在庫数量 : 570 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.15s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/5.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ユミトス チリ風味ポテトチップス 100g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Cheddar cheddar pecorino hard cheese hard cheese cheese and biscuits
                      bocconcini babybel. Cow goat paneer cream cheese fromage cottage
                      cheese cauliflower cheese jarlsberg.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 10.25円（税込)</span>
                      <h6 class="unit">在庫数量 : 100 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.2s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/6.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ファンタジー クランチ チョコチップクッキー</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Bavarian bergkase smelly cheese swiss cut the cheese lancashire who
                      moved my cheese manchego melted cheese. Red leicester paneer cow
                      when the cheese comes out everybody's happy croque monsieur goat
                      melted cheese port-salut.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 14.25円（税込)</span>
                      <h6 class="unit">在庫数量 : 550 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.25s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/7.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">パン・ペストリー用小麦粉 200g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Melted cheese babybel chalk and cheese. Port-salut port-salut cream
                      cheese when the cheese comes out everybody's happy cream cheese hard
                      cheese cream cheese red leicester.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 12.68円（税込)</span>
                      <h6 class="unit">在庫数量 : 1 Kg</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.3s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/2.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">パン・ペストリー用小麦粉 200g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Squirty cheese cottage cheese cheese strings. Red leicester paneer
                      danish fontina queso lancashire when the cheese comes out
                      everybody's happy cottage cheese paneer.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 08.02円（税込)</span>
                      <h6 class="unit">在庫数量 : 250 個</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.35s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/3.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ピーナッツバターバイトプレミアムバタークッキー600g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Swiss ricotta cauliflower cheese squirty cheese cheesy grin
                      camembert de normandie airedale edam. Squirty cheese babybel
                      cheesecake the big cheese cauliflower cheese hard cheese cheese and
                      biscuits cheese and wine.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 04.33円（税込)</span>
                      <h6 class="unit">在庫数量 : 350 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.4s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/4.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">SnackAmor ジョワールスティックとジョワールチップのコンボパック</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Boursin the big cheese cheeseburger. Jarlsberg smelly cheese chalk
                      and cheese gouda blue castello monterey jack swiss boursin. Halloumi
                      cheesy feet mozzarella red leicester paneer boursin who moved my
                      cheese croque monsieur.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 12.52円（税込)</span>
                      <h6 class="unit">在庫数量 : 570 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.45s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/5.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ユミトス チリ風味ポテトチップス 100g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Halloumi mozzarella monterey jack smelly cheese emmental bocconcini
                      when the cheese comes out everybody's happy pecorino. Cut the cheese
                      stilton danish fontina cheesy grin rubber cheese smelly cheese
                      roquefort paneer.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 10.25円（税込)</span>
                      <h6 class="unit">在庫数量 : 100 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.5s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/6.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ファンタジー クランチ チョコチップクッキー</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Manchego cow cheddar. Port-salut roquefort hard cheese babybel when
                      the cheese comes out everybody's happy brie dolcelatte croque
                      monsieur.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 14.25円（税込)</span>
                      <h6 class="unit">在庫数量 : 550 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.55s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/7.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">パン・ペストリー用小麦粉 200g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Roquefort say cheese the big cheese ricotta chalk and cheese when
                      the cheese comes out everybody's happy brie lancashire.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 12.68円（税込)</span>
                      <h6 class="unit">在庫数量 : 1 Kg</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.6">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/2.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">パン・ペストリー用小麦粉 200g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Lancashire when the cheese comes out everybody's happy blue castello
                      halloumi boursin stinking bishop pecorino fromage frais.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 08.02円（税込)</span>
                      <h6 class="unit">在庫数量 : 250 個</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="product-box-3 h-100 wow fadeInUp" data-wow-delay="0.65s">
                <div class="product-header">
                  <div class="product-image">
                    <RouterLink :to="`/product-detail/`">
                      <img src="/images/cake/product/3.png" class="img-fluid blur-up lazyload" alt="" />
                    </RouterLink>
                  </div>
                </div>
                <div class="product-footer">
                  <div class="product-detail">
                    <RouterLink :to="`/product-detail/`">
                      <h5 class="name">ピーナッツバターバイトプレミアムバタークッキー600g</h5>
                    </RouterLink>
                    <p class="text-content mt-1 mb-2 product-content">
                      Say cheese cheese and biscuits feta. Queso bocconcini danish fontina
                      camembert de normandie brie airedale ricotta feta. Pecorino edam
                      gouda caerphilly croque monsieur red leicester cheese triangles
                      caerphilly.
                    </p>
                    <h5 class="price">
                      <span class="theme-color">価格 : 04.33円（税込)</span>
                      <h6 class="unit">在庫数量 : 350 G</h6>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav class="custom-pagination">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="javascript:" tabindex="-1">
                  <i class="fa-solid fa-angles-left"></i>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:">
                  <i class="fa-solid fa-angles-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
  <div class="bg-overlay"></div>
</template>
<style>
.shop-section .left-box .shop-left-sidebar .custom-accordion .accordion-item .accordion-collapse .accordion-body {
  height: 575px;
}

.category-list {
  flex-direction: column;
  max-height: 475px !important;
  height: 100%;
  flex-wrap: nowrap !important;
}

.product-detail .name {
  font-weight: bold !important;
}
</style>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { useAppStore } from 'src/stores/app-store';

const appstore = useAppStore();
const catefilter = ref(null);
const txtsearchcate = ref(null);
const txtsearchname = computed(() => appstore.getdatasearch);

function changevaluefilter(params) {
  if (catefilter.value === params) {
    catefilter.value = null;
  }
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
