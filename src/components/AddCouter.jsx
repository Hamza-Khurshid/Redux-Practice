import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addCounterAction } from '../redux/action/MyCounterAction';

class AddCounter extends Component {

    onClickH = () => {
        this.props.addCounterAction();
    }

  render() {
    return (
      <div>
        <button onClick={this.onClickH}>+</button>
        
      </div>
    )
  }
}

export default connect(addCounterAction, null)(AddCounter);