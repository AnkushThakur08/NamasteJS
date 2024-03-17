api.createOrder(function () {
  api.ProcessToPayment(function () {
    api.ShowOrderPage(function () {
      api.UpdateWallet();
    });
  });
});
