import React, { useEffect, useState } from 'react'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import DisplayNews from './DisplayNews'

// let mykey ="0ba45671ec9f4bc7aa0416bda11f2656"
//let mykey2="121184c38d2a4f49b55fcd683a109114"
//let mykey3="3d2c2b51f4ce438f81dd3cb5175022c9"
const Home = ({name,convertArray,setConvertArray}) => {
  const[toLogin,setToLogin]=useState(false)
  const[SPTH,setSPTH]=useState(null)
  const[dataa,setdata]=useState([])
  const[sendpropstoDisplaynews,setSendpropstoDisplaynews]=useState(null)
  const[transfer,settransfer]=useState(false)


  useEffect(()=>{
      axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=3d2c2b51f4ce438f81dd3cb5175022c9')
      .then((res)=>setdata(res.data.articles))
  },[dataa])



  let lname= localStorage.getItem('fullname')
  const handelToLogin=(e)=>{
    e.preventDefault()
     setToLogin(!toLogin)
     setSPTH(lname)
  }

  const handelDelete = (i) => {
  const updatedValue = convertArray.filter((elem,index)=>{
    return i!==index
  })
  setConvertArray(updatedValue)
  };


  const handelToDisplayNews =(i)=>{
       const updatedValue = dataa.find((elem,index)=>{
        return i === index
       })
       setSendpropstoDisplaynews(updatedValue)
       settransfer(true)
  }
  
  return (
   <div >
   {toLogin?(<Login hname={SPTH} />
   ):( 
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',gap:'20px'}}>
    
   <nav style={{height:'50px', display:'flex', justifyContent:'space-around', alignItems:'center',width:'100%', backgroundColor:'yellow'}}>
      <div>
      <span ><h3 style={{color:'orangered'}}>Hi {name} welcome to Today News App </h3></span>
      </div>
   <ul style={{display:'flex',gap:'70px',marginRight:'30px'}}>
   
   <li  style={{color:'black',cursor:'pointer',fontWeight:'bold',listStyle:'none'}}>About</li>
   <li  style={{color:'black',cursor:'pointer',fontWeight:'bold',listStyle:'none'}}>Github</li>
   <li style={{color:'black',cursor:'pointer',fontWeight:'bold',listStyle:'none'}} onClick={handelToLogin}>Logout</li>
   
   </ul>
   
   </nav>
   

   <div>
   
   <table className="table table-dark table-hover">
   
   <thead>
   
     <tr>
           <th>Full Name</th>
           <th>Email</th>
           <th>Phone Number</th>
           <th>College</th>
           <th>Domain</th>  
           <th></th>  
     
     </tr>
   </thead>
   <tbody>
          
   {convertArray.map((elem, i)=>{
    return(
      <tr>
           <td>{elem.fullname}</td>       
           <td>{elem.email}</td>       
           <td>{elem.phonenumber}</td>       
           <td>{elem.college}</td>       
           <td>{elem.domain}</td>    
           <td> <button onClick={()=>handelDelete(i)} className='btn btn-outline-danger'>Delete</button>  </td> 
      </tr>
    )
  })}

   
   </tbody>
   
   </table>
   
   </div>
   



                                                          {transfer?(<DisplayNews settransfer={settransfer}  sendpropstoDisplaynews={sendpropstoDisplaynews} />):(                               
                                                            <div>
                                                            
                                                            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',padding:'10px'}}>
                                                            
                                                            {dataa.map((elem,i)=>{
                                                       return (
                                                           <div onClick={()=>handelToDisplayNews(i)} style={{height:'300px',width:'1000px',border:'solid white',padding:'20px',display:'flex',flexDirection:'row',gap:'50px',justifyContent:'space-between'}}>
                                                           
                                                                 <div>
                                                                 <img width={'300px'} height={'250px'} src={elem.urlToImage} alt="" />
                                                                 </div>
                                                
                                                                 <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                                                                 <div style={{fontFamily:'monospace', fontSize:'20px',fontWeight:'bold'}} >{elem.title}</div>
                                                                 <div style={{ fontSize:'18px',}} > Author :  {elem.author}</div>
                                                                 <div style={{ fontSize:'15px',}} > Description :  {elem.description}</div>
                                                                 <div><span>Read more on : <a href={elem.url}>{elem.url}</a></span></div>
                                                                 
                                                                 </div>
                                                           
                                                           </div>
                                                       )
                                                   })}</div>
                                                           </div>
                                                  
                                                )}

   </div>)}
   

   </div>
  )
}

export default Home
