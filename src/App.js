//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from  './page/home';
import Service from  './page/services';
import Error from './Errors/error';
import Contact from './page/contact';
import Layout from './page/layout';
import Login from './page/connexion';
import Inscription from './page/inscription';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Routes>
      <Route path='/' element={<Layout/>}>

      <Route index element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element= {<Contact/>} />
      <Route path="/connexion" element = {<Login />}/>
      <Route path="/inscription" element = {<Inscription />}/>
      <Route path="*" element={<Error />} />
      </Route>
 </Routes>
     
       
    </BrowserRouter>

  
  
    </div>
  );
}

export default App;
