import React, { Component } from 'react'
import {mapStateToProps,mapDispatchToProps} from "@mapprops/classify";
import {connect} from 'react-redux';

class Classify extends Component {
  render() {
    return (
      <div>
        classify
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Classify);