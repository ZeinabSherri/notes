import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import  {randomUpdatedDate} from '@mui/x-data-grid-generator';
import { Box, Card, CardContent, Typography, InputLabel, MenuItem, FormControl, Select, List,  TextField, Stack, Button, FormGroup} from '@mui/material';


let nextuser = 1
const column = [
    {field:'ID', headerName:'UserId', width:25},
    {field:'Name', headerName:'Username', width:35},
    {field:'priority', headerName:'Priority', width:35},
    {field:'lastlogin', headerName:'lastlogin', width:40},
];


export default function Secondlist(){

const [user, setUser]= useState({id: nextuser, name:'', priority:'Meduim', lastlogin: randomUpdatedDate(),  })
const [list, setList] = useState([])

return(
   <Box sx={{ width: 300, height: 300,}}>
   <Card><CardContent><Typography variant="h5" component="div">User List</Typography></CardContent></Card>
   <List> 
   <TextField Fullwidth variant='outlined' Label='Add new user' value={user.name} onChange={e => setUser({name: e.target, priority: user.priority, lastlogin: randomUpdatedDate(),})} required />
   <br></br>
   <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
   <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={user.priority}
    label="Priority"
    onChange={e => setUser({name: user.name, priority: e.target.value})}>
    <MenuItem value={"low"}>Low</MenuItem>
    <MenuItem value={"Meduim"}>Meduim</MenuItem>
    <MenuItem value={"High"}>High</MenuItem>
   </Select>
    </FormControl>
    <Button type='submit' variant='outlined' color='primary' sx={{ height: '56px', width: '200px', margin: '25px' }}
       onClick={() => {
         setList([...list, { id: nextuser++, name: user.name, priority: user.priority }]); setUser({ name: '', priority: 'Medium', lastlogin: randomUpdatedDate(), });
     }} >
         Submit
      </Button>
      <br></br>
      <div style={{ height: 500 }}>
      <DataGrid row={list} column={column}/>
      </div>
      </List>
      <form>
      <FormGroup>
                    <Stack direction="row" spacing={4} name='note' sx={{ m: 1 }}>
                    </Stack>
                </FormGroup>
      </form>
   </Box>
)

}