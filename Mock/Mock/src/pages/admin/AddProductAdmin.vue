<!-- UA006 -->
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
              <h5>出品登録</h5>
            </div>
            <div class="col-sm-8 m-auto">
              <p class="text-center fw-bold mb-0" style="font-size: 20px;">
                登録
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
                          data-bs-target="#modalUploadImage1" data-bs-toggle="modal" id="form-img-1">
                          <div class="dropzone-wrapper">
                            <div class="dz-message needsclick">
                              <div>
                                <i id="ic-upload-image1" class="icon-cloud-up"></i>
                                <img class="img-add-product" data-bs-target="#modalUploadedImage1"
                                  data-bs-toggle="modal" :src="previewImage1" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="form-group col-sm-3">
                        <form class="dropzone custom-dropzone dz-clickable upload-custom"
                          data-bs-target="#modalUploadImage2" data-bs-toggle="modal">
                          <div class="dropzone-wrapper">
                            <div class="dz-message needsclick">
                              <div>
                                <i id="ic-upload-image2" class="icon-cloud-up"></i>
                                <img class="img-add-product" data-bs-target="#modalUploadedImage2"
                                  data-bs-toggle="modal" :src="previewImage2" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="form-group col-sm-3 mb-0">
                        <form class="dropzone custom-dropzone dz-clickable upload-custom"
                          data-bs-target="#modalUploadImage3" data-bs-toggle="modal">
                          <div class="dropzone-wrapper">
                            <div class="dz-message needsclick">
                              <div>
                                <i id="ic-upload-image3" class="icon-cloud-up"></i>
                                <img class="img-add-product" data-bs-target="#modalUploadedImage3"
                                  data-bs-toggle="modal" :src="previewImage3" />
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
                        <input class="form-control" type="text" style="height: 46px; background: #fff !important;" />
                      </div>
                    </div>
                    <div class="mb-4 row align-items-center ck-editor-custom">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">商品説明</label>
                      <div class="col-sm-9">
                        <div id="editor"></div>
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
                          style="height: 46px; background: #fff !important;" />
                      </div>
                    </div>
                    <div class="row align-items-center select-custom">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">数量</label>
                      <div class="col-sm-6">
                        <input class="form-control" type="number" min="0"
                          style="height: 46px; background: #fff !important;" />
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
                        <input id="startdate" class="form-control" type="datetime-local" data-date="" data-date-format="YYYY-MM-DD HH:mm:ss" value="2018-06-12T19:30">
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <label class="col-sm-3 form-label-title mb-2 mb-md-0">出品終了日時</label>
                      <div class="col-sm-4">
                        <input id="enddate" class="form-control" type="datetime-local" data-date="" data-date-format="YYYY-MM-DD HH:mm:ss" value="2018-06-12T19:30">
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
                        <div class="form-check user-checkbox ps-0 mb-0">
                          <input class="checkbox_animated check-it" type="checkbox" />
                          <label class="form-label-title mb-0">出品を公開する</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-md-flex justify-content-end mb-1">
                <RouterLink :to="`/admin/add-product-confirm/`" class="btn btn-primary fw-bold">
                  出品内容を確認する
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalBack" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="modal-title" id="">通知</h5>
          <p style="font-size: 16px;">出品を取り消します。よろしいですか？</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="button-box">
            <button type="button" onclick="location.href = '/product-list/';"
              class="btn btn--yes btn-primary me-3 fw-bold" data-bs-dismiss="modal">はい</button>
            <button type="button" class="btn btn--no mx-0 fw-bold" data-bs-dismiss="modal">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadImage1" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold">写真を撮る</button>
            <q-btn type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold"
              @click="uploadImage1();">画像を選択する
              <input type="file" v-show="false" accept="image/jpg,image/jpeg,image/png" ref="inputImage1"
                @change="changeimage1">
            </q-btn>
            <button type="button" class="btn btn--yes btn-primary fw-bold" id="btn-close-upload-img1"
              data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadImage2" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold">写真を撮る</button>
            <q-btn type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold"
              @click="uploadImage2();">画像を選択する
              <input type="file" v-show="false" accept="image/jpg,image/jpeg,image/png" ref="inputImage2"
                @change="changeimage2">
            </q-btn>
            <button type="button" class="btn btn--yes btn-primary fw-bold" id="btn-close-upload-img2"
              data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadImage3" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold">写真を撮る</button>
            <q-btn type="button" onclick="" class="btn btn--yes btn-primary me-3 fw-bold"
              @click="uploadImage3();">画像を選択する
              <input type="file" v-show="false" accept="image/jpg,image/jpeg,image/png" ref="inputImage3"
                @change="changeimage3">
            </q-btn>
            <button type="button" class="btn btn--yes btn-primary fw-bold" id="btn-close-upload-img3"
              data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadedImage1" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" @click="deleteimage1()" class="btn btn--yes btn-primary me-3 fw-bold">画僧を削除する</button>
            <button type="button" id="btn-delete-img1" class="btn btn--yes btn-primary fw-bold"
              data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadedImage2" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" @click="deleteimage2()" class="btn btn--yes btn-primary me-3 fw-bold">画僧を削除する</button>
            <button type="button" id="btn-delete-img2" class="btn btn--yes btn-primary fw-bold"
              data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalUploadedImage3" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog  modal-dialog-centered" style="justify-content: center;">
      <div class="modal-content" style="width: fit-content;">
        <div class="modal-body">
          <div class="button-box">
            <button type="button" @click="deleteimage3()" class="btn btn--yes btn-primary me-3 fw-bold">画僧を削除する</button>
            <button type="button" id="btn-delete-img3" class="btn btn--yes btn-primary fw-bold"
              data-bs-dismiss="modal">キャンセル</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-dropzone .dropzone-wrapper {
  width: 85%;
  height: 85%;
  overflow: hidden;
}

