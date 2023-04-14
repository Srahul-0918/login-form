import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register=(props)=>{
    let histroy=useNavigate();
    const [data,setData]=useState(
        {
            Firstname:"",
            Lastname:"",
            email:"",
            password:""
        }
        
    )
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]:e.target.value});
        // console.log(data)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            Firstname:data.Firstname,
            Lastname:data.Lastname,
            email:data.email,
            password:data.password
        }
        console.log(sendData);
        axios.post('http://localhost/Loginform/insert.php',sendData).then((result)=>{
            if(result.data.Status === 'invalid'){
            alert("invalid user");}
            else{
                histroy('/dashboard')
            }
            
        })
    }
    return (
        <div className='grey'>
            <form onSubmit={submitForm}>
          
            <div className='co12'>Register</div>
            <div className='row'>
                <div className='co6'>
                    First Name
                </div>
                <div className='co6'>
                    <input type="text" name="Firstname" class="grey1" onChange={ handleChange } value={data.Firstname}/>
                </div>
            </div>
            <div className='row'>
                <div className='co6'>
                    Last Name
                </div>
                <div className='co6'>
                    <input type="text" name="Lastname" class="grey1" onChange={handleChange} value={data.Lastname}/>
                </div>
            </div>
            <div className='row'>
                <div className='co6'>
                     E-mail
                </div>
                <div className='co6'>
                    <input type="email" name="email"class="grey1" onChange={handleChange} value={data.email}/>
                </div>
            </div>
            <div className='row'>
                <div className='co6'>
                    PassWord
                </div>
                <div className='co6'>
                    <input type="Password" name="password" class="grey1" onChange={handleChange} value={data.password}/>
                </div>
            </div>
            <div className='row'>
                
                <div className='co6 '>
                    <input type="submit" name="submit"valu="register"class="grey1 gre"/>
                
                </div>
                
            </div>
            </form>
        </div>
    );
}
export default Register;
