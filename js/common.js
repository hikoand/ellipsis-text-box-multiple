$(function () {
  const showText = 98;
  let elem = $('.more_text');
  let moreBtnText = 'Show more';
  let lessBtnText = 'Show less';

  elem.each(function (i) {
    console.log(i); //텍스트 각각의 index

    let content = $(this).html();
    console.log(content); //각각의 텍스트

    let contentLeng = content.length;
    let lessText = content.substr(0, showText); //0~98
    let moreText = content.substr(showText, contentLeng); //98~221
    let changeHtml = '';

    if (showText < contentLeng) {
      changeHtml =
        lessText +
        "<span>...</span><span class='more_content'><span>" +
        moreText +
        "</span><a href='#'class='more_btn less'><span>Show more</span></a></span>";
      $(this).html(changeHtml);
    }
  });

  $('.more_btn').click(function () {
    if ($(this).hasClass('less')) {
      $(this).removeClass('less');
      $(this).html('<span>' + lessBtnText + '</span>');
    } else {
      $(this).addClass('less');
      $(this).html('<span>' + moreBtnText + '</span>');
    }

    $(this).prev().toggle();
    $(this).parent().prev().toggle();
  });
});
