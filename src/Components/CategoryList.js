import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function CategoryList(props) {

  const [rows, setrows] = React.useState([  ])

  React.useEffect(() => {
    axios.get("https://gpnxx2y2b8.execute-api.us-east-1.amazonaws.com/listar-categoria").then(
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
            <TableCell align="right">Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
  )
}

export default CategoryList