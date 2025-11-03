
import { useState ,useEffect} from 'react'
import './App.css'

function App() {
let[username,setUsername]=useState("");
let[password,setPassword]=useState("");


  function signup(){
     fetch("http://localhost:8080/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username,password})
     })
     .then((res)=>res.json())
     .then((data)=>console.log(data));
      
  }


 
  function login(){
   fetch("http://localhost:8080/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({username,password})
     })
     .then((res)=>res.json())
     .then((data)=>console.log(data));
    
  }





  return (
    <>
  <input type="text"
  placeholder='username'
  value={username}
  onChange={(el)=>setUsername(el.target.value)}
  />
  <br></br>
  <br></br>

   <input type="text"
  placeholder='password'
  value={password}
  onChange={(el)=>setPassword(el.target.value)}
  
  />
  <br></br>
  <br></br>
   <button onClick={login}>login</button>
   &nbsp; &nbsp;
   <button onClick={signup}>signup</button>
    </>
  )
}

export default App
