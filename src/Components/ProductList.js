import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

  


function ProductList(props) {

  const [rows, setrows] = React.useState([  ])

  React.useEffect(() => {
    axios.get("https://gpnxx2y2b8.execute-api.us-east-1.amazonaws.com/listar-produto").then(
    r => {
      setrows(r.data.response)
    }
    )
  }, [])
  


  

  return (
    <div>
        <h4 style={{fontWeight: "bold", fontSize: "18px" }}>{props.texto}</h4> 
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Preço</TableCell>
            <TableCell align="right">Categoria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">R${row.price}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductList