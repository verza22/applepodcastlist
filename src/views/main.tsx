import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { GetPodcastList } from '../redux/actions/app';
import { RootState } from './../redux/stores/store'; 


import Card from './../components/card';
import Filter from './../components/filter';
import Title from './../components/title';

interface MainProps extends ConnectedProps<typeof connector> {}

class Main extends Component<MainProps> {

  componentDidMount(): void {
    this.props.GetPodcastList();
  }

  render() {
    return (<div>
      <Title title="Podcaster" />
      <Filter search="" />
      <div className="text-center mt-8">
        {
          this.props.podcadList.map((podcast: Podcast) => {
            return <Card key={podcast.id} podcast={podcast}/>
          })
        }
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  podcadList: state.podcastList
});

const mapDispatchToProps = {
  GetPodcastList
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Main);