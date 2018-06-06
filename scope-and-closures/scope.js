"use strict";

var b = 2;

(function() {
  var a = 1;

  (function() {
    var b = 12;
  })();

  let d = el => {
    return el;
  };

  (function() {
    var c = 3;

    console.log(a);
    console.log(c);
    console.log(d(4));
    console.log(b);
  })();
})();
