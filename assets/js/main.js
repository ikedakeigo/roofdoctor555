$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

$(".js-accordion_title").on("click", function () {
  // クリックした次の要素を開閉
  $(this).next().slideToggle(300);
  // タイトルにopenクラスを付け外しして矢印の向きを変更
  $(this).toggleClass("open", 300);
});



// drawer
$(".drawer-icon, .drawer-background, .drawer-content-item, .drawer-item-link, .drawer-nav-item-link-sub").on("click", function () {
  // クリックした時にis-activeがついていたら外す、ついていなかったら付ける！
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer-content").toggleClass("is-active");
  $(".drawer-background").toggleClass("is-active");
});

// nav スクロールシャドー
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 150) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});


// ページトップへ戻るボタンの設定
jQuery(function() {
  var topBtn = jQuery('#pageTop');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
}
);

// ハンバーガーメニューの色の変更
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 150) {
    $(".drawer-icon").addClass("active");
  } else {
    $(".drawer-icon").removeClass("active");
  }
});

// メニューボタンとナビゲーションのトグル設定
document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.querySelector('#menuButton');
  var gNav = document.querySelector('#gNav');

  menuButton.addEventListener('click', function() {
    gNav.classList.toggle('active');
    menuButton.classList.toggle('active');
    document.body.classList.toggle('active');
    // document.getElementById("mask").classList.toggle("active");
  });
  gNav.addEventListener("click", function () {
      gNav.classList.remove("active");
      menuButton.classList.remove("active");
      document.body.classList.remove("active");
  });
});


// トップページ動画
if ($(".homeMv_video").length) {
  videoSize();
  $(window).on('resize', function () {
    videoSize();
  });

  function videoSize() {
    var $elm = $(".homeMv_video"),
      elmSrc = $elm.attr("src"),
      winWidth = window.innerWidth,
      mvHeight = $(".homeMv").height(),
      widthBase,
      heightBase;
    if (winWidth <= 767) {
      if (elmSrc.indexOf("sp") == -1) {
        $elm.attr("src", "/assets/video/main_sp.mp4");
      }
      widthBase = winWidth / 10
      heightBase = mvHeight / 16
      if (heightBase > widthBase) {
        $elm.css({
          "width": heightBase * 10.1 + "px",
          "height": "102%"
        });
      } else {
        $elm.css({
          "width": "102%",
          "height": "auto"
        });
      }
    } else {
      if (elmSrc.indexOf("sp") > -1) {
        $elm.attr("src", "/assets/video/main.mp4");
      }
      widthBase = winWidth / 16
      heightBase = mvHeight / 9
      if (heightBase > widthBase) {
        $elm.css({
          "width": heightBase * 16.1 + "px",
          "height": "102%"
        });
      } else {
        $elm.css({
          "width": "100%",
          "height": "auto"
        });
      }
    }
  }
  // $(".js-modal-video").modalVideo({
  //   channel: "vimeo",
  //   vimeo: {
  //     color: "fff",
  //     byline: false,
  //     portrait: false,
  //   },
  // });
}


  // スクロールイベントの各位置取得 （グローバル変数）
  var winPos = 0;
  var winHeight = $(window).outerHeight();
  $(window).on("scroll", function () {
    winPos = $(this).scrollTop();
    winHeight = $(window).outerHeight();
  });

  // ヘッダー色の変更
  if ($(".lyMvWhite").length) {
    headerWhite();
    $(window).on("scroll", function () {
      headerWhite();
    });

    function headerWhite() {
      var mvHeight = $(".lyMvWhite").outerHeight();
      // console.log(mvHeight);
      if (winPos < mvHeight - 40) {
        $(".header_logo img").attr("src", "/assets/image/common/logo_white.png");
        $(".gNavBtn").addClass("white");
      } else {
        $(".header_logo img").attr("src", "/assets/image/common/logo.png");
        $(".gNavBtn").removeClass("white");
      }
    }
  }
