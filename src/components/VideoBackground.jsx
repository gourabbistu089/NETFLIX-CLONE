
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';
function VideoBackground({ movieId }) {

  // fetch trailer video and updating the store with trailer video 
  useMovieTrailer(movieId);
  const trailerVideo = useSelector(store => store.movies.trailerMovie);

  return (
    <div className=' overflow-hidden truncate' >
      <iframe
      className=' w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackground