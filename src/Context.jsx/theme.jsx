import React, { createContext, useState } from 'react'

 export const postData=createContext()
const Theme = (props) => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <postData.Provider value ={[theme,settheme]}>
        {props.children}
      </postData.Provider>
    </div>
  )
}

export default Theme