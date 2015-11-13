ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: '/api/benches',
      method: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log(data);
        ApiActions.receiveAll(data);
      }
    });
  }
};
