import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utlis/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utlis/movieSlice'

function useNowPlayingMovie() {

    const dispatch = useDispatch()
    const getNowPlayingMovie = async () =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1',
       API_OPTIONS
     );
     const json =  await data.json()
     console.log(json)
     dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(() => {
     getNowPlayingMovie();
    }, [])
    
 
//   return ()
}
export default useNowPlayingMovie