// JavaScript Document

;$(function (){

  var $trigger = $('#accordion h2');

  $trigger.on('click', function () {

    var $this = $(this),
        $article = $('article'),
        $relArticle = $this.next('article');

    // HINT: Something should happen here...

    if($relArticle.hasClass('expanded')) {
      return;
    } else {
      $relArticle.addClass('expanded');
    }
  });

});