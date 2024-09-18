import React from 'react';
import { useParams, Params } from 'react-router-dom';


interface RouteParams extends Params {
  podcastId: string
  episodeId: string
}

export interface WithRouterProps {
  params: RouteParams;
}


const withRouterParams = <P extends WithRouterProps>(Component: React.ComponentType<P>) => {
  return (props: Omit<P, 'params'>) => {
    const params = useParams<RouteParams>();
    return <Component {...(props as P)} params={params} />;
  };
};

export default withRouterParams;
