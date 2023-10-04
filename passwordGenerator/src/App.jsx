import React, { useState } from 'react'
import Header from './Components/contactManagement/Header'
import Form from './Components/contactManagement/Form'
import AllContactList from './Components/contactManagement/AllContactList'

// get local storage data
const getLocalData = ()=>{
  const list = localStorage.getItem("list")
  if(list){
   return JSON.parse(list)
  }
  else{
    []
  }
}
const App = () => {
   const [allContact , setAllContact] = useState(getLocalData)
   const getData=(data)=>{
      setAllContact([...allContact , {id:new Date().getTime().toString(),data}])
   }

   const deleteContact=(newList)=>{
           setAllContact(newList)
   }
   return(
      <>
       <Header/>
       <Form getData={getData}/>
     <AllContactList allContact={allContact} deleteContact={deleteContact}/>
     
      </>
     
   )
}
export default App