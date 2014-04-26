$ ->
  $hero = $(".hero")
  $heroBottom = $(".hero .hero-bottom")
  $document = $(document)
  $window = $(window)

  refreshHeroHeight = ->
    windowHeight = $window.height()
    targetHeight = if windowHeight > 400 then windowHeight else 400
    $hero.height(targetHeight)

  refreshHeroBottomPosition = ->
    scrollTop = $document.scrollTop()
    windowHeight = $window.height()
    ratio = scrollTop/windowHeight
    translate3d = "translate3d(0px,#{ratio*300}px, 0px)"
    if windowHeight > 400
      $heroBottom.css("transform", translate3d)
      $heroBottom.css("opacity", 1-1.5*ratio)
      #$hero.css {"-webkit-filter": "blur(#{8*ratio}px)"}


  # RESIZE BINDING
  $(window).resize -> refreshHeroHeight()
  refreshHeroHeight()


  # SCROLL BINDING

  $(window).scroll $.throttle(10, refreshHeroBottomPosition)

  refreshHeroBottomPosition()

  #INITIAL CALLBACK
  $(".hero-bottom").css({"margin-bottom": "50px", opacity: 0})
  initialCallback = ->
    $(".hero-bottom").animate({"margin-bottom": "0", opacity: 1}, 1000)

  setTimeout initialCallback, 100


