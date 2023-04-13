import React, { useState } from 'react';
const Register=(props)=>{
    const [data,setData]=useState(
        {
            Firstname:"",
            Lastname:"",
            mail:"",
            password:""
        }
        
    )
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]:e.target.value});
        console.log(data)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const sendData={
            Firstname:data.Firstname,
            Lastname:data.Lastname,
            email:data.Email,
            password:data.password
        }
        console.log(sendData);
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
                    <input type="email" name="Email"class="grey1" onChange={handleChange} value={data.mail}/>
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
                    <input type="submit" name="submit"class="grey1 gre"/>
                
                </div>
                
            </div>
            </form>
        </div>
    );
}
export default Register;
