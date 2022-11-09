import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  function addCart(name, price){
    let tempCart = cart;
    if(tempCart[name] != null){
      tempCart[name]++;
    }
    else{
      tempCart[name] = 1;
    }
    setCart(tempCart);
    setTotal(total + price);
    console.log(cart);
    console.log(total);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        
      BakeryItem(item, addCart)
        // replace with BakeryItem component  
      ))}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <div>{bakeryData.map((item)=>{ if(cart[item.name]>0) return <div>{cart[item.name]+"x"+ item.name}</div>})}</div>
        <br></br>
        <div>Total: ${total}</div>
      </div>
    </div>
  );
}

export default App;
