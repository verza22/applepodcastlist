import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface TitleProps {
    title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
    return <div className="p-2">
    <h1 className="text-blue-500 text-2xl font-bold"><Link to="/">{title}</Link></h1>
    <hr className="border-gray-200 border-t-2 mt-1 w-full"/>
  </div>
}

export default Title;