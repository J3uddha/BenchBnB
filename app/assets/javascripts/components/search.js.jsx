var Search = React.createClass({

  handleMapClick: function (latLng) {
    pos = {
      lat: latLng.lat(),
      lng: latLng.lng()
    };
    
    this.props.history.pushState(null, '/benches/new', pos);
  },

  render: function () {
    return (
      <div>
        <Map handleMapClick={this.handleMapClick}/>
        <Index />
      </div>
    );
  }

});
