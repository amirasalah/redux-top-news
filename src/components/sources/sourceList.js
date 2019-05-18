import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/sourcesActions";
import { withRouter } from 'react-router-dom';
import { SourceItem } from "./sources.styles";


export class SourceList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  openHeadlines = id => {
    this.props.history.push(`/headlines/${id}`)
  }
  render() {
    const { sourcesLoading, availableSources } = this.props.newsSources;
    let availableNewsSources;
    if (sourcesLoading === false) {
      availableNewsSources = availableSources.sources.map(el => {
        return (
          <SourceItem key={el.id}>
              <strong onClick={() => this.openHeadlines(el.id)}>{el.name}</strong> / <small>{el.category}</small>
          </SourceItem>
        );
      });
    }

    return (
      <React.Fragment>
        {sourcesLoading ? <p>Loading...</p> : <div>{availableNewsSources}</div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsSources: state.sourcesData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
};
export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(SourceList));
