import { useState } from "react"

const initialItems = [
  {id:1, description:"passport", quantity:2, packed:false}, 
  {id:2, description:"tooth brush", quantity:1, packed:true},
  {id:3, description:"something", quantity:2, packed:false},
  {id:4, description:"nothing", quantity:2, packed:false}

]
export default function App (){
  return <>
  <div className="app">
  <Logo/>
  <Form/>
  <PackingList/>
  <Stats/>
  </div>
  </>
  
 }

 function Item({item}){
  return(
  <li>
    <span style={item.packed?{textDecoration:"line-through"}:{}}>{item.quantity} {item.description}</span>
    <button>❌</button>
  </li>
  )
 }
 function Logo(){
   return <>
   <h1> 🌴 Far Away 💼</h1>
   </>
 }
 function Form(){
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(20);
  function handleSubmit(e){
  e.preventDefault()
  console.log(e.target)
  console.log(e.target[0])
  console.log(e.target[1])
  console.log(e.target[2])

  }
   return <form className="add-form" onSubmit={handleSubmit}>
     <h3>What do you need for your 😍 trip?</h3>
     <select value={quantity}  onChange={(e)=>{setQuantity(Number((e.target.value)))}}>
{
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((num, i)=><option key={i} value={num}>{num}</option>)

}
     </select>
     <input value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Item..."/>
     <button>Add+</button>
   </form>
 }
 function PackingList(){
   return(
   <div className="list"> 
   <ul>
      {initialItems.map((item)=>< Item key={item.id} item={item}/>)}
   </ul>
   </div>
   )
 }
 function Stats(){
   return <footer className="stats">
     <em>You have X items on your list, and you already packed X%</em>
   </footer>
 }
 
 