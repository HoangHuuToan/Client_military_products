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
                <i class="ri-arrow-left-s-line"></i>
              </a>
              <h5>配送計画</h5>
            </div>
            <div class="theme-form theme-form-2 mega-form d-md-flex mb-4 search-custom">
              <div class="col-sm-3 align-items-center me-md-3 mb-2 mb-md-0 select-custom">
                <label class="col-form-label form-label-title">入荷希望者の道の駅</label>
                <select class="js-example-basic-single w-100"
                  style="height: 46px; background: #fff !important; border-radius: .25rem;">
                  <option disabled selected>入荷希望者の道の駅の選択</option>
                  <option>道の駅○○A</option>
                  <option>道の駅○○B</option>
                  <option>道の駅○○C</option>
                </select>
              </div>
              <div class="col-sm-3 align-items-center me-md-3 mb-2 mb-md-0 select-custom">
                <label class="col-form-label form-label-title">商品受取場所</label>
                <select class="js-example-basic-single w-100"
                  style="height: 46px; background: #fff !important; border-radius: .25rem;">
                  <option disabled selected>商品受取場所の選択</option>
                  <option>道の駅○○A</option>
                  <option>道の駅○○B</option>
                  <option>道の駅○○C</option>
                </select>
              </div>
              <div class="col-sm-3 align-items-center">
                <label class="col-form-label form-label-title">入荷希望依頼日</label>
                <div class="col-sm-12">
                  <input class="form-control" type="date" style="height: 46px; background: #fff !important;">
                </div>
              </div>
            </div>
            <div class="d-md-flex justify-content-end mb-4">
              <a class="btn btn-outline me-0 me-md-3 mb-2 mb-md-0" href="javascript:">クリア</a>
              <a class="btn btn-primary" href="javascript:">検索</a>
            </div>
            <span class="form-check mb-3 p-0 d-lg-none checkbox-custom"
              style="display: flex; justify-content: end; padding-right: 0.75rem !important;">
              <input class="checkbox_animated checkall" type="checkbox">
            </span>
            <div class="table-responsive">
              <table class="table all-package theme-table table-custom">
                <thead>
                  <tr>
                    <th style="min-width: 60px;">
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated checkall" type="checkbox">
                      </span>
                    </th>
                    <th>サムネイル</th>
                    <th>商品名</th>
                    <th>入荷希望依頼日時</th>
                    <th>在庫数量</th>
                    <th>出品状態</th>
                    <th>金額（税込）</th>
                    <th>入荷希望数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/1.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>アタ・ブスケット</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/2.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>コールドブリューコーヒー</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/3.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>ピーナッツバタークッキー</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/4.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>ウィートフレーク</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/5.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>ポテトチップス</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/6.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>トゥワーダル</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/7.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>アーモンドミルク</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/8.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>小麦パン</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/9.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>新鮮な肉</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="form-check m-0 p-0 checkbox-custom">
                        <input class="checkbox_animated check-it" type="checkbox">
                      </span>
                    </td>
                    <td>
                      <div class="table-image">
                        <img src="/images/product/10.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>カークランド チキン缶詰め</td>
                    <td><span>入荷希望依頼日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                    <td><span>金額（税込）：</span><span>¥100,000</span></td>
                    <td>
                      <div class="quantity-custom">
                        <a href="javascript:" class="me-3" data-bs-target="#modalCancel" data-bs-toggle="modal">取消</a>
                        <div class="cart_qty qty-box input-custom">
                          <div class="input-group"><button type="button" class="qty-left-minus" data-type="minus"
                              data-field=""><i class="fa fa-minus"></i></button><input
                              class="form-control input-number qty-input" type="text" name="quantity" value="0"><button
                              type="button" class="qty-right-plus" data-type="plus" data-field=""><i
                                class="fa fa-plus"></i></button></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav class="custom-pagination"
              style="margin-bottom: calc(22px + (35 - 22) * ((100vw - 320px) / (1920 - 320)));">
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
            <div class="d-md-flex justify-content-end mb-1">
              <RouterLink :to="`/admin/add-ship-plan/`" class="btn btn-primary fw-bold">
                配送計画を作成する
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="modalCancel" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="modal-title" id="">通知</h5>
          <p style="font-size: 16px;">配送依頼のある商品を取り消します。よろしいですか？</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="button-box">
            <button type="button" class="btn btn--yes btn-primary me-3 fw-bold" data-bs-dismiss="modal">はい</button>
            <button type="button" class="btn btn--no mx-0 fw-bold" data-bs-dismiss="modal">いいえ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "https://fonts.googleapis.com/css2?family=Russo+One&display=swap";
