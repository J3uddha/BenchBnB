(function (root) {

    var _bounds = {}; // POJO HOE!
    var CHANGE_EVENT = 'change';

  root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
    
    all: function () {
      return _bounds;
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case 'FILTER_PARAMS':
          _bounds = payload.filterParams;
          FilterParamsStore.emit(CHANGE_EVENT);
          // BenchStore.emit(CHANGE_EVENT);
          break;
        }
    }),

  });


})(this);
