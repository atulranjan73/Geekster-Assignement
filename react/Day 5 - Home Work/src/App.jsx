import React, { useState } from 'react'
import { dataArray } from './data';
import './App.css'

function App() {

const [para , setpara ] =  useState();
const [ans , setans] = useState([]);


const handlepara = () =>{
if(para>=dataArray.length ){
  alert("❤️")
}
else{
  setans(dataArray.slice(0 , para))
  console.log(ans);
}
}

  return (
    <div className='container'>
      <div className='form'>
        <input onChange={(e)=>{setpara(e.target.value)}} type="number"  placeholder='Number'/>
        <button onClick={handlepara}>Generate</button>
      </div>






      <div className='ans'>
    
      {/* {
        ans.map((item ,i) =>{
          return  <p key={i}> {item}</p>
        })
      } */}

      {
        ans.map((item ,index )=>(
          <p key={index}>{index+1}{item}</p>
        ))
      }
       
      </div>
    </div>
  )
}

export default App
