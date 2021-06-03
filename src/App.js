import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get("https://sumanjay.vercel.app/udemy").then((response) => {
      console.log(response.data);
      setState(response.data);
    });
  }, []);
  const [state, setState] = useState([]);
  return (
    <div className="container center bg-red-200 m-auto justify-items-center">
      <h4 className="text-xl p-5">udeamy Free Courses</h4>

      {/*
       <button onClick={()=>{
       axios.get('https://sumanjay.vercel.app/udemy').then((response)=>{
         console.log(response.data)
         setstate(response.data)
       })
      }}>Click Me To Fetch Data</button> 
      */}

      {state.map((obj) => {
        return (
          <div className="container p-5 justify-items-center center m-auto">
            <h1 className="">{ obj.title}</h1>
            <img src={obj.image} alt={obj.title} height={500} width={500} />
            <p>{obj.description}</p>
            <a href={obj.link}>
              <button className=""> Click To Enroll</button>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default App;
