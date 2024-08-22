<!-- UA009 -->
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
              <h5>出品情報修正</h5>
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
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品画像</label>
                      <div class="form-group col-sm-3">
                        <form class="dropzone custom-dropzone dz-clickable upload-custom"
                          data-bs-target="#modalUploadedImage" data-bs-toggle="modal">
                          <div class="dz-preview">
                            <div class="dz-image">
                              <img src="/images/product/1.jpg" alt="" />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="form-group col-sm-3">
                        <form class="dropzone custom-dropzone dz-clickable upload-custom"
                          data-bs-target="#modalUploadedImage" data-bs-toggle="modal">
                          <div class="dz-preview">
                            <div class="dz-image">
                              <img src="/images/product/2.jpg" alt="" />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="form-group col-sm-3 mb-0">
                        <form class="dropzone custom-dropzone dz-clickable upload-custom"
                          data-bs-target="#modalUploadImage" data-bs-toggle="modal">
                          <div class="dropzone-wrapper">
                            <div class="dz-message needsclick">
                              <div>
                                <i class="icon-cloud-up"></i>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="mb-4 row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品名</label>
                      <div class="col-sm-9">
                        <input class="form-control" type="text" style="height: 46px; background: #fff !important;"
                          value="商品名" />
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center ck-editor-custom">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品説明</label>
                      <div class="col-sm-9">
                        <div id="editor">商品説明</div>
                      </div>
                    </div>
                    <div class="row align-items-center select-custom">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">カテゴリ</label>
                      <div class="col-sm-4">
                        <select class="js-example-basic-single w-100"
                          style="height: 46px; background: #fff !important; border-radius: .25rem;">
                          <option disabled selected>カテゴリの選択</option>
                          <option>果物</option>
                          <option>野菜</option>
                          <option>鮮魚</option>
                          <option>精肉</option>
                          <option>加工品</option>
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
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品単価（税込み）</label>
                      <div class="col-sm-9">
                        <input class="form-control" type="number" min="0"
                          style="height: 46px; background: #fff !important;" value="¥100,000" />
                      </div>
                    </div>
                    <div class="row align-items-center select-custom">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">数量</label>
                      <div class="col-sm-6">
                        <input class="form-control" type="number" min="0"
                          style="height: 46px; background: #fff !important;" value="1" />
                      </div>
                      <div class="col-sm-3 mt-2 mt-md-0">
                        <select class="js-example-basic-single w-100"
                          style="height: 46px; background: #fff !important; border-radius: .25rem;">
                          <option disabled selected>単位の選択</option>
                          <option>kg</option>
                          <option>g</option>
                          <option>個</option>
                          <option>尾</option>
                          <option>セット</option>
                          <option>パック</option>
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
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品開始日時</label>
                      <div class="col-sm-4">
                        <input class="form-control" type="date" style="height: 46px; background: #fff !important;"
                          value="2024-01-01" />
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品終了日時</label>
                      <div class="col-sm-4">
                        <input class="form-control" type="date" style="height: 46px; background: #fff !important;"
                          value="2024-12-31" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card" style="border: 1px solid silver;">
                <div class="card-body">
                  <div class="theme-form theme-form-2 mega-form">
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">公開</label>
                      <div class="col-sm-9">
                        <div class="form-check user-checkbox ps-0 mb-0 checkbox-custom">
                          <input class="checkbox_animated check-it" type="checkbox" checked="true" />
                          <label class="form-label-title mb-0">出品を公開する</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/edit-product-confirm/`" class="btn btn-primary fw-bold">
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
            <button type="button" @click="toProductDetail()" class="btn btn--yes btn-primary me-3 fw-bold"
              data-bs-dismiss="modal">はい</button>
            <button type="button" class="btn btn--no mx-0 fw-bold" data-bs-dismiss="modal">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadImage" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold">写真を撮る</button>
            <button type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold">画像を選択する</button>
            <button type="button" class="btn btn--yes btn-primary fw-bold" data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadedImage" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold">画僧を削除する</button>
            <button type="button" class="btn btn--yes btn-primary fw-bold" data-bs-dismiss="modal">キャンセル</button>
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
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function toProductDetail() {
  router.push({ name: 'product-detail-admin' });
};

onMounted(() => {
  const scripts = [
    '/js/ckeditor-custom.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
