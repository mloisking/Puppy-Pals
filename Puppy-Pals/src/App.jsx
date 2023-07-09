import { puppyList } from './data.js'
import { useState } from 'react'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  <button onClick={()=>{ setFeatPupId(puppy.id)}}></button>

  function handleClick() {
 return(
 <button onClick={()=>{console.log("puppy id: ", puppy.id)}}></button>
 )};
 
 return (
  <div className="App">
    {puppies.map((puppy) => {
      return (
        <p onClick={handleClick} key={puppy.id}>
          {puppy.name}
        </p>
      );
    })}
    <p>{featPupId}</p>
  </div>
);
}       
           
      
 

export default App