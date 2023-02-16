import React, { useState } from 'react';
import { async } from 'regenerator-runtime';

const Components = (props) => {

    let URL = 'http://localhost:1337'
    const add = (e) =>{
         props.addcart([...props.cart,e])
    }
    return(
        <div id="min">
        {
            props.item.map((value , index)=>{
                return(
                    <div key={index} className="card">
                          <h1 className='title'>{value.attributes.title}</h1>
                          <img src={URL + value.attributes.image.data.attributes.url}></img>
                          <p className="d">{value.attributes.description}</p>
                          <h2 className="p">$ {value.attributes.price}</h2>
                          <button className='btn' onClick={()=>{add(value)}}>ADD TO CART</button>
                    </div>
                )
            })
        }
        </div>
    )
  
}

export default Components