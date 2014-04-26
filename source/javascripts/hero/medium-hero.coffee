$ ->

  refreshHeroHeight = ->
    hero = $(".hero")
    windowHeight = $(window).height()
    hero.height(windowHeight)

  refreshHeroBottomPosition = ->
    hero = $(".hero")
    heroBottom = $(".hero .hero-bottom")
    scrollTop = $(document).scrollTop()
    windowHeight = $(window).height()
    ratio = scrollTop/windowHeight
    translate3d = "translate3d(0px,#{ratio*300}px, 0px)"
    heroBottom.css("transform", translate3d)
    heroBottom.css("opacity", 1-1.3*ratio)

  # RESIZE BINDING
  $(window).resize -> refreshHeroHeight()
  refreshHeroHeight()

  # SCROLL BINDING
  i = 0
  $(window).scroll ->
    if i%1 == 0
      refreshHeroBottomPosition()
      i= 0
    i+=1

  #INITIAL CALLBACK
  $(".hero-bottom").css({"margin-bottom": "50px", opacity: 0})
  initialCallback = ->
    $(".hero-bottom").animate({"margin-bottom": "0", opacity: 1}, 1000)
  setTimeout initialCallback, 100


