(function() {
  'use strict';

  window.showMore = function () {
    var elements = document.getElementsByClassName('toggle');
    for (var i = 0; i < elements.length; i++) {
      elements[i].className = 'toggle';
    }
    document.getElementById('button-more').style.display = 'none';
    document.getElementById('button-less').style.display = 'inline-block';
  };

  window.showLess = function () {
    var elements = document.getElementsByClassName('toggle');
    for (var i = 0; i < elements.length; i++) {
      elements[i].className = 'toggle is-hidden';
    }
    document.getElementById('button-more').style.display = 'inline-block';
    document.getElementById('button-less').style.display = 'none';
  };
})();