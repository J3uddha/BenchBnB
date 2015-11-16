var Map = React.createClass({

  getInitialState: function () {
    return {markers: []};
  },

componentDidMount: function () {

  BenchStore.addChangeListener(this._onChange);
  var map = React.findDOMNode(this.refs.map);
  var mapOptions = {
    center: {lat: 40.7249641, lng: -73.9968626},
    zoom: 13
  };
  this.map = new google.maps.Map(map, mapOptions);
  this.map.addListener('idle', function() {
    var latLngBounds = this.map.getBounds();
    var ne = latLngBounds.getNorthEast();
    var sw = latLngBounds.getSouthWest();

    var bounds = {'bounds': {
      'east': ne.lat(),
      'north': ne.lng(),
      'south': sw.lng(),
      'west': sw.lat() }
    };

    ApiUtil.fetchBenches(bounds);
  }.bind(this));

  this.map.addListener('click', function (e) {
    this.props.handleMapClick(e.latLng);
  }.bind(this));
},

_onChange: function () {
  var benches = BenchStore.all();

  benches.map(function (bench) {
    console.log("bench!");
    console.log(bench);
    pos = {lat: bench.lat, lng: bench.lon};
    var marker = new google.maps.Marker({
      position: pos,
      title: bench.description
    });

    marker.setMap(this.map);
    this.state.markers.push(marker);

    marker.addListener('mouseover', function () {
      marker.setAnimation(google.maps.Animation.BOUNCE);
      // marker.setAnimation(google.maps.Animation.DROP);
    });

    for (i=0; i < this.state.markers.length; i++) {
        var marker1 = this.state.markers[i];
      for (j=i+1; j < this.state.markers.length; j++) {
        var marker2 = this.state.markers[j];

        if (marker1.title === marker2.title) {
          marker2.setMap(null);
          this.state.markers.splice(j, 1);
        }
      }
    }
  }.bind(this));
},

  render: function () {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
});
