import React from 'react';
import { connect } from 'dva';

class Counter extends React.Component {
  addNum = () => {
    const { dispatch, counter } = this.props;
    const { count } = counter;
    dispatch({
      type: 'counter/save',
      payload: {count: count + 1}
    })
  };

  reduceNum = () => {
    const { dispatch, counter } = this.props;
    const { count } = counter;
    dispatch({
      type: 'counter/save',
      payload: {count: count - 1}
    })
  };

  reset = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'counter/reset'
    })
  };

  render() {
    const { count } = this.props.counter;
    return (
      <div>
        {count}
        <button onClick={this.addNum}>增加</button>
        <button onClick={this.reduceNum}>减少</button>
        <button onClick={this.reset}>重置</button>
      </div>
    )
  }
}

export default connect(({counter}) => ({counter}))(Counter);
