import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopHeadlinesLits from './topHeadlinesLits';

class TopHeadlinesContainer extends Component {

    render() {
        return (
            <div><TopHeadlinesLits></TopHeadlinesLits></div>)
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeadlinesContainer)
