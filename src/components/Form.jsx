import React, { useEffect, useState } from 'react'
import "../App.css"
const Form = () => {
    const [FNum,setFnum]=useState(0)
    const [SNum,setSnum]=useState(0)
    const [LNum,setLnum]=useState(0)
    
    const [testAns,setTestAns]=useState()
    const [btnEn,setBtnEn]=useState(false)
  
  useEffect(()=>{
    setFnum(Math.floor(Math.random() * 6))
    setSnum(Math.floor(Math.random() * 6))
    setLnum(Math.floor(Math.random() * 6))
    
  },[])

useEffect(()=>{
    setTestAns(FNum+SNum+LNum)
    console.log(testAns)
},[FNum,SNum,LNum,testAns])

  const handlechange=(e)=>{
   
   
if(+(e.target.value)===testAns){
    console.log("okk")
    setBtnEn(true)
}

  }
  return (
  
    <>
       <form action="https://formspree.io/f/mknaagln" method="POST" className="Cform"  >
           
           <label htmlFor="">Your Name</label>
                    <input type="text"  name="username" id=""
                    required
                    autoComplete="off"
                    />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="Email" 
                    autoComplete="off"
                    required />
                    <label htmlFor="">Your Mobile No.</label>
                     <input type="number" name="mobile" 
                    autoComplete="off"
                    required />
                    <label htmlFor="">Your Massage</label>
                    <textarea name="massage" id="" cols="30" rows="10" required autoComplete="off" ></textarea>
                    <label htmlFor=""><span>{FNum}</span>+<span>{SNum}</span>+<span>{LNum}</span> </label>
                    <input type="text" name="puzzel" id=""   onChange={handlechange}required />
                    <input type="submit" name="" value={"Send Message"} className='submit' disabled={btnEn?false:true} />
                </form>
    </>
  )
}

export default Form
