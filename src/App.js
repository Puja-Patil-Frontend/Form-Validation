import React,{useState} from 'react'
import './App.css'

function App(){
    const [name,setname]=useState('')
     const[userErr,setUserErr]=useState(false);
     const [rating,setrating]=useState('')
     
  const submitHandle =(e)=> {
    if(name.length < 2 )
    {
      alert('charcter should be more than 2' )
    }
    else if(name.length >15)
    {
      alert('charcter should be less than 15')
    }
    else if(rating.length ===0)
    {
        alert('select the Rating')
    }
    else{
      alert('Submited Successfully')
    }
    e.preventDefault();
   
}
  const ratingHandle =(e)=>{
    let item=e.target.value;  
     if(item.length  ===0){
          setUserErr(true)
      }
      else
      {
        setUserErr(false)
      }
      setrating(item)
  }
  

  const nameHandle =(e) =>{
      let item = e.target.value;
      if(item.length<2)
      {
        setUserErr(true)
      }
      else{
        setUserErr(false)
      }
      setname(item)
    }
    return(
          <div className='container'>
        <h1>Submit comment</h1>
        <form onSubmit ={submitHandle}>
        <label>Select th Rating</label><br/>
        <select id='number' name='number' onChange={ratingHandle}>
        <option value='select the rating'>0</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        </select>
      
           <div className='field'>
           <label>Name</label><br/>
           <input  type='text' 
                name='name' onChange={nameHandle}  placeholder='Enter the Name'/> 
           {/* {
               userErr ? <span>Name not valid</span>:' '
           }   */}
          
           </div>
           <div className='field'>
        <label>Comment</label><br/>
        <textarea rows='4' cols='45' name='comment' placeholder='Enter the Comment'/>
        </div>
        
        <div className='fluid ui button'>
        <button type="submit">Submit</button>
        <button type="reset" >Reset</button>
         </div>
        </form>
        </div>  
        
    )
}
export default App;



