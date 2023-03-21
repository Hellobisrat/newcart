

    const Details = ({productDetails,handleClose, handleAdd}) => {
 
    return ( 
        <>
        
        <h6>{productDetails.name}</h6>
        <h6>{productDetails.price}</h6>
        <button className='addpro' onClick={()=>handleAdd(productDetails)}> ADD </button>
        </>

     );
}
 
export default Details;