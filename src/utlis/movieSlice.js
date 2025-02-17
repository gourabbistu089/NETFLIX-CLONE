import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovie:null,
        trailerMovie:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie=action.payload
        },
        addTrailerVideo :(state,action)=>{
            state.trailerMovie=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer