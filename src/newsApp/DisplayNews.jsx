import React from 'react'

const DisplayNews = ({sendpropstoDisplaynews}) => {
    console.log(sendpropstoDisplaynews);
  return (
    <div style={{padding:'40px'}}>
    

    <div  style={{padding:'20px',display:'flex',flexDirection:'row',gap:'50px',justifyContent:'space-between'}}>
                                                           
    <div>
    <img height={'400px'} width={'500px'} src={sendpropstoDisplaynews.urlToImage} alt="" />
    </div>

    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
    <div style={{fontFamily:'monospace', fontSize:'20px',fontWeight:'bold'}} >{sendpropstoDisplaynews.title}</div>
    <div style={{ fontSize:'18px',}} > Author :  {sendpropstoDisplaynews.author}</div>
    <div style={{ fontSize:'15px',}} > Description :  {sendpropstoDisplaynews.description}</div>
    <div style={{ fontSize:'15px',}} > Description :  {sendpropstoDisplaynews.content}</div>
    <div><span>Read more on : <a href={sendpropstoDisplaynews.url}>{sendpropstoDisplaynews.url}</a></span></div>
    
    </div>

</div>
    
    </div>
    
  
  )
}

export default DisplayNews