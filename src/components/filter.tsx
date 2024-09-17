import React, { Component } from 'react';

interface FilterProps {
    search: string;
}

const Filter: React.FC<FilterProps> = ({ search }) => {
    return <div className="flex justify-end mx-2">
    <div className="flex bg-blue-500 text-white rounded-lg px-3 font-bold items-center mr-2">
      <p>100</p>
      </div>
    <div>
      <input 
        className="px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Filter podcasts..."
      />
    </div>
  </div>
}

export default Filter;