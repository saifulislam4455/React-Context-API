import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { postData } from '../Context.jsx/theme';

const Navbar = () => {

   const [data] = useContext(postData)
   console.log(data)
   
  return (
    <div className={data}>
<h2>{data} </h2>
<Nav2 theme={data}/>
    </div>
  )
}

export default Navbar