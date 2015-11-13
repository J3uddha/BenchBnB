var Index = React.createClass({
  getInitialState: function () {
    return ({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {
    return (
      <div>
      </div>);
  }
});
