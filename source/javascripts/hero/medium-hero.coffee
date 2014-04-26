$ ->
  refreshHeroHeight = ->
    hero = $(".hero")
    windowHeight = $(window).height()
    hero.height(windowHeight)

  $(window).resize -> refreshHeroHeight()
  refreshHeroHeight()

  refreshHeroBottomPosition = ->
    hero = $(".hero")
    heroBottom = $(".hero .content")
    scrollTop = $(document).scrollTop()
    windowHeight = $(window).height()
    ratio = scrollTop/windowHeight
    translate3d = "translate3d(0px,#{ratio*300}px, 0px)"
    heroBottom.css("-webkit-transform", translate3d)
    heroBottom.css("transform", translate3d)
    heroBottom.css("opacity", 1-1*ratio)

  i = 0
  $(window).scroll ->
    if i%2 == 0
      refreshHeroBottomPosition()
    i+=1
