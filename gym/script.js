// ---------------------------------
// ハンバーガー
//----------------------------------
$(".hamburger_btn").on("click", function () {
  $(this).toggleClass("is-active");
  $(".nav_menu").toggleClass("is-active");
});
$(".nav_menu a").on("click", function () {
  $(this).removeClass("is-active");
  $(".nav_menu").removeClass("is-active");
});

$(document).on("click", function (e) {
  if (!$(e.target).closest(".nav_menu, .hamburger_btn").length) {
    $(".hamburger_btn").removeClass("is-active");
    $(".nav_menu").removeClass("is-active");
  }
});

// ---------------------------------
// のびる四角
//----------------------------------
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

// ---------------------------------
//文字の スライドイン
//----------------------------------


$(function () {
  $(".slide-in").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("visible");
    } else {
      $(this).removeClass("visible");
    }
  });
});

$(function () {
  $(".slide-in2").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("visible");
    } else {
      $(this).removeClass("visible");
    }
  });
});

// ---------------------------------
// 下からふわっと
//----------------------------------

$(function () {
  $(".inview").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });
});
$(function () {
  $(".inview2").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });
});

// ---------------------------------
// ニュースタブ
//----------------------------------

$(document).ready(function () {
  $(".tab").click(function () {
    // タブの切り替え
    $(".tab").removeClass("active");
    $(this).addClass("active");

    const category = $(this).data("category");

    // ニュースの表示切り替え
    $(".news-item").removeClass("active");
    $(".news-item." + category).addClass("active");
  });
});

// ---------------------------------
// Q&A
//----------------------------------

$(document).ready(function () {
  $(".faq-question").click(function () {
    $(this).next(".faq-answer").slideToggle(); // 次の要素（回答）をスライド表示/非表示
  });
});

// ---------------------------------
// 問い合わせフォーム
//----------------------------------

$(document).ready(function () {
  $("#inquiryType").change(function () {
    if ($(this).val() === "viewing") {
      $("#viewingForm").show();
      $("#membershipForm").hide();
    } else {
      $("#viewingForm").hide();
      $("#membershipForm").show();
    }
  });

  $("#reservationForm").on("submit", function (e) {
    let valid = true;

    // Validate fields based on the visible form
    if ($("#inquiryType").val() === "viewing") {
      if (
        !$("#name").val() ||
        !$("#email").val() ||
        !$("#phone").val() ||
        !$("#store").val() ||
        !$("#date").val() ||
        !$("#time").val()
      ) {
        valid = false;
      }
    } else {
      if (
        !$("#nameMembership").val() ||
        !$("#birthdate").val() ||
        !$("#gender").val() ||
        !$("#emailMembership").val() ||
        !$("#phoneMembership").val() ||
        !$("#storeMembership").val()
      ) {
        valid = false;
      }
    }

    if (!valid) {
      e.preventDefault();
      alert("すべてのフィールドを正しく入力してください。");
    }
  });
});

// ---------------------------------
// ページ内リンク
//----------------------------------
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $("html, body").animate(
      {
        scrollTop: $target.offset().top - 75,
      },
      600,
      "swing"
    );
  });
});

// ---------------------------------
// 画面右の問い合わせボタン
//----------------------------------
$(document).ready(function () {
  var $contactButton = $("#contact-button");
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        // 200pxスクロールしたら表示
        $contactButton.fadeIn();
      } else {
        $contactButton.fadeOut();
      }
    });
  }
});

// ---------------------------------
// ヘッダーのロゴのサイズ変更
//----------------------------------

$(window).on("scroll", function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    $(".header_logo").each(function () {
      var targetPosition = $(this).offset().top; // 元の位置
      var scroll = $(window).scrollTop(); // スクロール位置

      // スクロール位置が要素の元の位置を超えた場合
      if (scroll> targetPosition - $(window).height()) {
        $(this).addClass("small");
      }
      // スクロール位置が元の位置に戻った場合
      else if (scroll<= targetPosition) {
        $(this).removeClass("small");
      }
    });
  }
});



window.addEventListener('scroll',function() {
  const height = window.innerHeight;                    //画面の高さを取得
  const scroll = this.pageYOffset;                      //スクロール量
  const marker = document.querySelectorAll('.marker');  //マーカーを引く要素を取得
  const value = scroll - height + 100                   //後ろの数字を弄ることで、イベント位置をずらす

  // markerクラスを持っている要素全てに処理を行う
  marker.forEach(function(element){
      //要素が画面内の指定の位置に来たら「on」クラスをつける
      if (scroll > element.getBoundingClientRect().top + value) {
          element.classList.add('on')
      }
  });
})