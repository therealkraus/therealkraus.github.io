(function($) {
 
    $.fn.visible = function(partial) {
      
        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height() - 100,
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
      
      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
    };
      
  })(jQuery);
  
  var win = $(window);
  
  var allSlideRights = $(".slideRight");
  var allFadeUps = $(".fadeUp");
  
/*   allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("already-visible"); 
    } 
  }); */
  
  win.scroll(function(event) {
    
    allSlideRights.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slide-in-right"); 
      } 
    });

    allFadeUps.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("fade-in-up"); 
      } 
    });
    
  });