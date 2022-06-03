import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"

function App() {
  const[users,setUsers]=useState([])
  const getUsers=async()=>{
    const resposne=await axios.get("http://localhost:4000/users",{headers:{
      "Content-Type": "application/json",
    }})
    console.log(resposne,"vamsii")
    if(resposne.status===200){
      console.log(resposne.data,"vamsi")
      setUsers(resposne.data.users)
    }
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (<center>
    {users.length===0&&<h1>Loading....</h1>}
    {users.length>0&&users.map((user)=><h1 key={user.id}>{user.name}</h1>)}
  </center>
   
  );
}

export default App;
