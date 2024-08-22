<!-- UA007 -->
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card card-table">
          <div class="card-body">
            <div class="title-header option-title d-flex d-block" style="justify-content: start;">
              <a href="/product-list/" class="fw-bold"
                style="font-size: calc(18px + (22 - 18) * ((100vw - 320px) / (1920 - 320)));">
                <i class="ri-arrow-left-s-line"></i>
              </a>
              <h5>出品一覧</h5>
            </div>
            <div class="theme-form theme-form-2 mega-form d-md-flex mb-4 search-custom">
              <div class="col-sm-3 align-items-center me-md-3 mb-2 mb-md-0 select-custom">
                <label class="col-form-label form-label-title">出品者</label>
                <select class="js-example-basic-single w-100"
                  style="height: 46px; background: #fff !important; border-radius: .25rem;">
                  <option disabled selected>出品者の選択</option>
                  <option>凛</option>
                  <option>陽葵</option>
                  <option>朝陽</option>
                  <option>頼</option>
                  <option>明</option>
                  <option>悠真</option>
                  <option>日向</option>
                  <option>莉子</option>
                  <option>菖蒲</option>
                  <option>大翔</option>
                </select>
              </div>
              <div class="col-sm-3 align-items-center me-md-3 mb-2 mb-md-0">
                <label class="col-form-label form-label-title">出品日</label>
                <div class="col-sm-12">
                  <input class="form-control" type="date" style="height: 46px; background: #fff !important;">
                </div>
              </div>
              <div class="col-sm-3 align-items-center select-custom">
                <label class="col-form-label form-label-title">出品状態</label>
                <select class="js-example-basic-single w-100"
                  style="height: 46px; background: #fff !important; border-radius: .25rem;">
                  <option disabled selected>出品状態の選択</option>
                  <option>出品中</option>
                  <option>出品開始前</option>
                  <option>在庫切れ</option>
                  <option>出品非公開</option>
                  <option>出品終了</option>
                </select>
              </div>
            </div>
            <div class="d-md-flex justify-content-end mb-4">
              <a class="btn btn-outline me-0 me-md-3 mb-2 mb-md-0" href="javascript:">クリア</a>
              <a class="btn btn-primary" href="javascript:">検索</a>
            </div>
            <div class="table-responsive">
              <table class="table all-package theme-table table-custom">
                <thead>
                  <tr>
                    <th>サムネイル</th>
                    <th style="position: relative;">商品名<i class="fa-solid fa-sort"
                        style="position: absolute; top: calc(50% - 7.5px); right: 10px;"></i></th>
                    <th>出品者</th>
                    <th style="position: relative;">出品日時<i class="fa-solid fa-sort"
                        style="position: absolute; top: calc(50% - 7.5px); right: 10px;"></i></th>
                    <th style="position: relative;">在庫数量<i class="fa-solid fa-sort"
                        style="position: absolute; top: calc(50% - 7.5px); right: 10px;"></i></th>
                    <th>出品状態</th>
                  </tr>
                </thead>
                <tbody>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/1.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>アタ・ブスケット</td>
                    <td><span>出品者：</span><span>凛</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/2.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>コールドブリューコーヒー</td>
                    <td><span>出品者：</span><span>陽葵</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>出品開始前</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/3.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>ピーナッツバタークッキー</td>
                    <td><span>出品者：</span><span>朝陽</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>在庫切れ</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/4.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>ウィートフレーク</td>
                    <td><span>出品者：</span><span>頼</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>出品非公開</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/5.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>ポテトチップス</td>
                    <td><span>出品者：</span><span>明</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>出品終了</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/6.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>トゥワーダル</td>
                    <td><span>出品者：</span><span>悠真</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-close"><span>出品中</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/7.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>アーモンドミルク</td>
                    <td><span>出品者：</span><span>日向</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>出品開始前</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/8.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>小麦パン</td>
                    <td><span>出品者：</span><span>莉子</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>在庫切れ</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/9.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>新鮮な肉</td>
                    <td><span>出品者：</span><span>菖蒲</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>出品非公開</span></span>
                    </td>
                  </tr>
                  <tr @click="toProductDetail()">
                    <td>
                      <div class="table-image">
                        <img src="/images/product/10.png" class="img-fluid" alt="" />
                      </div>
                    </td>
                    <td>カークランド チキン缶詰め</td>
                    <td><span>出品者：</span><span>大翔</span></td>
                    <td><span>出品日時：</span><span>2024-01-01 00:00</span></td>
                    <td><span>在庫数量：</span><span>1kg</span></td>
                    <td>
                      <span>出品状態：</span><span class="status-danger"><span>出品終了</span></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav class="custom-pagination mb-1 mb-md-2">
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

table tbody tr {
  cursor: pointer;
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

  .table-custom tbody td>span:nth-child(1) {
    display: none;
  }
}

@media only screen and (max-width: 991px) {

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

  .table-custom tbody tr td:nth-child(2) {
    font-size: 18px;
    font-weight: bold !important;
  }

  .table-custom tbody tr td>span:nth-child(1) {
    width: 30%;
    font-weight: bold !important;
    text-align: right;
    padding-right: 0.5rem;
  }

  .table-custom tbody tr td>span:nth-child(2) {
    width: 70%;
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
import { useRouter } from 'vue-router';

const router = useRouter();

function toProductDetail() {
  router.push({ name: 'product-detail-admin' });
}
</script>
