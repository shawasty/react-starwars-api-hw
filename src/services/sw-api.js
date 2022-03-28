import axios from 'axios'
import { useEffect, useState } from 'react'


export async  function  getAllStarships() {
    // const [startShips, setStarShips] = useState([]);

    try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        const result = response.data.results;
        // console.log(result)
        return result
        // setStarShips(result)
        
    } catch (error) {
        console.log(error)
    }


}
getAllStarships()