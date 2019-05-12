import React from 'react';
import { SourcesList } from '../containers/sources/sourcesList';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions';

export class App extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render() {
    return (
      <React.Fragment>
        <SourcesList></SourcesList>
      </React.Fragment>
      // <SourcesList />
    );
  }

}
const mapStateToProps = (state) => {
  // console.log(state);
  return {

  }
}
export default connect(mapStateToProps , {fetchPosts})(App);

