import React, { useEffect , useState} from 'react';
import './App.css';


import Navbar from './Components/Navbar';
import Character from './Components/Characters';
import Pagination from './Components/Pagination';
import Footer from './Components/Footer';


function App() {

  //ESTADOS

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});





  //API REST Consult
  
  const URL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {

    fetch(url)   // Esto va a retornar una promesa
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results)
      setInfo(data.info)} )
    .catch(error => console.log(error))


  }


  const onPrevius = () =>{
    fetchCharacters(info.prev)
  }

  const onNext = () =>{
    fetchCharacters(info.next)
  }

  useEffect( () => {
    fetchCharacters(URL)
    
  }, [])




  return (
    <div className='main-container'>
      <Navbar brand={"Rick and Morty App"}/>

      
      
      <div className='container mt-5 main-container'>

      <Pagination prev={info.prev} next={info.next} onPrevius={ onPrevius } onNext={ onNext }/>

        <Character characters={characters} />
        

      <Pagination prev={info.prev} next={info.next} onPrevius={ onPrevius } onNext={ onNext } />

      <Footer />

      </div>

      

    </div>
  );
}

export default App;
