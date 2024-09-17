import { GET_PODCAST_LIST } from '../actions/app';

export interface AppState {
    podcastList: Podcast[];
}

const initialState: AppState = {
    podcastList: [],
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case GET_PODCAST_LIST:
      return {
        ...state,
        podcastList: action.payload
      };
    default:
      return state;
  }
};

export default reducer;