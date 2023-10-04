import React, { useState } from 'react'

const Form = ({getData}) => {
  const[inputData , setInputData] = useState({name:"" , email:""})
  const handleInput=(e)=>{
        setInputData({...inputData , [e.target.name]:e.target.value})
        
  }
  const submitForm=(e)=>{
      e.preventDefault()
      const{name,email} = inputData
      if(!name || !email){
        alert("All fields are mandatory") 
        return
      }
      getData(inputData)
      setInputData({name:"" , email:""})

  }
  return (
    <form onSubmit={submitForm}>
        <h1>Registration Form</h1>
        <label htmlFor='name'>Name</label>
        <input type='text' placeholder='enter name' name='name' value={inputData.name} onChange={handleInput}/><br/><br/>

         <label htmlFor='email'>Email</label>
        <input type='text' placeholder='enter email' name='email' value={inputData.email} onChange={handleInput}/><br/><br/>

        <button>Add Contact</button>


    </form>
  )
}

export default Form