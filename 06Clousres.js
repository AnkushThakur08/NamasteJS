// Print Number 1 to 5 after 1 second of delay

for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }
  close(i);
}

// Closures

function a() {
  var x = 7;

  function b() {
    console.log(x);
  }

  // b();
  return b();
}

// a();
const res = a();
/* We can use res later in the program */

function outest() {
  var c = 100;
  function outer(b) {
    var a = 10;
    function inner() {
      console.log(a, b, c);
    }
    return inner;
  }
  return outer;
}

outest()("hello world")();
