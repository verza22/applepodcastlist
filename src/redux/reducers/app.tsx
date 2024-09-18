import { GET_PODCAST_LIST, ADD_EPISODES, SEARCH, SET_LOADING } from '../actions/app';

export interface AppState {
  podcastList: Podcast[]
  dateRequest: Date
  search: string
  loading: boolean
}

const initialState: AppState = {
  podcastList: [],
  dateRequest: new Date(),
  search: "",
  loading: false
};

const reducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case GET_PODCAST_LIST:
      return {
        ...state,
        podcastList: action.payload,
        dateRequest: new Date()
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
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default reducer;