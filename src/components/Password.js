import React,{useState}from 'react'
import Axios  from 'axios';
import {useNavigate}from'react-router-dom';
function Password() {
const[UserName,setUserName]=useState('');
const[Password,setPassword]=useState('');
const navigate=useNavigate()
const Id=localStorage.getItem('userId')
const EditPassword=(e)=>{
    e.preventDefault()
    Axios.post('http://localhost:8000/api/Passwordupdate',
    {
        UserName:UserName,
        Password:Password,
        Id:Id
      }).then((res)=>{
      if(res.data.isSucess){
        alert('password changed successfully')
        navigate('/login')
        console.log({UserName,Password});

      }
      }).catch(e=>{
        console.log(e);
      })
        }
    return (
    <div className='content'>
      <form className='register' onSubmit={EditPassword}>
       <h3>Change password</h3> 
        <lable>Username</lable><br/>
        <input type='text' value={UserName} onChange={(e)=>setUserName(e.target.value)}/>
        <lable>Password</lable><br/>
        <input type='password' value={Password} onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button id='sucess' class="btn btn-success" >confirm</button>
      </form>
    </div>
  )
}

export default Password
