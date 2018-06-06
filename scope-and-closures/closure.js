(function() {
  function foo() {
    var a = 333;

    function bar() {
      console.log(a);
    }

    return bar;
  }

  var baz = foo();

  baz();

  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
})();

// Утечка памяти
(function() {
  var run = function() {
    (function() {
      var str = new Array(10000000).join("*");

      var doSomethingWithStr = function() {
        if (str === "something") console.log("str was something");
      };
      doSomethingWithStr();
    })();

    var logIt = function() {
      console.log("interval");
    };
    setInterval(logIt, 100);
  };

  // setInterval(run, 1000);
})();
