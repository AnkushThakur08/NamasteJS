api.createOrder(() => {
  api.ProceedToPayment(() => {
    api.showOrderSummary(() => {
      api.updateWallet();
    });
  });
});
