import React from 'react'
import { Card, CardContent, Button, TextField } from '@mui/material'
import axios from 'axios'

function CategoryRegister(props) {

  const [name, setname] = React.useState("")


  function registerproducts(){
    axios.post("https://gpnxx2y2b8.execute-api.us-east-1.amazonaws.com/cadastro-categoria",{
      "name": name
    }).then(r =>  {alert("Categoria Cadastrada!")})
  }

  return (
    <Card>
    <CardContent>
    <div style={{fontWeight: "bold", fontSize: "18px" }}>{props.texto}</div> 

<div style={{display: "flex" , flexDirection: "column"}}>
    <div style={{width: "80%" , marginTop: "14px"}}>
    <TextField value={name} onChange={(e) => {setname(e.target.value)}} id="outlined-basic" label="Nome" variant="outlined" />
    </div> 
       <div style={{width: "80%" ,marginTop: "14px", display: "flex", justifyContent: "right"}}>
    <Button variant="contained" onClick={()=>{registerproducts()}}>Salvar</Button> 
    </div>   
</div>
    
     
    </CardContent>
 
</Card>
  )
}

export default CategoryRegister