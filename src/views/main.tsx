import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/actions/counter';
import { RootState } from './../redux/stores/store'; 


interface MainProps extends ConnectedProps<typeof connector> {}

class Main extends Component<MainProps> {
  render() {
    const { count, increment, decrement, incrementByAmount } = this.props;

    return (
      <div className="App">
        <h1>Counter: {count}</h1>
        <br/>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>
        <br/>
        <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  count: state.value,
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Main);