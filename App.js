
import './App.css';
import  Home from './components/home';
import Login from './components/logn';
import Register from './components/register';
import Header from './components/header';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>

    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/logn" element={<Login/>}/>

    </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
