import React,{useState} from 'react'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom';
import './Data.css'

function Register() {
    const[dataUsername,setDataUsername]=useState('');
    const[dataEmail,setEmail]=useState('');
    const[dataPassword,setPassword]=useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
   const navigate=useNavigate()
    
const SubmitHandle=(e)=>{
  e.preventDefault()
  console.log(dataUsername,dataPassword,dataEmail,phoneNumber);
Axios.post('http://localhost:8000/api/postdata',{
  UserName:dataUsername,
  Password:dataPassword,
  Email:dataEmail,
  PhoneNumber:phoneNumber
}).then((res)=>{
if(res.data.isSucess){
  navigate('/login')
alert('registretion sucessfully')
}
}).catch(e=>{
  console.log(e);
})
    }
  return (
    <div className='content'>
      <form  className='register' onSubmit={SubmitHandle}>
        <h1>Registration</h1>
        <lable>Username</lable><br/>
        <input type='text' value={dataUsername} onChange={(e)=>setDataUsername(e.target.value)}/>
        <lable>Email</lable><br/>
        <input type='email' value={dataEmail} onChange={(e)=>setEmail(e.target.value)}/>
        <lable>Password</lable><br/>
        <input type='password' value={dataPassword} onChange={(e)=>setPassword(e.target.value)}/>
        <lable>phoneNumber</lable><br/>
        <input type='text' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        <button type='Submit' id='sucess'  class="btn btn-success mt-4">Submit</button>
      </form>
    </div>
  )
}

export default Register
