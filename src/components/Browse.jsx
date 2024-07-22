import Header from './Header'
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


function Browse() {

  // fetch data from TMDB API and update store
  useNowPlayingMovie()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/* 


      MainContainer 
       - videoBack
       -vidooTitle
       -SecondaryContainer
       -movies *n
        -carts*n
      
      */}

    </div>
  )
}

export default Browse