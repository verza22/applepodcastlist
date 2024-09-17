export const GET_PODCAST_LIST = 'GET_PODCAST_LIST';
import axios from 'axios';

import { Dispatch } from 'redux';
import { RootState } from './../stores/store';

export function GetPodcastList() {
    return (dispatch: Dispatch, getState: () => RootState) => {
        axios({
            method: 'GET',
            url: "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
            //data: params
        })
        .then(res => {
            const podcastList: Podcast[] = res.data.feed.entry.map((x: any)=> {
                let imgLength : number = x['im:image'].length;
                return {
                    id: x.id.attributes['im:id'],
                    title: x.title.label,
                    description: x.summary.label,
                    image: x['im:image'][imgLength-1].label,
                    author: x['im:artist'].label
                }
            });
            dispatch({
                type: GET_PODCAST_LIST,
                payload: podcastList
            });
        })
        .catch(error => {
            debugger;
        });
    }
  }