var FilterParams = React.createClass({




  render: function () {
    return (
      <form className="seating-form" onBlur={this.props.handleSeating}>
        <label>Min # <strong>⑁</strong>
          <input id="min-chairs" type="text"/>
        </label>

        <label>Max # <strong>⑁</strong>
          <input id="max-chairs" type="text"/>
        </label>
      </form>
    );
  }
});
