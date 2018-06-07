// Default Binding
function foo() {
  console.log(this.a);
}

var a = 2;

foo(); // 2

(function() {
  "use strict";
  foo();
})();
// END

//
// Implicit Binding
function bar() {
  console.log(this.b);
}

var obj = {
  b: 3,
  bar: bar
};

obj.bar();

var b = "global b";
var baz = obj.bar;

baz();
// END

//
// Explicit Binding
// call == apply
function explicit() {
  console.log(this.e);
}

var e = "global";

var obj2 = {
  e: 222
};

explicit.apply(obj2); // array arg
explicit.call(obj2); // infinitely args
explicit(); //global
// END

//
// Hard Binding
var hard = function() {
  explicit.call(obj2);
};

hard(); // 222
hard.call(window); // 222

//
// Helper
function bind(fn, obj) {
  return function() {
    return fn.apply(obj3, arguments);
  };
}

function test(some) {
  return this.a + some;
}

var obj3 = { a: 333 };

var barBind = test.bind(obj3);

console.log(barBind(3));
// END

//
// new Binding

// END
