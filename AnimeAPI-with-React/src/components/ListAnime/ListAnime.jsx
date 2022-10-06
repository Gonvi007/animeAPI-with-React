import axios from 'axios';
import { useEffect, useState } from 'react'
import { Anime } from '../Anime/Anime';
import '../../index.scss';

const ListAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [resultados, setResultados] = useState([]);

  const buscar = (event) => {
    let busqueda = event.currentTarget.value;

    let resultado = animes.filter((anime) =>{
      return anime.title.toLowerCase().includes(busqueda.toLowerCase());
    });
    setResultados(resultado);
  }

  useEffect(()=> {
    axios.get(`https://ghibliapi.herokuapp.com/films`)
      .then(response => {
        const animeData = response.data;
        setAnimes(animeData);
        setResultados(animeData);
      })
      .catch(error => {
        console.log(error);
      })
  },[]);


  return (
    <div className="ListAnime container">
            <input type="text" id="valor" placeholder="Buscar..." onChange={buscar}/>
      {
        resultados.map(anime => {
          return <Anime key={anime.id} id={anime.id} src={anime.image} name={anime.title} nameOriginal={anime.original_title} director={anime.director} anio={anime.release_date} description={anime.description}></Anime>
        })
      }
    </div>
  )
}

export { ListAnime };


