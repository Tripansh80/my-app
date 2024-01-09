import React from 'react'
import { useState,useEffect } from 'react'
const File = () => {

const [movie, setmovie] = useState([])
useEffect(() => {
 
const fetchapi=async()=>{


    try {
        
        const url='https://api.themoviedb.org/3/discover/movie?api_key=2130cbe1a5a74e0778f99603dc794b5d'
        const data=await fetch(url);
        const res=await data.json();

        setmovie(res.results);
        console.log(res.results);
    } catch (error) {
        console.error("Your data is not visible");
    }


}

fetchapi();

}, [])


  return (
    <>
 {movie.map((movies)=>(
<> 
<div key={movies.id} style={{display: 'inline-block'}}>

<img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} style={{ borderRadius:'8px', marginTop: '10px', marginLeft: '10px',height: '250px',width: '250px'}} alt={movies.title}/>
<h4 style={{textAlign: 'center',textDecoration: 'blue'}}>{movies.title}</h4>


</div>



</>
    
    ))}
    </>

  )
}

export default File