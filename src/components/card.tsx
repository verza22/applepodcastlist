import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    podcast: Podcast;
}

const Card: React.FC<CardProps> = ({ podcast }) => {
    return <Link to={"/podcast/"+podcast.id}>
    <div className="my-10 mx-2 inline-block w-60 px-8 py-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="divPodcastImg">
        <img className="podcastImg rounded-full" src={podcast.image}/>
      </div>
      <div className="text-nowrap overflow-hidden text-center" title={podcast.title}>{podcast.title}</div>
      <div className="text-nowrap overflow-hidden text-center text-gray-400 text-xs" title={"Author: "+podcast.author}>Author: {podcast.author}</div>
    </div>
    </Link>
}

export default Card;