import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;
    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
