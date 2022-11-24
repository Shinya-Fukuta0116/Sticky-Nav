window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

$(window).on('scroll', function () {

  const scrollTop = $(window).scrollTop();
  const bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

  if (bgPosition) {
    $('#app').css('background-position', 'center top -' + bgPosition + 'px');
  }
});