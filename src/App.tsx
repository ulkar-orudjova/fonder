
import Footer from "./components/Footer"
import Header from "./components/Header"
import FonderRouter from "./routes/FonderRouter"

const App = () => {
  return (
    <>
      <Header/>
      <main>
         <FonderRouter/>
      </main>
      <Footer/>
    </>
  
  )
}

export default App