window.initSlickProductDetailImage = function () {
  $('.slick-product-detail-image-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-product-detail-image-2'
  });

  $('.slick-product-detail-image-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-product-detail-image-1',
    dots: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1400,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    }, {
      breakpoint: 430,
      settings: {
        slidesToShow: 3,
        vertical: false,
      }
    },
    ]
  });
};

window.initSlickProductDetailRelated = function () {
  $('.slick-product-detail-related').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
      breakpoint: 1430,
      settings: {
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3500,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    ]
  });
};

window.initSlickProductDetailImageAdmin = function () {
  $('.slick-product-detail-image-admin-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick-product-detail-image-admin-2'
  });

  $('.slick-product-detail-image-admin-2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slick-product-detail-image-admin-1',
    dots: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [{
      breakpoint: 1400,
      settings: {
        vertical: false,
      }
    },
    {
      breakpoint: 992,
      settings: {
        vertical: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        vertical: false,
      }
    }, {
      breakpoint: 430,
      settings: {
        slidesToShow: 3,
        vertical: false,
      }
    },
    ]
  });
};

window.showLoginUnsuccessfulModal = function () {
  $('#loginUnsuccessfulModal').modal('show');
};