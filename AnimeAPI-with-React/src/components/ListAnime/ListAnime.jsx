import axios from 'axios';
import { useEffect, useState } from 'react'
import { Anime } from '../Anime/Anime';
import './ListAnime.scss';

const ListAnime = () => {
  // const [animes, setAnimes] = useEffect([]);
  const [animes, setAnimes] = useState([]);
  const [resultados, setResultados] = useState([]);


  useEffect(()=> {
    axios.get(`https://ghibliapi.herokuapp.com/films`)
      .then(response => {
        //La llamada es correcta
        const animeData = response.data;
        //pokemones = pokeData; ESTO ESTA MAL HECHO
        setAnimes(animeData);
        setResultados(animeData);
        //console.log(pokemones);
      })
      .catch(error => {
        //Hubo un errrrrror
        console.log(error);
      })
  },[]);


  return (
    <div className="ListAnime container">

      {
        resultados.map(anime => {
          return <Anime key={anime.id} id={anime.id} src={anime.image} name={anime.title} nameOriginal={anime.original_title} anio={anime.release_date}></Anime>
        })
      }
    </div>
  )
}

export { ListAnime };

