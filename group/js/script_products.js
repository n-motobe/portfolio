$(function () {
  // クリックされたボタンのvalue属性を取得
  $(".filter-button").click(function () {
    var target = $(this).attr("value");
    //　すべてのli要素を調べる
    $(".list li").each(function () {
      // 一度すべて非表示にする
      $(this).animate({ opacity: 0 }, 300, function () {
        $(this).hide();

        // クリックされたボタンのvalue属性をクラスに持つliだけを再表示
        if ($(this).hasClass(target) || target == "all") {
          $(this).show();
          $(this).animate({ opacity: 1 }, 300);
        }
      });
    });
  });
});

