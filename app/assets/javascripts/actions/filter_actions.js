FilterActions = {

  receiveAll: function (filterParams) {
    AppDispatcher.dispatch({
      actionType: 'FILTER_PARAMS',
      filterParams: filterParams
    });
  }

};
