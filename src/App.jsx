import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Theme from './Context.jsx/theme';
import Buton from './component/Buton';
const App = () => {
const [theme, settheme] = useState('light ')
  return (
    <div>
      <Theme>

      <Navbar/>
      <Buton/>
      </Theme>
    </div>
  )
}

export default App