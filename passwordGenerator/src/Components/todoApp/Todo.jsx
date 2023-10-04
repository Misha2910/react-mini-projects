import React, { useEffect, useState } from 'react'

const getLocalItem =()=>{
  const list =  localStorage.getItem('lists')
   console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }else{
    return []
  }
} 
const Todo = () => {
  const [input,setInput] = useState()
  const [list,setList] = useState(getLocalItem);
  const [isEditItem , setIsEditItem] = useState(null);
  const [toggle , setToggle] = useState(true);

  // add item into the list
  const addItem=()=>{
    if(!input){
      alert("please fill the field....")
     }
     else if(input && !toggle){
          setList(list.map((curval)=>{
                  if (curval.id === isEditItem){
                  return {...curval , item:input}
                  }
                  return curval;
          
            })
          )
          setInput('')
          setToggle(true)
          setIsEditItem(null)
     }
      else{
            const newList = {id:new Date().getTime().toString(), item:input}
            setList([...list , newList])          
            setInput('')
        } 
  }

  // remove targetes list item
  const removeList=(removeItemId)=>{
       const updatedList=list.filter((curval)=>{
            return curval.id!=removeItemId;
          })
          setList(updatedList)
  }

  // remove all functionality
  const removeAll=()=>{
    list!=[] && setList([]);
    
  }

  // edit functionality
  const edit=(id)=>{
      const editItem = list.find((curval)=>{
            return id===curval.id;
      })
      console.log(editItem)
      setInput(editItem.item)
      setToggle(false)
      setIsEditItem(id)
  }

  // setting local storage
  useEffect(()=>{
    localStorage.setItem('lists' , JSON.stringify(list))
  },[list])
  return (
    <>
      <div>Todo</div>
      <input type='text' placeholder='Enter your todo' value={input} onChange={(e)=>setInput(e.target.value)} />
      {toggle? <button onClick={addItem}>Add</button>:
                <button onClick={addItem}>Edit</button>}
      <h1 style={{textTransform:'capitalize'}}>here is your to do list :)</h1>
      {list!=[] && list.map((curval)=>{
          return(
         
              <div key={curval.id}>
                  <div >{curval.item}</div>
                 <button onClick={()=>removeList(curval.id)}>Remove</button>
                 <button onClick={()=>edit(curval.id)}>Edit</button>
               </div>  
                    
          )
      })}
      {list.length>=1 && <button onClick={removeAll}>remove all</button>}
   </>
  )
}

export default Todo