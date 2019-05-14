import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHeadlines } from '../../actions/headlinesActions';

export class TopHeadlinesLits extends Component {
    componentDidMount() {
        this.props.fetchHeadlines()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, { fetchHeadlines })(TopHeadlinesLits)
