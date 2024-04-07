const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P1 Resolve");
    reject("P1 Resolve");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 Resolve");
    reject("P2 FAIL");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 Resolve");
    reject("P3 Reject");
  });
}, 2000);

// const result = Promise.all([p1, p2, p3]);
// const result = Promise.allSettled([p1, p2, p3]);
// const result = Promise.race([p1, p2, p3]);
const result = Promise.any([p1, p2, p3]);

result
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
    console.log(error.errors);
  });
