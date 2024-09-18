import { Search, SEARCH } from '../redux/actions/app';

test('Search action returns correct action', () => {
  const text = 'Test search';
  const expectedAction = {
    type: SEARCH,
    payload: text
  };

  expect(Search(text)).toEqual(expectedAction);
});