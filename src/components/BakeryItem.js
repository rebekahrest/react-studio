// TODO: create a component that displays a single bakery item
function BakeryItem(item, addCart) {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */

    return (
        <div className="bakery-item">
        <img src={item.image} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price}</p>
        <button onClick={() => addCart(item.name, item.price)}> Add to Cart</button>
        <br></br><br></br>
        </div>
    );
  }
  
  export default BakeryItem;
  