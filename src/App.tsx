
import Footer from "./components/Footer"
import Header from "./components/Header"
import FonderRouter from "./routes/FonderRouter"
import ScrollToTop from "./components/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./redux/store";

//animasiya 
import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import CustomContact from "./components/CustomContact";


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
    <Provider store={store}>
      <Header/>
      <main>
        <ScrollToTop/>
         <FonderRouter/>
         <CustomContact/>
      </main>
      <Footer/>
    </Provider>
  
  )
}

export default App