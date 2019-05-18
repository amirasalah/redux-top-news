import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/sourcesActions";
import { withRouter } from 'react-router-dom';


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
          <div key={el.id}>
            <p>
              <small>{el.category}</small>
            </p>
            <strong onClick={() => this.openHeadlines(el.id)}>Get all Latest New from: {el.name}</strong>
            <a href={el.url}>Visit website: <small>{el.name}</small></a>
          </div>
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
