$(function() {
    // #acc1以外を縮める
    $("dd[id != 'acc1']").css("width", "0");

    // a要素をクリック
    $("a").click(function() {
        // currentBtnクラスがついていなければ、if文の中を実行
        if ($(this).hasClass("currentBtn")) {

        // 現在のコンテンツを縮める
        $(".current").animate({"width": 0}, 300);

        // 展開するコンテンツの取得
        $($(this).attr("href")).animate({"width": "800px" }, 300);

        // currentクラスを削除
        $("dd").removeClass();

        // 展開されたコンテンツにcurrentクラスを追加
        $($(this).att("href")).addClass("current");

        //currentBtnクラスを削除
        $("a").removeClass();
        
        }

        //　リンクの無効化
        return false;
    });
});