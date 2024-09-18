import { GET_PODCAST_LIST, ADD_EPISODES, SEARCH } from '../actions/app';

export interface AppState {
  podcastList: Podcast[]
  search: string
}

const initialState: AppState = {
  podcastList: [],
  search: ""
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case GET_PODCAST_LIST:
      return {
        ...state,
        podcastList: action.payload
      };
    case ADD_EPISODES:
      const i:number = state.podcastList.findIndex((podcast: Podcast)=> podcast.id === action.payload.podcastID);
      let data : Podcast[] = state.podcastList.map((podcast: Podcast) => ({ ...podcast }));;

      if(i>=0){
        data[i].episodesNumber = action.payload.episodes.length;
        data[i].episodes = action.payload.episodes;
      }

      return {
        ...state,
        podcastList: data
      };
    case SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default reducer;