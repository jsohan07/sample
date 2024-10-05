import React,{fragment} from "react"
import {useState} from "react"
function App() {

  const [title,setTitle]= useState("sohan1 ");

  function updateTitle(){
    setTitle("my name is"+ Math.random());
  }

  return (
    <fragment>
    <button onClick= {updateTitle}>Update the title</button>
    <Header title={title}></Header> 
    <Header title="sohan2"></Header>
    </fragment>
  )
}

function Header({title}){
  return  <div>
    {title}
  </div>
}
export default App
