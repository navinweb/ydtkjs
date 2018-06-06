var b = 10;

function foo(a) {
  var b = a * 2;

  var window = 100;

  function bar(c) {
    console.log(a, b, c);
    console.log(a + window.b);
    console.log(window);
  }

  bar(b * 3);
}

foo(2);

// Eval is break the lexical scope!
(function() {
  var b = 2;

  function foo(str) {
    eval(str);
    console.log(b);
  }

  foo("var b = 3");
})();
