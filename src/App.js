import axios from "axios";
import {useState} from 'react';
import "./App.css";


function App() {
  const [state, setstate] = useState([])
  return(
    <div>
      
      <h4>udeamy Free Courses</h4>

      <button onClick={()=>{
       axios.get('https://sumanjay.vercel.app/udemy').then((response)=>{
         console.log(response.data)
         setstate(response.data)
       })
      }}>Click Me To Fetch Data</button>
      {state.map((obj)=>{
        return(
          <div>
            <h1>{obj.title}</h1>

           <img src={obj.image} alt={obj.title} height={500} width={500}  />
           <p>{obj.description}</p>
           <a href={obj.link}><button> Click To Enroll</button></a>
          </div>
        )
      })}
    </div>
  );
}

export default App;
