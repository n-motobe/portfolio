// $(document).ready(function () {
//     // 最初に画面幅をチェックする
//     if ($(window).width() <= 768) {
//         executeCommand(); // 命令を実行
//     }

//     // 画面リサイズを監視
//     $(window).resize(function () {
//         if ($(window).width() <= 768) {
//             executeCommand(); // 命令を実行
//         }
//     });

//     // 命令を実行する関数
//     function executeCommand() {
//         // ヘッダーのロゴを消す
//         $('.drawer-menu li:nth-child(4)').remove();
//     }
// });

// $(document).ready(function () {
//     // 最初に画面幅をチェックする
//     if ($(window).width() > 768) {
//         executeCommand(); // 命令を実行
//     }

//     // 画面リサイズを監視
//     $(window).resize(function () {
//         if ($(window).width() > 768) {
//             executeCommand(); // 命令を実行
//         }
//     });

//     // 命令を実行する関数
//     function executeCommand() {
//         // ヘッダーのロゴを消す
//         $('.drawer-menu li:nth-child(4)').add();
//     }
// });

// Drawerの実行
$(document).ready(function () {
    $('.drawer').drawer();
});