import { useState  } from "react"

const Data = () => {
    const [product,setProduct]=useState('')
    const [price,setPrice]=useState('')
    const [productList, setProductList]= useState([])
    const [cart,setCart] =useState ([])
    const [productDetails, setProductDetails] =useState(null)
    const [toggle, setToggle] = useState(false);
  
    const handleName =(event)=>{
      setProduct(event.target.value)
      }
    
    const handlePrice =(e)=>{
      setPrice(e.target.value)
    }
    const handleProduct =(event)=>{
      event.preventDefault();
      let templist = {
        id: Math.random()*100,
        name:product,
        price:price
      }
      setProductList(oldproduct=>[...oldproduct,templist])
      setProduct('')
    }
  
    const handleDetail = (product) => {
       setProductDetails (product)
    }
  
    const handleClose = () => {
      setProductDetails(null)
    }
  
    const handleAdd =(product)=>{
      let templist = {
        id : Math.random()*100,
        name: product.name,
        price: product.price
      }
      setCart(oldproduct=>[...oldproduct,templist])
      setToggle(true)
    }
  
    const handleRemove =(id) =>{
      const newcart =cart.filter(product=>product.id !== id)
      setCart(newcart)
    }
  
    const handleExit = ()=>{
      setToggle(false)
    }
    return ( 
     {handleName,handlePrice,handleProduct,handleDetail,handleClose,handleAdd,handleRemove,handleDetail}
     );
}
 
export default Data;