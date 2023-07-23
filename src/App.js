
import './App.css';

import Footer from './components/Footer';
import Allroutes from './Pages/Allroutes';
import Header from './components/Header';
import {  useSelector } from 'react-redux';



function App() {
  const headertype=useSelector((store)=>store.headerrType.headerType)
 
  return (
    <div className="Appp">
      <Header headerType={headertype} />
       
      
      <main>
        <Allroutes/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
