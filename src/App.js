
import './App.css';

import Footer from './components/Footer';
import Allroutes from './Pages/Allroutes';
import Header from './components/Header';
import {  useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';



function App() {
  const headertype=useSelector((store)=>store.headerrType.headerType)
 
  return (
    <Box bg={"rgb(19, 18, 18)"} color={"rgb(255,215,0)"} className="Appp">
      <Header headerType={headertype} />
       
      
      <main>
        <Allroutes/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Box>
  );
}

export default App;
