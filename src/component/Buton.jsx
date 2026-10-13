import React, { useContext } from 'react'
import { postData } from '../Context.jsx/theme'

const Buton = () => {
  const [Theme,SetTheme]=  useContext(postData)
    const changethme=()=>{
        SetTheme('dark')
        
    }
  return (
    <div>
        <button onClick={changethme}>Chanage theme</button>
    </div>
  )
}

export default Buton