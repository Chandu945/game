import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
    const navigate = useNavigate()
    let URL = 'http://localhost:1337'
    const nav = () => {
        navigate("/")
    }
    return (
        <>
            <h1 onClick={nav}>HOME</h1>
            {
                props.item.map((value, index) => {
                    return (
                        <div key={index}>
                            <h1 className='title'>{value.attributes.title}</h1>
                            <img src={URL + value.attributes.image.data.attributes.url}></img>
                            <h2 className="p">$ {value.attributes.price}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Cart