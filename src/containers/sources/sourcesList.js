import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions';

export class SourcesList extends React.Component {
    componentDidMount() {
        console.log(this.props)
        // dispatch(fetchPosts());
    }
    render() {
        return (
            <div>
                efww
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    // console.log(state);
    return {

    }
}
export default connect(mapStateToProps, { fetchPosts })(SourcesList);
