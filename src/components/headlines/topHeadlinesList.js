import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHeadlines } from '../../actions/headlinesActions';

export class TopHeadlinesList extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div></div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

export default connect(
    mapStateToProps,
    { fetchHeadlines }
)(TopHeadlinesList);
