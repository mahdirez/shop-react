import React, { useContext } from 'react'
import { Context } from '../../context/Context'

function NumberProducts() {
  const {filter} = useContext(Context);
  return (
    <p> تعداد محصولات : {filter.length}</p>
  )
}

export default NumberProducts