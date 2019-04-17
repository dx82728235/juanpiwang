import React, { Component } from 'react'
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from "@mapprops/home"

class Home extends Component {
  render() {
    return (
      <div>
        home
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
