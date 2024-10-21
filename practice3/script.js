/*
  背景色が伸びてテキストを表示
  */
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime() {
  // 背景色が伸びて出現（左から右）
  $(".bgLRextendTrigger").each(function () {
    //bgLRextendTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("bgLRextend"); // 画面内に入ったらbgLRextendというクラス名を追記
    } else {
      $(this).removeClass("bgLRextend"); // 画面外に出たらbgLRextendというクラス名を外す
    }
  });

  // 文字列を囲う子要素
  $(".bgappearTrigger").each(function () {
    //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("bgappear"); // 画面内に入ったらbgappearというクラス名を追記
    } else {
      $(this).removeClass("bgappear"); // 画面外に出たらbgappearというクラス名を外す
    }
  });
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  BgFadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// ヘッダーのオンオフ--------------------------------------
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header").addClass("is-active");
    $(".counseling_btn_small").addClass("is-active");
  } else {
    $(".header").removeClass("is-active");
    $(".counseling_btn_small").removeClass("is-active");
  }
});

// トレーナー--------------------------------------

$(function () {
  $('#contents div[id != "trainer"]').hide();
  $(".trainers a").click(function () {
    $("#contents div").hide();
    $($(this).attr("href")).show();
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
  });
});

// swiper----------------------------------------
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

//FAQのアコーディオン--------------------------------------

$(".accordion__question").on("click", function () {
  $(this).toggleClass("active");
  $(this).next().slideToggle(200);
});

// TOTOP----------------------------------------------
var $pageTop = $(".page-top");

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $pageTop.fadeIn();
  } else {
    $pageTop.fadeOut();
  }
});
$pageTop.on("click", function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    200
  );
  return false;
});

// フェードアップ-----------------------------------------------
$(function () {
  function fadeUp() {
    $(".fade").each(function () {
      var elementPosition = $(this).offset().top + 100;
      var windowHeight = $(window).height();
      var scroll = $(window).scrollTop();
      if (scroll >= elementPosition - windowHeight) {
        $(this).addClass("fadeUp");
      }
    });
  }
  $(window).scroll(function () {
    fadeUp();
  });
});
