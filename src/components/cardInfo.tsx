import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface CardInfoProps {
    podcast: Podcast;
}

const CardInfo: React.FC<CardInfoProps> = ({ podcast }) => {
    return <Link to={"/podcast/"+podcast.id}>
      <div className="h-max w-60 px-2 py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="flex justify-center mb-4">
        <img className="rounded-lg" src={podcast.image}/>
      </div>
      <hr className="border-gray-200 border-t-2 mt-1 w-full"/>
      <div className="px-2 py-4">
        <div className="font-bold">{podcast.title}</div>
        <div className="text-sm">by: {podcast.author}</div>
      </div>
      <hr className="border-gray-200 border-t-2 mt-1 w-full"/>
      <div>
        <div className="font-bold">Description: </div>
        <div className="text-sm italic">
          {podcast.description}
        </div>
      </div>
    </div>
    </Link>
}

export default CardInfo;