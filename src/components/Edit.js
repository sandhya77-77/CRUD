import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';
function Edit() {
    const[username,setUsername]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const[phonenumber,setPhonenumber]=useState();
    const navigate=useNavigate()
    const Id=localStorage.getItem('userId')
    useEffect(()=>{
        console.log((Number.parseInt(Id)));
        Axios.post('http://localhost:8000/api/userbyid', {
            Id : Id
        }).then((res) => {
        console.log(res.data);
        if(res.data.isSucess){
        res.data.userdata.forEach((e) => {
            console.log(e.id);
                setUsername(e.username)
                setPassword(e.password)
                setEmail(e.email)
                setPhonenumber(e.phonenumber)
               
            })
        }        
        })
    },[Id])
    const SubmitHandle=(e)=>{
        e.preventDefault()
        Axios.post('http://localhost:8000/api/update',
        {
            UserName:username,
            Password:password,
            Email:email,
            PhoneNumber:phonenumber,
            Id:Id
          }).then((res)=>{
          if(res.data.isSucess){
            navigate('/showdata')
          alert('Update sucessfully')
          }
          }).catch(e=>{
            console.log(e);
          })

    }
    const Cancle=(e)=>{
        e.preventDefault()
        navigate('/showdata') 
    }
  return (
    <div className='content'>
         <form onSubmit={SubmitHandle}className='register'>
          <center> <h1>Edit</h1></center> 
         <lable>UserName</lable>
        <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/><br/>
        <lable>Password</lable>
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
        <lable> Email</lable>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <lable>PhoneNumber</lable>
        <input type='text' value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/><br/>
        <button type='Submit' id='sucess'  className="btn btn-success mt-3">Update</button><button id='cancel' onClick={Cancle} className="btn btn-danger mt-3 mx-5">Cancle</button>
        </form>
    </div>
  )
    }

export default Edit
