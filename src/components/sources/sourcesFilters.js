import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/sourcesActions";
import { FiltersWrapper , SingleFilter } from "./sources.styles";


export class SourcesFilters extends Component {
  changeCategory = (e) => {
    this.props.changeCategory(e.target.value , this.props.language)
  }
  changeLanguage = (e) => {
    this.props.changeLanguage(this.props.category , e.target.value)
  }
  render() {
    return (
      <FiltersWrapper>
        <SingleFilter>
          <label><strong>Category:</strong>&nbsp;</label>
          <select defaultValue='business' onChange={(e) => this.changeCategory(e)}>
            <option value="">All</option>
            <option value="business">business</option>
            <option value="entertainment">entertainment</option>
            <option value="general">general</option>
            <option value="health">health</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="technology">technology</option>
          </select>
        </SingleFilter>
        <SingleFilter>
          <label><strong>Language:</strong>&nbsp;</label>
          <select defaultValue='en' onChange={(e) => this.changeLanguage(e)}>
            <option value="">All</option>
            <option value="ar">Arabic</option>
            <option value="de">German</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="he">Hebrew</option>
            <option value="it">Italian</option>
            <option value="nl">dutch</option>
            <option value="no">Norwegian</option>
            <option value="pt">Portuguese</option>
            <option value="ru">Russian</option>
            <option value="se">Swedish</option>
            <option value="ud">Urdu</option>
            <option value="zh">chinese</option>
          </select>
        </SingleFilter>
      </FiltersWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.sourcesData.sourcesLanguage,
    category: state.sourcesData.sourcesCategory
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeCategory: (category , language) => dispatch(fetchPosts(category, language)),
    changeLanguage: (category , language) => dispatch(fetchPosts(category, language))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SourcesFilters);
