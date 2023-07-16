import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(id) {
    setFeatPupId(id)
  };
 
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className="App">
        <div>
    <h2>Puppy Pals</h2>
  </div>
      {puppies.map((puppy) => {
        return (
          <div key={puppy.id}>
            {puppy.name} {puppy.isCute} 
            <img 
            className="Puppy"
            src={puppy.puppyimage} width="150" height="200"></img>
           <button onClick={() => { handleClick(puppy.id) }}>click me</button>;
            </div>
        );
      })}
      { featPupId && <p>{ featPupId }</p> }
    </div>
  );
    };


export default App
