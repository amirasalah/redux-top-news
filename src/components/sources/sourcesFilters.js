import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";


export class SourcesFilters extends Component {
  changeCategory = (e) => {
    this.props.changeCategory(e.target.value)
  }
  render() {
    return (
      <div>
        <div>
          <label>Category:</label>
          <select onChange={(e) => this.changeCategory(e)}>
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="general">general</option>
            <option value="health">health</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category) => dispatch(fetchPosts(category))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesFilters);
