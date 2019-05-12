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
            <strong>{el.name}</strong>
            <small>Go to:
              <a href={el.url}> {el.url}</a>
            </small>
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
