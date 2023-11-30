import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const DisplayNews = ({sendpropstoDisplaynews,settransfer}) => {

    console.log(sendpropstoDisplaynews);
    const handelClick =()=>{
      settransfer(false)
    }
  return (
    <div style={{padding:'40px'}}>
     <button onClick={handelClick}  className='btn btn-outline-warning'>Back</button>

    <div  style={{padding:'40px',display:'flex',flexDirection:'column',gap:'50px',justifyContent:'space-between'}}>
                                                           
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img  src={sendpropstoDisplaynews.urlToImage} alt="" />
    </div>

    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{fontFamily:'monospace', fontSize:'20px',fontWeight:'bold'}} >{sendpropstoDisplaynews.title}</div>
    <div style={{ fontSize:'18px',}} > Author :  {sendpropstoDisplaynews.author}</div>
    <div style={{ fontSize:'15px',}} > Description :  {sendpropstoDisplaynews.description}</div>
    <div style={{ fontSize:'15px',}} > Description :  {sendpropstoDisplaynews.content}</div>
    <div><span style={{color:'orangered'}}>Read more on : <a href={sendpropstoDisplaynews.url} target='_blank' rel='noreferrer'>linkendpropstoDisplaynews.url</a></span></div>
    
    </div>

</div>
    
    </div>
    
  
  )
}

export default DisplayNews