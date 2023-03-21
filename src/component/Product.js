const Product = ({productList,handleDetail}) => {
    return (  
        
        <>
        {
          productList.map((item)=>{
            return (
             
              
              <h4  className='productlist'> {item.name} 
             
              <button  type='submit' className='detail' onClick={() => handleDetail(item)} >
                 DETAIL</button>
               
                 </h4>
              
              
             
            )
          }) 

        }
        </>
    );
}
 
export default Product;