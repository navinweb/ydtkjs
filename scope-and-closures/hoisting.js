(function() {
  a = 2;
  var a;
  console.log(a);

  console.log(b);
  var b = 3;

//   console.log(c);
//   let c = 4;
})();

(function() {
  // Функция определение
  foo(2);
  function foo(a) {
    console.log(a);
  }

  // Функция Выражение
  var foo = function bar(a) {
    console.log(a);
  };
  foo(3);
})();

// Функции поднимается первыми - приоритет
// Далее переменные
// Поднятые функции с одинаковыми именами перетираются