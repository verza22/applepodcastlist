export const GET_PODCAST_LIST = 'GET_PODCAST_LIST';
export const ADD_EPISODES = 'ADD_EPISODES';
export const SEARCH = 'SEARCH';

import { API_URL, API_CORS } from '../../config';

import axios from 'axios';
import moment from 'moment';
var convert = require('xml-js');

import { Dispatch } from 'redux';
import { RootState } from './../stores/store';

export function GetPodcastList(callback : Function) {
    return (dispatch: Dispatch, getState: () => RootState) => {
        axios({
            method: 'GET',
            url: API_URL+"us/rss/toppodcasts/limit=100/genre=1310/json",
        })
        .then(res => {
            const podcastList: Podcast[] = res.data.feed.entry.map((x: any)=> {
                let imgLength : number = x['im:image'].length;
                return {
                    id: x.id.attributes['im:id'],
                    title: x['im:name'].label,
                    description: x.summary.label,
                    image: x['im:image'][imgLength-1].label,
                    author: x['im:artist'].label,
                    episodesNumber: 0,
                    episodes: []
                }
            });
            dispatch({
                type: GET_PODCAST_LIST,
                payload: podcastList
            });
            setTimeout(()=>{
                callback();
            })
        })
        .catch(error => {
            debugger;
        });
    }
  }

  
export function GetPodcastInfo(podcastID : string, callback : Function) {
    return (dispatch: Dispatch, getState: () => RootState) => {
        axios({
            method: 'GET',
            url: API_CORS+API_URL+"lookup?id="+podcastID,
        })
        .then(res => {
            let data = JSON.parse(res.data.contents);
            if(data.results.length>0){
                data.results[0].feedUrl;
                axios({
                    method: 'GET',
                    url: data.results[0].feedUrl
                })
                .then(res2 => {
                    let data = JSON.parse(convert.xml2json(res2.data, {compact: true, spaces: 4}))
                    let episodes : Episode[] = data.rss.channel.item.map((x:any)=>{
                        return {
                            id: typeof x.guid._cdata === "undefined" ? x.guid?._text : x.guid._cdata,
                            title: typeof x.title._cdata === "undefined" ? x.title?._text : x.title._cdata,
                            description: typeof x.description._cdata === "undefined" ? x.description?._text : x.description._cdata,
                            releaseDate: moment(x.pubDate?._text).format("DD/MM/yyyy"),
                            trackTimeMillis: x['itunes:duration']?._text,
                            urlPodcast: x?.enclosure?._attributes?.url
                        }
                    });
                    dispatch({
                        type: ADD_EPISODES,
                        payload: {
                            episodes,
                            podcastID
                        }
                    });
                    setTimeout(()=>{
                        callback();
                    })
                });
            }
        })
        .catch(error => {
            debugger;
        });
    }
  }


  export function Search(search: string) {
    return (dispatch: Dispatch, getState: () => RootState) => {
        dispatch({
            type: SEARCH,
            payload: search
        });
    }
  }