import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login=()=>{
    let navigate=useNavigate();
    const [user,setUser]=useState({email:'',password:'' })
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const submitForm=(e)=>{
        e.preventDefault(); 
       const sendData = {
        
            email:user.email,
            password:user.password

        }
        axios.post('http://localhost/Loginform/login.php',sendData)
        .then((result)=>{
            if (result.data.Status === '200') { 
                window.localStorage.setItem('email', result.data.email);
                window.localStorage.setItem('userName', (result.data.first_name+ ' ' +result.data.first_name ));  
                navigate(`/dashboard`);
            }
        else  {
           
           
           alert('Invalid User'); 
        }
      })  
    }

    return (
        <form onSubmit={submitForm}>
        <div>
           <h1 className="center">Login</h1> 
           <div className="row">
           <div className='co6'>Email</div>
            <div className='co6'><input type="text" name="email" class="grey1" onChange={handleChange} value={user.email}/></div>
           </div>
           <div className="row ">
           <div className='co6'>Password</div>
            <div className='co6'><input type="password" name="password" class="grey1" onChange={handleChange} value={user.password}/></div>
           </div>
           <div className='co6 '>
           <input type="submit" name="submit" value ="login" class="grey1 gre"/>
           </div>
        </div></form>
    );
}
export default Login;
