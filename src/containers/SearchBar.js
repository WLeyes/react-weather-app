import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={ search: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    return(
      <form className="input-group">
        <input
        placeholder="Retrieve a 5 day forecast in your favourite cities."
        className="form-control"
        value={ this.state.search }
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}