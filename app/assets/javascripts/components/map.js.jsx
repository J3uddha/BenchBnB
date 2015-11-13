var Map = React.createClass({
  // getInitialState: function () {
  //   return {map: "map"};
  // }

componentDidMount: function () {
  BenchStore.addChangeListener(this._onChange);

  var map = React.findDOMNode(this.refs.map);
  var mapOptions = {
    center: {lat: 40.7249641, lng: -73.9968626},
    zoom: 17
  };
  this.map = new google.maps.Map(map, mapOptions);
},

_onChange: function () {
  // ApiUtil.fetchBenches();
  var benches = BenchStore.all();
  benches.map(function (bench) {
    pos = {lat: bench.lat, lng: bench.lon};
    var marker = new google.maps.Marker({
      position: pos,
      title: 'Hello World!'
    });
    marker.setMap(this.map);
  }.bind(this));
},

  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
});
// this.props.benches.lat
