import React, { useEffect, useState } from "react";
import Components from "./Component";
import { fetchData } from "./util";
import Header from "./Header";
import Cart from "./Cart";

function App() {
	const [item, setitem] = useState([])
	const [cart , addcart] = useState([])
	const [flag , updateflag] = useState(false)
	useEffect(() => {
		getgame()
	}, [])
	const getgame = () => {
		fetchData("/api/games?populate=*").then((res) => {
			setitem(res.data)
		})
	}
	return (
		<>
		{flag?<Cart cart={cart}/>:<div></div>}
		    <Header />
			<Components item={item} addcart={addcart} cart={cart}/>
		</>
	);
}


export default App;
