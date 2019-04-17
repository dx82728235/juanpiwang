import React, { Component } from 'react'
import {mapStateToProps,mapDispatchToProps} from "@mapprops/mine";
import {connect} from 'react-redux';

class Mine extends Component {
  render() {
    return (
      <div>
        mine
      </div>
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Mine);