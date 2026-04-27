import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path={"/"} exact element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      <h1></h1>
    </>
  )
}

export default App
