import React from 'react'
import logo from'./flow.jpg'
import {Link} from 'react-router-dom';
const Header=()=>{
    return (
       <>


<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
    <link rel="icon" type="image/x-icon" href="./favicon.ico"/>
    <title>Myapp</title>
</head>
<body>
    <header>
        <div className="container1">
            <img src={logo} alt="logo" class="logo"/>
            <nav>
            <ul>
             <li><Link to="/">Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to="/logn">Login</Link></li>
               
            </ul></nav>
        </div>
    </header>
</body>
</html>



       </>
    );

}
export default Header;
