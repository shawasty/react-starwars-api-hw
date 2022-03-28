
import { useEffect , useState } from 'react';
import './App.css';
import StarShipCard from './compnents/StarShipCard';
import { getAllStarships } from './services/sw-api'




function App(props) {

 const [starShips, setStarShips] = useState([]);

useEffect(()=>{
  getAllStarships().then(res =>
    {setStarShips(res)
    console.log(res)}
  ).catch(err => console.log(err))

},[])

  return (
    
    <div className="App">
      <div className='heading'>
      <h1>STAR WARS STARSHIPS</h1>
      </div>
    <div className='starships'>
    <StarShipCard starShips={starShips}/>
    </div>
    </div>
  );
}

export default App;
