import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import Header from './Header'

function MainContainer() {
  const movies = useSelector(store => store.movies?.nowPlayingMovie)

  if (!movies) return
  const ind = Math.floor(Math.random() * 20)
  console.log(ind)
  const mainMovie = movies[ind];
  // console.log(mainMovie)
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer