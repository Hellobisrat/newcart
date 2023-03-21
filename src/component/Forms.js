const Forms = ({handleName, handlePrice, handleProduct}) => {
    return (  
        <form >
        <div>
          <input className='input1' placeholder='Name' onChange={handleName}/>
        </div>
        <div>
          <input className='input2' placeholder='Price' onChange={handlePrice}/>
        </div>
        <div>
          <button className='addpro' onClick={handleProduct}>ADD </button>
        </div>
      </form>
    );
}
 
export default Forms;