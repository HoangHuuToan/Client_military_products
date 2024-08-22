<template>
    <!-- Header Start -->
    <header class="pb-md-4 pb-0">
        <div class="top-nav top-header sticky-header">
            <div class="container-fluid-lg">
                <div class="row">
                    <div class="col-12">
                        <div class="navbar-top">
                            <button class="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                <span class="navbar-toggler-icon">
                                    <i class="fa-solid fa-bars"></i>
                                </span>
                            </button>
                            <a href="/" class="web-logo nav-logo">
															<h2>
																道の駅スマート物流
															</h2>
                            </a>

                            <div class="middle-box">
                                <div class="product-package all-category me-3">
                                    <div class="select-package">
                                        <select class="form-control form-select">
                                            <option value="0" selected>All categories</option>
                                            <option value="1">Fruits</option>
                                            <option value="2">Vegetables</option>
                                            <option value="3">Drinks</option>
                                            <option value="4">Breakfast</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="search-box">
                                    <div class="input-group">
                                        <input type="search" class="form-control" placeholder="I'm searching for...">
                                        <button class="btn" type="button" id="button-addon2"
                                                onclick="location.href = '/product-list/'">
                                            <i data-feather="search"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="rightside-box">
                                <div class="search-full">
                                    <div class="input-group">
                                        <span class="input-group-text">
                                            <i data-feather="search" class="font-light"></i>
                                        </span>
                                        <input type="text" class="form-control search-type" placeholder="Search here..">
                                        <span class="input-group-text close-search">
                                            <i data-feather="x" class="font-light"></i>
                                        </span>
                                    </div>
                                </div>
                                <ul class="right-side-menu">
                                    <li class="right-side">
                                        <div class="delivery-login-box">
                                            <div class="delivery-icon">
                                                <div class="search-box">
                                                    <i data-feather="search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="right-side header-cart">
                                        <div class="onhover-dropdown header-badge">
                                            <button type="button" class="btn p-0 position-relative header-wishlist">
                                                <i data-feather="shopping-cart"></i>
                                                <span class="position-absolute top-0 start-100 translate-middle badge">2
                                                    <span class="visually-hidden">unread messages</span>
                                                </span>
                                            </button>

                                            <div class="onhover-div">
                                                <ul class="cart-list">
                                                    <li class="product-box-contain">
                                                        <div class="drop-cart">
                                                            <a href="product-left-thumbnail.html" class="drop-image">
                                                                <img src="images/vegetable/product/1.png"
                                                                    class="blur-up lazyload" alt="">
                                                            </a>

                                                            <div class="drop-contain">
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                                </a>
                                                                <h6><span>1 x</span> $80.58</h6>
                                                                <button class="close-button close_button">
                                                                    <i class="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li class="product-box-contain">
                                                        <div class="drop-cart">
                                                            <a href="product-left-thumbnail.html" class="drop-image">
                                                                <img src="images/vegetable/product/2.png"
                                                                    class="blur-up lazyload" alt="">
                                                            </a>

                                                            <div class="drop-contain">
                                                                <a href="product-left-thumbnail.html">
                                                                    <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                    </h5>
                                                                </a>
                                                                <h6><span>1 x</span> $25.68</h6>
                                                                <button class="close-button close_button">
                                                                    <i class="fa-solid fa-xmark"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <div class="price-box">
                                                    <h5>Total :</h5>
                                                    <h4 class="theme-color fw-bold">$106.58</h4>
                                                </div>

                                                <div class="button-group">
                                                    <a href="cart" class="btn btn-sm cart-button">View Cart</a>
                                                    <a href="check-out" class="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="right-side onhover-dropdown">
                                        <div class="delivery-login-box">
                                            <div class="delivery-icon">
                                                <i data-feather="user"></i>
                                            </div>
                                            <div class="delivery-detail">
                                                <h6>Hello,</h6>
                                                <h5>My Account</h5>
                                            </div>
                                        </div>

                                        <div class="onhover-div onhover-div-login">
                                            <ul class="user-box-name">
                                                <li class="product-box-contain">
                                                    <i></i>
                                                    <a href="/login">Log In</a>
                                                </li>

                                                <li class="product-box-contain">
                                                    <a href="/order-history">Order History</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid-lg navbar-sp" style="background-color: var(--theme-color);">
            <div class="row">
                <div class="col-12">
                    <div class="header-nav">
                        <div class="header-nav-left">
                            <div class="category-dropdown">
                                <div class="category-title">
                                    <h5 class="text-white">Categories</h5>
                                    <button type="button" class="btn p-0 close-button text-content">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div class="header-nav-middle">
                            <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                                <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                                    <div class="offcanvas-header navbar-shadow">
                                        <h5 class="text-white text-menu-sp">Menu</h5>
                                        <button class="btn-close lead" type="button"
                                            data-bs-dismiss="offcanvas"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown">
                                                <a class="nav-link nav-link-no-dropdown dropdown-toggle text-white text-dark-sp" href="/">Home</a>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link nav-link-dropdown dropdown-toggle text-white text-dark-sp" href="javascript:"
                                                    data-bs-toggle="dropdown">Categories</a>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <a class="dropdown-item" href="/product-list/">Fruits</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/product-list/">Vegetables</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/product-list/">Drink</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="/product-list/">Breakfast</a>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li class="nav-item dropdown">
                                                <a class="nav-link nav-link-no-dropdown dropdown-toggle text-white text-dark-sp" href="/product-list/">Product</a>
                                            </li>

                                            <li class="nav-item dropdown dropdown-mega">
                                                <a class="nav-link nav-link-no-dropdown dropdown-toggle ps-xl-2 ps-0 text-white text-dark-sp"
                                                    href="/contact">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header End -->
</template>
<style>
.all-category {
    width: 150px;
}
.nav-link-dropdown {
    margin-right: 12px;
}
.nav-link-no-dropdown::before {
    content: none !important;
}
@media (max-width: 767px) {
    header .top-nav {
        padding-bottom: 24px;
    }
    header .top-nav .navbar-top .rightside-box .right-side-menu .right-side.header-cart {
        display: block;
    }
    .navbar-sp {
        background-color: white !important;
    }
    .text-dark-sp {
        color: #4a5568 !important;
    }
    .text-menu-sp {
        color: var(--theme-color) !important;
    }
}
</style>
