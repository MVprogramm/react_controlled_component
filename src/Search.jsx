import React from "react";

import "./search.scss";

class Search extends React.Component {
  state = {
    value: '',
  };

  
  search = (event) => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input 
          type="text" 
          className="search__input"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button className="search__button" type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
