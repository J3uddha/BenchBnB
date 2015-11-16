var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  blankAttrs: {
    lat: '',
    lon: '',
    seating: '',
    description: ''
  },

  getInitialState: function () {
    if (this.props.location.query.lat !== undefined) {
      this.blankAttrs.lat = this.props.location.query.lat;
      this.blankAttrs.lon = this.props.location.query.lng;
    }
    return this.blankAttrs;
  },

  createBench: function (e) {
    e.preventDefault();
    var newBench = {};
    Object.keys(this.state).forEach(function (key) {
      newBench[key] = this.state[key];
    }.bind(this));

    ApiUtil.createBench(newBench);
    this.setState(this.blankAttrs);
  },

  render: function () {
    return (
      <form className="new-bench" onSubmit={this.createBench} >

        <label>Lat:
          <input
            type="text"
            id="lat"
            valueLink={this.linkState("lat")}
            />
        </label>

        <label>Lng:
          <input
            type="text"
            id="lon"
            valueLink={this.linkState("lon")}
            />
        </label>

        <label># of Seats:
          <input
            type="text"
            id="seating"
            valueLink={this.linkState("seating")}
            />
        </label>

        <label>Description:
          <input
            type="text"
            id="description"
            valueLink={this.linkState("description")}
            />
        </label>

          <button>Add Bench</button>
      </form>
    );
  }
});
