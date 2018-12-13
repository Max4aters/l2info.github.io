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

  var GMT_BRASILIA = '-02:00';
  var gmt = GMT_BRASILIA;

  window.refreshGMT = function () {
    var date = null;
    var elements = document.getElementsByClassName('gmt');
    for (var i = 0; i < elements.length; i++) {
      date = moment('2018-12-12T'+ elements[i].dataset.hour +':00'+ elements[i].dataset.gmt);
      date.utcOffset(gmt)
      elements[i].innerHTML = date.format('HH[h]mm');
    }

    var text = '* De acordo com o GMT '+ gmt.replace(':', '').replace(/0/g, '') +'.';
    if (gmt == GMT_BRASILIA) {
      text = '* Brasília tem o GMT -2 durante o horário de verão.'; 
    }

    elements = document.getElementsByClassName('gmt-description');
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = text;
    }
  };
  window.refreshGMT();

  window.updateGMT = function (value) {
    gmt = value;
    window.refreshGMT();
  };

})();