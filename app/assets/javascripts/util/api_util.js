ApiUtil = {
  fetchBenches: function (bounds) {
    console.log("fetching...");
    $.ajax({
      url: '/api/benches',
      method: 'GET',
      dataType: 'json',
      data: bounds,
      success: function (data) {
        ApiActions.receiveAll(data);
      }
    });
  }
};
