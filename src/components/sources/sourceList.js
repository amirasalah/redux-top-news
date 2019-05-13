import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";
export class SourceList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { loading, availableSources } = this.props.newsSources;
    let availableNewsSources;
    if (loading === false) {
      availableNewsSources = availableSources.sources.map(el => {
        return (
          <div key={el.id}>
            <p>
              <small>{el.category}</small>
            </p>
            <strong>Get all Latest New from: {el.name}</strong>
            <a href={el.url}>Visit website: <small>{el.name}</small></a>
          </div>
        );
      });
    }

    return (
      // <div></div>
      <React.Fragment>
        {loading ? <p>Loading...</p> : <div>{availableNewsSources}</div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsSources: state.sourcesData
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(SourceList);
