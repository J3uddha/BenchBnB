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
  },

  createBench: function (bench) {
    $.ajax({
      url: '/api/benches',
      method: 'POST',
      dataType: 'json',
      data: {bench: bench},
      success: function (data) {
        ApiActions.receiveBench(data);
        console.log("success!");
      }
    });
  }
};
