import { Card, CardContent, Button, TextField, FormControl, InputLabel,MenuItem,Select } from '@mui/material'
import axios from 'axios'
import React from 'react'

function ProductRegister(props) {

  const [name, setname] = React.useState("")
  const [price, setprice] = React.useState("")
  const [category, setcategory] = React.useState("")
  const [categoriesOptions, setCategoriesOptions] = React.useState([])

  React.useEffect(() => {
    axios.get("https://gpnxx2y2b8.execute-api.us-east-1.amazonaws.com/listar-categoria").then(
    r => {
      setCategoriesOptions(r.data.response)
    }
    )
  }, [])

  function registerproducts(){
    axios.post("https://gpnxx2y2b8.execute-api.us-east-1.amazonaws.com/cadastro-produto",{
      "name": name,
      "price":price,
      "category": category
    }).then(r =>  {alert("Produto Cadastrado!")})
  }


  return (
    <Card>
        <CardContent>
         <div style={{fontWeight: "bold", fontSize: "18px" }}>{props.texto}</div> 

        <div style={{display: "flex" , flexDirection: "column"}}>
            <div style={{width: "80%" , marginTop: "14px"}}>
            <TextField value={name} onChange={(e) => {setname(e.target.value)}} id="outlined-basic" label="Nome" variant="outlined" />
            </div> 
            <div style={{width: "80%" , marginTop: "14px"}}>
            <TextField value={price} onChange={(e) => {setprice(e.target.value)}} id="outlined-basic" label="Preço" variant="outlined" />
            </div> 
            <div style={{width: "80%" , marginTop: "14px"}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Categoria"
                                onChange={(e) => { setcategory(e.target.value) }}
                            >
                                {
                                    categoriesOptions.map(c => (
                                        <MenuItem value={c.id}>{c.name}</MenuItem>
                                    ))
                                }
                            </Select>
            </FormControl>
            
            </div> 
            <div style={{width: "80%" ,marginTop: "14px", display: "flex", justifyContent: "right"}}>
            <Button variant="contained" onClick={() => {registerproducts()}}>Salvar</Button> 
            </div>   
        </div>
            
        
         
        </CardContent>
     
    </Card>
    
  )
}

export default ProductRegister