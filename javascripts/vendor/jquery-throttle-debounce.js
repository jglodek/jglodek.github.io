/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
// Copyright (c) 2010 "Cowboy" Ben Alman,
!function(e,t){"$:nomunge";var n,r=e.jQuery||e.Cowboy||(e.Cowboy={});r.throttle=n=function(e,n,i,o){function a(){function r(){u=+new Date,i.apply(c,f)}function a(){s=t}var c=this,l=+new Date-u,f=arguments;o&&!s&&r(),s&&clearTimeout(s),o===t&&l>e?r():n!==!0&&(s=setTimeout(o?a:r,o===t?e-l:e))}var s,u=0;return"boolean"!=typeof n&&(o=i,i=n,n=t),r.guid&&(a.guid=i.guid=i.guid||r.guid++),a},r.debounce=function(e,r,i){return i===t?n(e,r,!1):n(e,i,r!==!1)}}(this);