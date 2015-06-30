$(function() {
  $('.nav.navbar-nav a').click(function() {
    var href = $(this).attr('href');　// idの取得
    console.log(href);
    $('.nav.nav-tabs a[href="' + href + '"]').tab('show'); // タブ名を選択
  });
});
