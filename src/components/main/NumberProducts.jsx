import React, { useContext } from 'react'
import { Context } from '../../context/Context'

function NumberProducts() {
  const {product} = useContext(Context);
  return (
    <p> تعداد محصولات : {product.length}</p>
  )
}

export default NumberProducts