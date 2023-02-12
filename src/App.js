import logo from './logo.svg';
import React from 'react';

function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div className="wrapper">
            <div className="selectOption">
              <h2>Character No. {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
        </div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

export default App;
