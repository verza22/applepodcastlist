import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { GetPodcastList } from '../redux/actions/app';
import { RootState } from './../redux/stores/store'; 


interface MainProps extends ConnectedProps<typeof connector> {}

class Main extends Component<MainProps> {

  componentDidMount(): void {
    this.props.GetPodcastList();
  }

  render() {
    return (
      <div className="App">
        {
          this.props.podcadList.map((podcast: Podcast) => {
            return <div>
              <div>{podcast.title}</div>
            </div>
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  podcadList: state.podcastList,
});

const mapDispatchToProps = {
  GetPodcastList
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Main);