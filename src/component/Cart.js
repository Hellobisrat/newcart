const Cart = ({cart, handleRemove, handleExit}) => {
    return ( 
        <div>
            <h2> my shopping List</h2>
            {
                cart.map((item)=>
                {
                   return (
                    <div>
                        <>
                        <h3 >product:{item.name}</h3>
                        <h3 >product:{item.price}</h3>
                        <button key={item.id} onClick={()=>handleRemove(item.id)}>Remove</button>
                        </>
                        </div>
                   )
                }
                )
            }
            <button onClick ={handleExit}>Exit</button>
        </div>
     );
}
 
export default Cart;