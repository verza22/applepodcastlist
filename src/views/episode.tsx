import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { GetPodcastInfo } from '../redux/actions/app';
import { RootState } from './../redux/stores/store'; 
import withRouterParams, { WithRouterProps } from './../components/paramRouteWrapper';

import Title from './../components/title';
import CardInfo from './../components/cardInfo';
import EpisodeInfo from '../components/episodeInfo';

interface EpisodeProps extends ConnectedProps<typeof connector>, WithRouterProps {}
interface EpisodeState {
  podcast: Podcast | null
  episode: Episode | null
}

class EpisodeComponent extends Component<EpisodeProps, EpisodeState> {

  constructor(props : EpisodeProps){
    super(props);

    this.state = {
      podcast: null,
      episode: null
    }
  }

  componentDidMount(): void {
    const podcastId : string = this.props.params.podcastId;
    const episodeId : string = this.props.params.episodeId;

    this.setInfo(podcastId, episodeId);
  }

  setInfo(podCastId: string, episodeId: string){
    const i:number = this.props.podcastList.findIndex((podcast: Podcast)=> podcast.id === podCastId);
    
    if(i>=0){
      let j: number = this.props.podcastList[i].episodes.findIndex(x=> x.id === episodeId);
      if(j>=0){
        this.setState({
          podcast: {...this.props.podcastList[i]},
          episode: {...this.props.podcastList[i].episodes[j]}
        });
      }
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
            {
              this.state.episode !== null &&
              <EpisodeInfo
                episode={this.state.episode}
              />
            }
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
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(withRouterParams(EpisodeComponent));