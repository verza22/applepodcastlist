import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from '../actions/counter';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const reducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

export default reducer;