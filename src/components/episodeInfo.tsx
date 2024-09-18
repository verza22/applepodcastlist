import React, { Component } from 'react';

interface EpisodeInfoProps {
    episode: Episode
}

const EpisodeInfo: React.FC<EpisodeInfoProps> = ({ episode }) => {
    return <div className="ml-16 h-max flex-1 p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="font-bold text-lg mb-2">{episode.title}</div>
    <div className="text-sm italic" dangerouslySetInnerHTML={{ __html: episode.description }}></div>
    <hr className="border-gray-200 border-t-2 my-4 w-full"/>
    <div>
    <audio controls className="w-full">
      <source src={episode.urlPodcast} type="audio/mpeg" />
    </audio>
    </div>
  </div>
}

export default EpisodeInfo;