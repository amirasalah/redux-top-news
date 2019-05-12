import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

export class SourcesFilters extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <div>
          <label>Category:</label>
          <select onChange={() => this.props.dispatch(fetchPosts('business'))}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesFilters);
