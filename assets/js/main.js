const mySwiper = new Swiper(".swiper", {
  effect: "fade", // フェードモードにする（デフォルトは 'slide'）
  fadeEffect: {
    crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
  },

  slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  spaceBetween: 0, // スライド間の余白（px）
  centeredSlides: true, // アクティブなスライドを中央に配置する

  loop: true, // 無限ループさせる
  loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数

  speed: 300, // スライドアニメーションのスピード（ミリ秒）

  autoplay: {
    // 自動再生させる
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
    disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
    waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
  },

  grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
  watchSlidesProgress: true, // スライドの進行状況を監視する

  pagination: {
    el: ".swiper-pagination", // ページネーション要素のクラス
    clickable: true, // クリックによるスライド切り替えを有効にする
    type: "bullets", // 'bullets'（デフォルト） | 'fraction' | 'progressbar'
  },

  navigation: {
    nextEl: ".swiper-button-next", // 「次へ」ボタン要素のクラス
    prevEl: ".swiper-button-prev", // 「前へ」ボタン要素のクラス
  },

  scrollbar: {
    el: ".swiper-scrollbar", // スクロールバー要素のクラス
  },

  // thumbs: {
  //   swiper: mySwiper2 // サムネイルのスライダーのインスタンス名
  // },

  breakpoints: {
    // ブレークポイント
    600: {
      // 画面幅600px以上で適用
      slidesPerView: 2,
    },
    1025: {
      // 画面幅1025px以上で適用
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },

  on: {
    // イベントを登録する
    // slideChange: (swiper) => {
    //   console.log("Slide index changed to: " + (swiper.realIndex + 1));
    // },
  },
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
