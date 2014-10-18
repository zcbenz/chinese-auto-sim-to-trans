(function() {
  var isIE = !!(window.attachEvent && !window.opera);
  if (isIE) return;

  var supported = ['zh-tw', 'zh-sg', 'zh-hk', 'zh-hant'];
  if (supported.indexOf(navigator.language) == -1) return;

  window.onload = function() {
    var tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.async = true;
    tag.src = './lazy-loaded.js';
    (document.getElementsByTagName('head')[0] ||
     document.getElementsByTagName('body')[0]).appendChild(tag);
  };
})();
