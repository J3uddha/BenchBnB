var Index = React.createClass({
  getInitialState: function () {
    return ({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({benches: BenchStore.all()});
  },

  render: function () {
    return (
      <div>
        <h1>Index:</h1>
      <ul>
        {this.state.benches.map(function (b) {
          return (<li>{b.description}</li>);
        })}
      </ul>
    </div>);
  }
});
