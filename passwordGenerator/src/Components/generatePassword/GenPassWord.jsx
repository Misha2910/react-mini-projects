import React, { useEffect, useState } from 'react'

const GenPassword = () => {
  const [length , setLenght] = useState(0);
  const [number , setNumber] = useState(false);
   const [char , setChar] = useState(false);
   const [pass , setPass] = useState();


 const generatePassword=()=>{
   
         let password = "";
         let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
         if(number){
         str+='1234567890'
         }
         if(char){
         str+='!@#$%^&*()_+=;,./?"'
         }
         for(let i = 0;i<length;i++)
         {
                password += str.charAt(Math.floor(Math.random()*str.length)+1)
         }

         setPass(password);
  }

   useEffect(()=>{
      generatePassword()}
    , [length, char,number])

      const copyToClipboard=()=>{
         navigator.clipboard.writeText(pass);
         alert("password is copied")
      }

  return (
    <div>
       <h3>Password Generator</h3>
       <input type='text' placeholder='password'name={pass} value={pass}/>
       <label onClick={copyToClipboard}
       style={{cursor:'pointer'}} >copy</label>
       <div>
        <input type='range' min={6} max={100} onChange={(e)=>setLenght(e.target.value)}/>
        <label>Length : {length}</label>
       </div>
       <div>
          <input type='checkbox' onChange={()=>{setNumber((prev)=>!prev)}}/>
          <label>Number</label>
       </div>
          <div>
          <input type='checkbox'onChange={()=>{setChar((prev)=>!prev)}}/>
          <label>character</label>
       </div>
     
    </div>
  )
}

export default GenPassword;