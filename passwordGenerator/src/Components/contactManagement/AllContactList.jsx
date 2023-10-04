
import React from 'react'
import {useEffect } from 'react'


const AllContactList = ({allContact , deleteContact}) => {  

    // delete functionality
    const removeContact=(toBeDeletedItem)=>{
          const newList = allContact.filter((curVal)=>{
            return toBeDeletedItem.id!=curVal.id;
          })
          deleteContact(newList)
    }

    // set the local storage 
useEffect(()=>{
    localStorage.setItem("list" , JSON.stringify(allContact))
} ,[allContact])

  return (
    <div>
          <h1>All Contacts</h1>
          {allContact.map((curVal)=>{
            return (
                <div key={curVal.id}>
                    <div>{curVal.data.name}</div>
                    <div>{curVal.data.email}</div>
                    <button onClick={()=>removeContact(curVal)}>Delete</button><br/><br/>
                </div>
            )
          })}
        </div>
  )
}

export default AllContactList