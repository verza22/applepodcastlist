import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { GetPodcastList } from '../redux/actions/app';
import { RootState } from './../redux/stores/store'; 
import moment from 'moment';

import Card from './../components/card';
import Filter from './../components/filter';
import Title from './../components/title';

interface MainProps extends ConnectedProps<typeof connector> {}

interface MainState {
  podcastFilterNumber: number
  podcastList: Podcast[]
}

class Main extends Component<MainProps, MainState> {

  constructor(props: MainProps){
    super(props);

    this.state = {
      podcastFilterNumber: 0,
      podcastList: []
    }
  }

  componentDidMount(): void {
    const date1 = moment(this.props.dateRequest);
    const date2 = moment();
    
    const dateDiff = date2.diff(date1, 'seconds');
    //86,400s === 1 day
    if(this.props.podcadList.length === 0 || dateDiff > 86400){
      this.props.GetPodcastList(()=>{
        this.setPodcastList();
      });
    }else{
      this.setPodcastList();
    }
  }

  componentDidUpdate(prevProps: Readonly<MainProps>, prevState: Readonly<MainState>): void {
    if(prevProps.search !== this.props.search){
      this.setPodcastList();
    }
  }

  setPodcastList(){
    let data: Podcast[] = [];
    if(this.props.search === ""){
      data = this.props.podcadList;
    }else{
      const search: string = this.props.search.toLocaleLowerCase();
      data = this.props.podcadList.filter((x: Podcast)=> 
        x.title.toLocaleLowerCase().includes(search) || 
        x.description.toLocaleLowerCase().includes(search) || 
        x.author.toLocaleLowerCase().includes(search));
    }
    this.setState({
      podcastFilterNumber: data.length,
      podcastList: data
    });
  }

  render() {
    return (<div>
      <Title title="Podcaster" />
      <Filter podcastFilterNumber={this.state.podcastFilterNumber} />
      <div className="text-center mt-8">
        {
          this.state.podcastList.map((podcast: Podcast) => {
            return <Card key={podcast.id} podcast={podcast}/>
          })
        }
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  podcadList: state.podcastList,
  dateRequest: state.dateRequest,
  search: state.search
});

const mapDispatchToProps = {
  GetPodcastList
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Main);