var Search = React.createClass({

  getInitialState: function () {
    return {'bounds': {
      'east': 0,
      'north': 0,
      'south': 0,
      'west': 0,
      'minSeats': 0,
      'maxSeats': 16
    }};
  },

  componentDidMount: function () {
    FilterParamsStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({bounds: FilterParamsStore.all()});
    ApiUtil.fetchBenches(this.state.bounds);
  },

  handleMapClick: function (latLng) {
    pos = {
      lat: latLng.lat(),
      lng: latLng.lng()
    };

    this.props.history.pushState(null, '/benches/new', pos);
  },

  handleIdle: function (bounds) { // comes in as POJO
    FilterActions.receiveAll(bounds);
    this.setState(bounds);
  },

  handleSeating: function (seating) {
    var newBounds = this.state;

    switch (seating.target.id) {
      case "min-chairs":
        newBounds.bounds.minSeats = seating.target.value;
        break;
      case "max-chairs":
        newBounds.bounds.maxSeats = seating.target.value;
        break;
    }
    FilterActions.receiveAll(newBounds);
    this.setState(newBounds);
    console.log(this.state);
  },

  render: function () {
    return (
      <div>
        <Map handleMapClick={this.handleMapClick} handleIdle={this.handleIdle}/>
        <FilterParams handleSeating={this.handleSeating}/>
        <Index />
      </div>
    );
  }

});
