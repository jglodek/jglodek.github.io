(function() {
  $(function() {
    var i, refreshHeroBottomPosition, refreshHeroHeight;
    refreshHeroHeight = function() {
      var hero, windowHeight;
      hero = $(".hero");
      windowHeight = $(window).height();
      return hero.height(windowHeight);
    };
    $(window).resize(function() {
      return refreshHeroHeight();
    });
    refreshHeroHeight();
    refreshHeroBottomPosition = function() {
      var hero, heroBottom, ratio, scrollTop, translate3d, windowHeight;
      hero = $(".hero");
      heroBottom = $(".hero .content");
      scrollTop = $(document).scrollTop();
      windowHeight = $(window).height();
      ratio = scrollTop / windowHeight;
      translate3d = "translate3d(0px," + (ratio * 300) + "px, 0px)";
      heroBottom.css("-webkit-transform", translate3d);
      heroBottom.css("transform", translate3d);
      return heroBottom.css("opacity", 1 - 1 * ratio);
    };
    i = 0;
    return $(window).scroll(function() {
      if (i % 2 === 0) {
        refreshHeroBottomPosition();
      }
      return i += 1;
    });
  });

}).call(this);