.img-add-product {
  width: 100%;
}

.progress-custom li.step1:before {
  content: "1";
}

.progress-custom li.step2:before {
  content: "2";
}

.progress-custom li.step3:before {
  content: "3";
}
#startdate,#enddate {
    position: relative;
    width: -webkit-fill-available; height: 20px;
    color: white;
}

#startdate:before,#enddate:before {
    position: absolute;
    top: 3px; left: 3px;
    content: attr(data-date);
    display: inline-block;
    color: black;
}

#startdate::-webkit-datetime-edit,
#enddate::-webkit-datetime-edit,
#startdate::-webkit-inner-spin-button,
#enddate::-webkit-inner-spin-button,
#startdate::-webkit-clear-button,
#enddate::-webkit-clear-button {
    display: none;
}

#startdate::-webkit-calendar-picker-indicator,#enddate::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 3px;
    right: 0;
    color: black;
    opacity: 1;
}
#startdate[data-v-63cad0a6]:before,#enddate[data-v-63cad0a6]:before {
  position: unset;
  top: 0;
  left: 0;
}
#startdate,#enddate {
  padding: 20px !important;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import $ from 'jquery';
import moment from 'moment';

const inputImage1 = ref(null);
const inputImage2 = ref(null);
const inputImage3 = ref(null);

const previewImage1 = ref(null);
const previewImage2 = ref(null);
const previewImage3 = ref(null);

const changeimage1 = (event) => {
  const input = event.target;
  if (input.files) {
    const file = event.target.files[0];
    previewImage1.value = URL.createObjectURL(file);
    window.document.getElementById('ic-upload-image1').style.display = 'none';
    window.document.getElementById('btn-close-upload-img1').click();
  }
};

const changeimage2 = (event) => {
  const input = event.target;
  if (input.files) {
    const file = event.target.files[0];
    previewImage2.value = URL.createObjectURL(file);
    window.document.getElementById('ic-upload-image2').style.display = 'none';
    window.document.getElementById('btn-close-upload-img2').click();
  }
};

const changeimage3 = (event) => {
  const input = event.target;
  if (input.files) {
    const file = event.target.files[0];
    previewImage3.value = URL.createObjectURL(file);
    window.document.getElementById('ic-upload-image3').style.display = 'none';
    window.document.getElementById('btn-close-upload-img3').click();
  }
};

function uploadImage1() {
  if (inputImage1.value) {
    inputImage1.value.click();
  }
}

function uploadImage2() {
  if (inputImage2.value) {
    inputImage2.value.click();
  }
}

function uploadImage3() {
  if (inputImage3.value) {
    inputImage3.value.click();
  }
}

function deleteimage1() {
  previewImage1.value = null;
  window.document.getElementById('btn-delete-img1').click();
  window.document.getElementById('ic-upload-image1').style.display = 'unset';
}

function deleteimage2() {
  previewImage2.value = null;
  window.document.getElementById('btn-delete-img2').click();
  window.document.getElementById('ic-upload-image2').style.display = 'unset';
}

function deleteimage3() {
  previewImage3.value = null;
  window.document.getElementById('btn-delete-img3').click();
  window.document.getElementById('ic-upload-image3').style.display = 'unset';
}

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
  $('#startdate').on('change', function () {
    this.setAttribute('data-date', moment(this.value).format(this.getAttribute('data-date-format')));
    console.log(this.value);
  }).trigger('change');

  $('#enddate').on('change', function () {
    console.log(this.value);
    this.setAttribute('data-date', moment(this.value).format(this.getAttribute('data-date-format')));
  }).trigger('change');
});
</script>
