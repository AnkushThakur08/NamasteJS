// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function () {
//   count++;
//   console.log("Button was clicked", count);
// });

function secureCount() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    count++;
    console.log("Button was clicked", count);
  });
}

secureCount();
