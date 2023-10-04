import React, { useState } from 'react'

const BasicForm = () => {
  const data = {name:"" , email:"" , pass:""};
  const [inputData , setInputData] = useState(data);
  const handleInput=(e)=>{
    console.log(e.target.value)
      setInputData({...inputData ,[e.target.name]:e.target.value})
      console.log(inputData)
  }

 const handleSubmit=(e)=>{
      e.preventDefault();
      const {name , email, pass} = inputData;
     if(!name || (!email) || (!pass)){
      alert("All fields are mandatory")
     }else{
      alert(`${name} your form is submitted successfully`)
      setInputData(data)
    }

      
 }

  return (
    <>
      <div>
         <h1>Registration Form</h1>
         <form onSubmit={handleSubmit}>
           <div>
               <label htmlFor='name'>Name</label>
               <input type='text' placeholder='enter your name' value={inputData.name}
               onChange={handleInput} name='name'/><br/><br/>
            </div>

            <div>
              <label htmlFor='email'>Email</label>
              <input type='text' placeholder='enter your email' value={inputData.email}
              onChange={handleInput} name='email'/><br/><br/>
            </div>

            <div>
              <label htmlFor='pass'>Password</label>
              <input type='text' placeholder='enter your password' value={inputData.pass}
               onChange={handleInput} name='pass'/><br/><br/>
            </div>
              <button type='submit'>Submit</button>
         </form>
      </div>
      
    </>
  )
}

export default BasicForm