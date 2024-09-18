import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { GetPodcastInfo } from '../redux/actions/app';
import { RootState } from './../redux/stores/store'; 
import withRouterParams, { WithRouterProps } from './../components/paramRouteWrapper';

import Title from './../components/title';
import CardInfo from './../components/cardInfo';
import Table from './../components/table';

interface PodcastProps extends ConnectedProps<typeof connector>, WithRouterProps {}
interface PodcastState {
  podcastID: string;
  podcast: Podcast | null
}

class PodcastComponent extends Component<PodcastProps, PodcastState> {

  constructor(props : PodcastProps){
    super(props);

    this.state = {
      podcastID: "",
      podcast: null
    }
  }

  componentDidMount(): void {
    const podcastID : string = this.props.params.podcastId;

    this.updatePodcastInfo(podcastID);
    setTimeout(()=>{
      if(this.state.podcast === null || this.state.podcast.episodes.length === 0){
        this.props.GetPodcastInfo(podcastID, ()=>{
          //update with the episode information
          this.updatePodcastInfo(podcastID);
        });
      }
    })
  }

  updatePodcastInfo(podCastID : string){
    const i:number = this.props.podcastList.findIndex((podcast: Podcast)=> podcast.id === podCastID);
      
    if(i>=0){
      this.setState({
        podcast: {...this.props.podcastList[i]}
      });
    }
  }

  render() {
    return (
      <div>
        <Title title="Podcaster" />
        {
          this.state.podcast !== null &&
          <div className="px-4 py-2 flex">
            <CardInfo
              podcast={this.state.podcast}
            />
            <Table
              episodesNumber={this.state.podcast.episodesNumber}
              episodes={this.state.podcast.episodes}
              podcastId={this.state.podcast.id}
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  podcastList: state.podcastList
});

const mapDispatchToProps = {
  GetPodcastInfo
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withRouterParams(PodcastComponent));