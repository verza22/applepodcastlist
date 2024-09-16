export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';

export const increment = () => ({
  type: INCREMENT,
  payload: null
} as const);

export const decrement = () => ({
  type: DECREMENT,
  payload: null
} as const);

export const incrementByAmount = (amount: number) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount
} as const);