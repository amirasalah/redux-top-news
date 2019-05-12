import React, { Component } from "react";
import { connect } from "react-redux";
import SourceList from "./sourceList";
import SourcesFilters from "./sourcesFilters";

export class SourcesContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <SourcesFilters />
        <SourceList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesContainer);
