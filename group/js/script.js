$(function () {
  // ナビゲーションにホバーしたとき、日本語に変化させる
  $(".top a").hover(
    function () {
      $(this).text("トップ");
    },
    function () {
      $(this).text("Top");
    }
  );
  $(".products a").hover(
    function () {
      $(this).text("商品一覧");
    },
    function () {
      $(this).text("Products");
    }
  );
  $(".aboutus a").hover(
    function () {
      $(this).text("会社概要");
    },
    function () {
      $(this).text("About Us");
    }
  );
  $(".news a").hover(
    function () {
      $(this).text("ニュース");
    },
    function () {
      $(this).text("News");
    }
  );
  $(".recruit a").hover(
    function () {
      $(this).text("求人情報");
    },
    function () {
      $(this).text("Recruit");
    }
  );
  $(".contact a").hover(
    function () {
      $(this).text("お問い合わせ");
    },
    function () {
      $(this).text("Contact");
    }
  );

  // 上に戻るボタン
  $(".totop a").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 400);
    return false;
  });
});

//スクロールするとふわっと表示される（※ふわっとさせたい要素にクラスinviewをつけてください。）
// スクロール操作したとき

$(function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $(".inview").each(function () {
      $(this).addClass("show");
    });
  } else {
    $(window).on("scroll", function () {
      // クラス名【 inview 】が付与されている、全ての要素に対して処理を実行
      $(".inview").each(function () {
        // ブラウザの最上部から、クラス名【 inview 】が付与されている要素の位置を取得
        var targetPosition = $(this).offset().top;

        // ブラウザの最上部からのスクロール量を取得
        var scroll = $(window).scrollTop();

        // ウィンドウの高さを取得
        var windowHeight = $(window).height();

        // ブラウザの最上部からのスクロール量 > クラス名【 inview 】が付与されている要素の位置 - ウィンドウの高さを取得
        if (scroll > targetPosition - windowHeight) {
          // クラス名【 show 】を付与
          $(this).addClass("show");
        }
      });
    });
  }
});

//   画面全体のフェードイン（※html{display:none;}に設定してください）
$(function () {
  $("html").fadeIn(1000); //1秒かけてフェードイン
});

// スライドショー
$(function () {
  $(".slider")
    // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
    .on("init", function () {
      $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
    })
    // 通常のオプション
    .slick({
      autoplay: true, // 自動再生ON
      fade: true, // フェードON
      arrows: false, // 矢印OFF
      speed: 2000, // スライド、フェードアニメーションの速度2000ミリ秒
      autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
      pauseOnFocus: false, // フォーカスで一時停止OFF
      pauseOnHover: false, // マウスホバーで一時停止OFF
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function (event, slick, currentSlide, nextSlide) {
        // 表示されているスライドに"add-animation"のclassをつける
        $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
        // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
        $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function () {
        // 表示していないスライドはアニメーションのclassを外す
        $(".remove-animation", this).removeClass(
          "remove-animation add-animation"
        );
      },
    });
});