@import "https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap";
@import "/css/theme/admin/datatables.css";

@font-face {
  font-family: 'Font Awesome 6 Free';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("/font/fa-solid-900.woff2") format("woff2"), url("/font/fa-solid-900.ttf") format("truetype");
}

.fa-solid {
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}

.fa-solid.fa-angles-left::before {
  content: "";
}

.fa-solid.fa-angles-right::before {
  content: "";
}

.checkbox-custom input {
  margin: 0 8px 0 0;
}

.quantity-custom {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-custom.qty-box {
  width: auto;
  max-width: 250px;
  display: flex;
  justify-content: center;
  margin-top: 0;
}

.input-custom .input-group {
  width: 110px;
  border-radius: 7px;
  padding: 4px;
  text-align: center;
  z-index: 0;
}

.input-custom .input-group button {
  width: calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)));
  height: calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: none;
  padding: 0;
  background-color: #fff;
  z-index: 0;
  border-radius: 4px !important;
}

.input-custom .input-group button i {
  font-size: 13px;
  color: var(--theme-color);
  margin-top: 1px;
}

.input-custom .input-group button i::before {
  font-family: 'Font Awesome 6 Free';
}

.input-custom .input-group input {
  height: auto;
  background-color: transparent;
  border: none;
  padding: 0;
  text-align: center;
  font-size: 14px;
  color: #4a5568;
}

.custom-pagination {
  margin-top: calc(22px + (35 - 22) * ((100vw - 320px) / (1920 - 320)));

  .pagination {
    flex-wrap: wrap;
    gap: calc(6px + (13 - 6) * ((100vw - 320px) / (1920 - 320)));

    .page-item {
      border-radius: 5px;
      overflow: hidden;

      &:not(:first-child) {
        .page-link {
          margin: 0;
        }
      }

      &.active {
        z-index: 0;

        .page-link {
          background-color: var(--theme-color);
          border-color: var(--theme-color);
          color: #fff;

          &:hover {
            color: #4a5568;
          }
        }
      }

      .page-link {
        color: #4a5568;
        border: 1px solid transparent;

        &:hover {
          border-radius: 5px;
          border: 1px solid var(--theme-color);
          background-color: unset;
          -webkit-transition: .5s ease;
          transition: .5s ease;
        }

        &:focus {
          border-radius: 5px;
          color: var(--theme-color);
          background-color: #fff;
          box-shadow: none;
        }
      }

      &.disabled {
        cursor: default !important;
      }
    }
  }
}

table tbody td {
  color: #4a5568 !important;
  font-weight: normal !important;
}

footer::after {
  background-image: url(/images/vegetable/footer-shape.png);
}

footer:before {
  background-image: url(/images/vegetable/footer-shape-2.png);
}

@media only screen and (min-width: 992px) {
  .search-custom {
    justify-content: end;
  }

  .table-custom tbody td:not(:first-child)>span:nth-child(1) {
    display: none;
  }
}

@media only screen and (max-width: 991px) {
  .table-responsive {
    border-top: 1px solid rgba(44, 50, 63, 0.1);
  }

  .checkbox-custom {
    width: 100% !important;
  }

  .input-custom .input-group {
    width: 100px;
  }

  .table-custom thead,
  .table-custom tbody,
  .table-custom th,
  .table-custom td,
  .table-custom tr {
    display: block;
  }

  .table-custom thead tr {
    display: none;
  }

  .table-custom tbody tr {
    padding: 0.75rem 0;
  }

  .table-custom tbody tr td:nth-child(3) {
    font-size: 18px;
    font-weight: bold !important;
  }

  .table-custom tbody tr td>span:nth-child(1) {
    width: 50%;
    font-weight: bold !important;
    text-align: right;
    padding-right: 0.5rem;
  }

  .table-custom tbody tr td>span:nth-child(2) {
    width: 50%;
    text-align: left;
  }

  .table-custom tbody tr td>span:nth-child(2) span {
    background: transparent;
    font-size: 14px;
    padding: 0;
  }

  .table-custom tbody .table-image {
    width: 100% !important;
    height: 100% !important;
  }

  .table-custom tbody .table-image img {
    height: 150px !important;
  }
}
</style>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const scripts = [
    '/js/checkbox-all-check.js',
    '/js/quantity-2.js',
  ];
  scripts.forEach((script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script);
    tag.async = false;
    document.body.appendChild(tag);
  });
});
</script>
