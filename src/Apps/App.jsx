import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import Search from '../Components/Search/Search'
import Support from '../Components/Support/Support'
import Info from '../Components/Info/Info'
import Lounge from '../Components/Lounge/Lounge'
import Travellers from '../Components/Travellers/Travellers'
import Footer from '../Components/Footer/Footer'

const App = ()=> {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travellers/>
      <Footer/>
    </div>
  )
}

export default App