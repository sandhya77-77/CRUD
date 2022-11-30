import React,{useState} from 'react'
import { useNavigate,NavLink} from 'react-router-dom'
import axios from 'axios'
import './Data.css'

function Login() {
  const navigate=useNavigate()
    const[dataUsername,setDataUsername]=useState('')
    const[dataPassword,setPassword]=useState('')
    const SubmitHadler=(e)=>{
      e.preventDefault();
      console.log(dataUsername,dataPassword);
axios.post('http://localhost:8000/api/login',{UserName:dataUsername,Password:dataPassword}).then((res)=>{
if(res.data.isSucess){
  localStorage.setItem("data",JSON.stringify(res.data.logindata))
console.log(res.data.logindata);
alert("Sucess")
navigate('/showdata')
}
else{
  alert("Invalied crediantials")
}
})
    }
  return (
    <div className='log'>
      <form className='register' onSubmit={SubmitHadler}> 
      <h1>Login</h1>
        <lable>Username</lable>
        <input type="text" value={dataUsername} onChange={(e)=>setDataUsername(e.target.value)}/><br/>
        <lable>Password</lable>
        <input type="password" value={dataPassword} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button type='Submit'  class="btn btn-success mt-4">submit</button>
      </form>
    </div>
  )
}

export default Login
