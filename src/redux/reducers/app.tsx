import { GET_PODCAST_LIST, ADD_EPISODES } from '../actions/app';

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
    default:
      return state;
  }
};

export default reducer;