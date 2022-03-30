import React, { Component  } from 'react';
import Navbar from './Components/Navbar/Navbar';
import "./App.css";
import Main from './Components/Main/Main';
import SideMenu from './Components/SideMenu/SideMenu';
import Logo from './Components/Logo/logo';
import PagesLogo from './Components/pageLogo/PagesLogo';
import Crousel from './Components/Crousel/Crousel';


class App extends Component {
  state = {  }
  render() { 
    return (
    <div className="app" > 
      <Navbar/>
      <Main/>
      <Crousel/>
      <Logo/>
      <PagesLogo/>
      <SideMenu/>
    </div>
    )
    
  }
}

export default App;