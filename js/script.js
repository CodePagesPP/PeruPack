function Page__updateIndicatorActive() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var documentHeight = $(document).height();

 
  $($('.sec-page').get().reverse()).each(function (index, node) {
    var $node = $(this);
    var offsetTop = parseInt($node.attr('data-offset-top'));

    
    if (scrollTop + windowHeight >= documentHeight - 50) {
      $('#page-nav > li.active').removeClass('active');
      $('#page-nav > li').last().addClass('active'); 
      $('html').attr('data-current-page-index', $('#page-nav > li').length - 1);
      return false;
    }

   
    if (scrollTop + 300 > offsetTop) {
      $('#page-nav > li.active').removeClass('active');
      var currentPageIndex = $node.attr('data-index') || $node.index();
      $('#page-nav > li').eq(currentPageIndex).addClass('active');
      $('html').attr('data-current-page-index', currentPageIndex);
      return false;
    }
  });
}

function Page__updateOffsetTop() {
  
  $('.sec-page').each(function (index, node) {
    var $page = $(node);
    var offsetTop = $page.offset().top;

    $page.attr('data-offset-top', offsetTop);
    $page.attr('data-index', index);  
  });

  Page__updateIndicatorActive();
}
    
      function Page__init() {
        Page__updateOffsetTop();
      }
    
      Page__init();
    
      $(window).resize(Page__updateOffsetTop);
    
      $(window).scroll(Page__updateIndicatorActive);
    