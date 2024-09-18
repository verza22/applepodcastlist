import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './../redux/stores/store'; 
import { Search } from '../redux/actions/app';

interface FilterProps extends ConnectedProps<typeof connector> {
  podcastFilterNumber: number
}

class Filter extends Component<FilterProps> {

  constructor(props: FilterProps){
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    this.props.Search(e.target.value);
  }

  render(){
    return <div className="flex justify-end mx-2">
      <div className="flex bg-blue-500 text-white rounded-lg px-3 font-bold items-center mr-2">
        <p>{this.props.podcastFilterNumber}</p>
        </div>
      <div>
        <input 
          className="px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Filter podcasts..."
          value={this.props.search}
          onChange={(e) => this.handleSearch(e)}
        />
      </div>
    </div>
  }
}

const mapStateToProps = (state: RootState) => ({
  search: state.search
});

const mapDispatchToProps = {
  Search
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Filter);