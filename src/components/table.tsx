import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface TableProps {
    podcastId: string
    episodesNumber: number
    episodes: Episode[]
}

const Table: React.FC<TableProps> = ({ episodesNumber, episodes, podcastId }) => {
    return <div className="flex-1 ml-16">
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-bold mb-4">Episodes: {episodesNumber}</div>
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left" style={{ width: '60%' }}>Title</th>
          <th className="px-4 py-2 text-left" style={{ width: '25%' }}>Date</th>
          <th className="px-4 py-2 text-left" style={{ width: '15%' }}>Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map((episode : Episode, index : number) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="px-4 py-2 text-blue-500 hover:underline cursor-pointer"><Link to={"/podcast/"+podcastId+"/episode/"+episode.id}>{episode.title}</Link></td>
            <td className="px-4 py-2">{episode.releaseDate}</td>
            <td className="px-4 py-2">{episode.trackTimeMillis}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
}

export default Table;