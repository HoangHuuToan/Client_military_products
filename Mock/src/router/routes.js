const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'home-page',
        path: '',
        component: () => import('pages/LoginPage.vue'),
        meta: {
          title: 'Homepage',
          noRequiredAuth: true,
        },
      },
      {
        name: 'login',
        path: '/login/',
        component: () => import('pages/LoginPage.vue'),
        meta: {
          title: 'Login',
          noRequiredAuth: true,
        },
      },
      {
        name: 'product-list',
        path: '/product-list/',
        component: () => import('pages/ProductList.vue'),
        meta: {
          title: 'Product list',
          noRequiredAuth: true,
        },
      },
      {
        name: 'product-detail',
        path: '/product-detail/',
        component: () => import('pages/ProductDetail.vue'),
        meta: {
          title: 'Product detail',
          noRequiredAuth: true,
        },
      },
      {
        name: 'order-success',
        path: 'order-success',
        component: () => import('pages/OrderSuccess.vue'),
        meta: {
          title: 'Order Success',
          noRequiredAuth: true,
        },
      },
      {
        name: 'cart',
        path: 'cart',
        component: () => import('pages/OrderCart.vue'),
        meta: {
          title: 'Cart',
          noRequiredAuth: true,
        },
      },
      {
        name: 'check-out',
        path: 'check-out',
        component: () => import('pages/CheckOut.vue'),
        meta: {
          title: 'Check Out',
          noRequiredAuth: true,
        },
      },
      {
        name: 'order-history',
        path: 'order-history',
        component: () => import('pages/OrderHistory.vue'),
        meta: {
          title: 'Order history',
          noRequiredAuth: true,
        },
      },
      {
        name: 'order-detail',
        path: 'order-detail',
        component: () => import('pages/OrderDetail.vue'),
        meta: {
          title: 'Order detail',
          noRequiredAuth: true,
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/admin/MainLayout.vue'),
    children: [
      {
        name: 'admin',
        path: '/admin/',
        component: () => import('src/pages/admin/IncomeListAdmin.vue'),
        meta: {
          title: 'Income list',
          noRequiredAuth: true,
        },
      },
      {
        name: 'product-list-admin',
        path: '/admin/product-list/',
        component: () => import('src/pages/admin/ProductListAdmin.vue'),
        meta: {
          title: 'Product list',
          noRequiredAuth: true,
        },
      },
      {
        name: 'add-product',
        path: '/admin/add-product/',
        component: () => import('src/pages/admin/AddProductAdmin.vue'),
        meta: {
          title: 'Add product',
          noRequiredAuth: true,
        },
      },
      {
        name: 'add-product-confirm',
        path: '/admin/add-product-confirm/',
        component: () => import('src/pages/admin/AddProductConfirmAdmin.vue'),
        meta: {
          title: 'Add product confirm',
          noRequiredAuth: true,
        },
      },
      {
        name: 'add-product-complete',
        path: '/admin/add-product-complete/',
        component: () => import('src/pages/admin/AddProductCompleteAdmin.vue'),
        meta: {
          title: 'Add product complete',
          noRequiredAuth: true,
        },
      },
      {
        name: 'edit-product',
        path: '/admin/edit-product/',
        component: () => import('src/pages/admin/EditProductAdmin.vue'),
        meta: {
          title: 'Edit product',
          noRequiredAuth: true,
        },
      },
      {
        name: 'edit-product-confirm',
        path: '/admin/edit-product-confirm/',
        component: () => import('src/pages/admin/EditProductConfirmAdmin.vue'),
        meta: {
          title: 'Edit product confirm',
          noRequiredAuth: true,
        },
      },
      {
        name: 'edit-product-complete',
        path: '/admin/edit-product-complete/',
        component: () => import('src/pages/admin/EditProductCompleteAdmin.vue'),
        meta: {
          title: 'Edit product complete',
          noRequiredAuth: true,
        },
      },
      {
        name: 'product-detail-admin',
        path: '/admin/product-detail/',
        component: () => import('src/pages/admin/ProductDetailAdmin.vue'),
        meta: {
          title: 'Product detail',
          noRequiredAuth: true,
        },
      },
      {
        name: 'income-list-admin',
        path: '/admin/income-list/',
        component: () => import('src/pages/admin/IncomeListAdmin.vue'),
        meta: {
          title: 'Income list',
          noRequiredAuth: true,
        },
      },
      {
        name: 'edit-income-quantity',
        path: '/admin/edit-income-quantity/',
        component: () => import('src/pages/admin/EditIncomeQuantity.vue'),
        meta: {
          title: 'Edit income quantity',
          noRequiredAuth: true,
        },
      },
      {
        name: 'edit-income-quantity-confirm',
        path: '/admin/edit-income-quantity-confirm/',
        component: () => import('src/pages/admin/EditIncomeQuantityConfirm.vue'),
        meta: {
          title: 'Edit income quantity confirm',
          noRequiredAuth: true,
        },
      },
      {
        name: 'edit-income-quantity-complete',
        path: '/admin/edit-income-quantity-complete/',
        component: () => import('src/pages/admin/EditIncomeQuantityComplete.vue'),
        meta: {
          title: 'Edit income quantity complete',
          noRequiredAuth: true,
        },
      },
      {
        name: 'income-detail-admin',
        path: '/admin/income-detail/',
        component: () => import('src/pages/admin/IncomeDetailAdmin.vue'),
        meta: {
          title: 'Income detail',
          noRequiredAuth: true,
        },
      },
      {
        name: 'income-cancel-admin',
        path: '/admin/income-cancel/',
        component: () => import('src/pages/admin/IncomeCancel.vue'),
        meta: {
          title: 'Income cancel',
          noRequiredAuth: true,
        },
      },
      {
        name: 'ship-and-receive-detail-admin',
        path: '/admin/ship-and-receive-detail/',
        component: () => import('src/pages/admin/ShipAndReceiveDetailAdmin.vue'),
        meta: {
          title: 'Ship and receive detail',
          noRequiredAuth: true,
        },
      },
      {
        name: 'ship-plan-list-admin',
        path: '/admin/ship-plan-list/',
        component: () => import('src/pages/admin/ShipPlanListAdmin.vue'),
        meta: {
          title: 'Ship plan list',
          noRequiredAuth: true,
        },
      },
      {
        name: 'add-ship-plan-admin',
        path: '/admin/add-ship-plan/',
        component: () => import('src/pages/admin/AddShipPlanAdmin.vue'),
        meta: {
          title: 'Add ship plan',
          noRequiredAuth: true,
        },
      },
      {
        name: 'add-ship-plan-complete-admin',
        path: '/admin/add-ship-plan-complete/',
        component: () => import('src/pages/admin/AddShipPlanCompleteAdmin.vue'),
        meta: {
          title: 'Add ship plan complete',
          noRequiredAuth: true,
        },
      },
      {
        name: 'ship-schedule-admin',
        path: '/admin/ship-schedule/',
        component: () => import('src/pages/admin/ShipScheduleAdmin.vue'),
        meta: {
          title: 'Ship schedule',
          noRequiredAuth: true,
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayoutSecond.vue'),
    children: [
      {
        name: 'home-page-second',
        path: 'second',
        component: () => import('pages/HomePage.vue'),
        meta: {
          title: 'Homepage Second',
          noRequiredAuth: true,
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    redirect: 'menu',
  },
];

export default routes;
