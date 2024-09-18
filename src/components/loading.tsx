import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from './../redux/stores/store';

interface LoadingProps extends ConnectedProps<typeof connector> {
}

class Loading extends Component<LoadingProps> {

  render(){
    return <React.Fragment>
        {
            this.props.loading &&
            <div className="flex items-center justify-center fixed top-1 right-4">
                <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
            </div>
        }
    </React.Fragment>
  }
}

const mapStateToProps = (state: RootState) => ({
    loading: state.loading
});

const mapDispatchToProps = {
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(Loading);