import React from 'react'

const Moto = ({mikanike,chaine,handlePrice }) => {
   console.log(mikanike);
   return(
    <div>
      {
        mikanike.map((el)=>
        (
          <div>
           <h1>{el.id}</h1>
           <h1>{el.brand}</h1>
           <button onClick={()=> handlePrice(el.brand, el.price)}>show price</button>
          </div>
        )
        )
      }
    </div>
   )
}
export default Moto