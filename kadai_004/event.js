  // ロードされた場合
  $(window).on('load',function ()  {
    console.log('loadイベントが発生しました');
});

  // スクロールされた場合
  $(window).on('scroll',() =>  {
  console.log('scrollイベントが発生しました');
 });