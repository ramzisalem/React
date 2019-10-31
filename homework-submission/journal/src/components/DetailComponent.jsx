import React from 'react';
import { useParams } from 'react-router';
import ListComponent from './ListComponent';
import postTitle from './ListComponent';
import postContent from './ListComponent';

const DetailComponent = () => {
  const { id } = useParams();
  console.log(postTitle);
  return (
    <div>
      <span> ID: {id}</span>
      Title: {postTitle}
      Content: {postContent}
    </div>
  );
};
export default DetailComponent;
