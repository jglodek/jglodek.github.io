(function(){$(function(){var t,o,n,e,r,u,i;return o=$(".hero"),n=$(".hero .hero-bottom"),t=$(document),e=$(window),i=function(){var t,n;return n=e.height(),t=n>400?n:400,o.height(t)},u=function(){var o,r,u,i;return r=t.scrollTop(),i=e.height(),o=r/i,u="translate3d(0px,"+300*o+"px, 0px)",n.css("transform",u),n.css("opacity",1.5-1.5*o)},$(window).resize(function(){return i()}),i(),$(window).scroll($.throttle(10,u)),u(),$(".hero-bottom").css({"margin-bottom":"50px",opacity:0}),r=function(){return $(".hero-bottom").animate({"margin-bottom":"0",opacity:1},1e3)},setTimeout(r,100)})}).call(this);