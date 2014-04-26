(function() {
  $(function() {
    var i, initialCallback, refreshHeroBottomPosition, refreshHeroHeight;
    refreshHeroHeight = function() {
      var hero, windowHeight;
      hero = $(".hero");
      windowHeight = $(window).height();
      return hero.height(windowHeight);
    };
    refreshHeroBottomPosition = function() {
      var hero, heroBottom, ratio, scrollTop, translate3d, windowHeight;
      hero = $(".hero");
      heroBottom = $(".hero .hero-bottom");
      scrollTop = $(document).scrollTop();
      windowHeight = $(window).height();
      ratio = scrollTop / windowHeight;
      translate3d = "translate3d(0px," + (ratio * 300) + "px, 0px)";
      heroBottom.css("-webkit-transform", translate3d);
      heroBottom.css("transform", translate3d);
      return heroBottom.css("opacity", 1 - 1 * ratio);
    };
    $(window).resize(function() {
      return refreshHeroHeight();
    });
    refreshHeroHeight();
    i = 0;
    $(window).scroll(function() {
      if (i % 2 === 0) {
        refreshHeroBottomPosition();
        i = 0;
      }
      return i += 1;
    });
    initialCallback = function() {
      return $(".hero").removeClass("initial");
    };
    return setTimeout(initialCallback, 100);
  });

}).call(this);
