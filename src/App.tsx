
import Footer from "./components/Footer"
import Header from "./components/Header"
import FonderRouter from "./routes/FonderRouter"
import ScrollToTop from "./components/ScrollToTop";

//animasiya 
import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';


const App: React.FC = () => {
useEffect(()=>{
  AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded',
    mirror: true, 

    duration: 1000,
    once: false,
  })
  AOS.refresh();
},[])
  return (
    <>
      <Header/>
      <main>
        <ScrollToTop/>
         <FonderRouter/>
      </main>
      <Footer/>
    </>
  
  )
}

export default App