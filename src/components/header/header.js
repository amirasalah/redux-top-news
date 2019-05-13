import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Header extends Component {
  render() {
    return (
        <header>
            <nav>
                <ul>
                </ul>
            </nav>
        </header>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
