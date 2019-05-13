import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink , Route } from 'react-router-dom';
import sourcesContainer from '../sources/sourcesContainer';

export class Header extends Component {
  render() {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/sources">All sources</NavLink>
                </ul>
            </nav>
            <Route path="/sources" Component={sourcesContainer}></Route>
        </header>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
