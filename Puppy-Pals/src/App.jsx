import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  <div>
    <h2>Puppy Pals</h2>
  </div>
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    return (
      <button onClick={() => { console.log("puppy id: ", puppy.id) }}></button>
    )
  };
  <button onClick={() => { setFeatPupId(puppy.id) }}></button>;
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name} {puppy.isCute} {puppy.img}
            <img 
            className="Puppy"
            src="puppy.jpeg" width="150" height="200"></img>
            <button>Click Me</button>
            </p>
        );
      })}
      <p>{ featPupId && <p>{ featPupId }</p> } </p>
    </div>
  );
    };


export default App

  