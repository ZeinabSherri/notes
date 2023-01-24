import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, CardContent, Typography, InputLabel, MenuItem, FormControl, Select, List,  TextField, Stack, Button, FormGroup} from '@mui/material';


let nextuser = 1
const column = [
    {field:'id', headerName:'UserId', width:200},
    {field:'name', headerName:'Username', width:200},
    {field:'catagory', headerName:'catagory', width:200},
    
];


export default function Secondlist(){

const [user, setUser]= useState({id: nextuser, name:'', catagory:'first',  })
const [list, setList] = useState([]);

return(
   <Box sx={{ width: '500px' }}>
   <Card variant="outlined" sx={{ minWidth: 275 }}><CardContent><Typography variant="h4" component="div">User List</Typography></CardContent></Card>
   <br></br>
   <Stack sx={{ margin: '20px' }} >     <TextField fullwidth variant='outlined' label='Add new user' value={user.name} onChange={e => setUser({name: e.target.value, catagory: user.catagory})} required   /></Stack> 

<FormControl sx={{ width: '200px', margin: '20px' }}>
     <InputLabel id="demo-simple-select-label">catagory</InputLabel>
<Select
 labelId="demo-simple-select-label"
 id="demo-simple-select"
 value={user.catagory}
 label="catagory"
 onChange={e => setUser({name: user.name, catagory: e.target.value})}>
 <MenuItem value={"first"}>First</MenuItem>
 <MenuItem value={"second"}>Second</MenuItem>
 <MenuItem value={"third"}>Third</MenuItem>
</Select>
 </FormControl>
 <Button type='submit' variant='outlined' color='primary' sx={{ height: '56px', width: '200px', margin: '25px' }}
    onClick={() => {
      setList([...list, { id: nextuser++, name: user.name, catagory: user.catagory }]); setUser({ name: '', catagory: 'Medium' });
  }} >
      Submit
   </Button>
   <List> 
      <br></br>
      <div style={{ height: 600 }}>
      <DataGrid rows={list} columns={column}/>
      </div>
      </List>
      <form>
      <FormGroup>
                    <Stack direction="row" spacing={4} name='user' sx={{ m: 4 }}>
                    </Stack>
      </FormGroup>
      </form>
    
   </Box>
)

}