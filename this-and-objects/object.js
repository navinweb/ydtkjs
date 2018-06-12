(function() {
  var strPromitive = "string primitive";
  typeof strPromitive;
  strPromitive instanceof String;

  var strObject = new String("string primitive");
  typeof strObject;
  strObject instanceof String;

  Object.prototype.toString.call(strObject);

  var myObject = {
    a: 2
  };

  myObject.a; // 2
  myObject["a"]; // 2

  // Computed property names
  var prefix = "foo";

  var prefixObject = {
    [prefix + "var"]: "hi"
  };

  console.log(prefixObject.foovar);

  Object.defineProperty(myObject, "a", {
    get: function() {
      return this.value;
    },
    configurable: true,
    enumerable: true
  });

  console.log(myObject.a);

  Object.preventExtensions(myObject);
  Object.seal(myObject);
})();
