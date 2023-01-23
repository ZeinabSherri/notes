import React from "react";
import { Box, Card, CardContent, Typography, InputLabel, MenuItem, FormControl, Select, List,  TextField, Stack, Button, FormGroup } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

import { useState } from "react";

let nextNote = 1
const columns = [
    { field: 'id', headerName: 'ID', width: 25 },
    { field: 'name', headerName: 'Note', width: 350 },
    { field: 'priority', headerName: 'Priority', width: 75 }
];

export default function Lists() {
    const [note, setNote] = useState({ id: nextNote, name: '', priority: 'Medium' });
    const [list, setList] = useState([]);

    return (
        <Box sx={{ width: '500px' }} >
            <Card variant="outlined" sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Notes React Demo
                    </Typography>
                </CardContent>
            </Card>
            <h2 sx={{ margin: 'auto 0 auto 0', align: 'center' }} ></h2>
            <List>
                <TextField fullWidth label='Add a note' variant='outlined' size='small' value={note.name} onChange={e => setNote({ name: e.target.value, priority: note.priority })} required />
                <br></br>
                <br></br>
                <FormControl sx={{ width: '200px', margin: '25px' }} >
                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={note.priority}
                        label="Priority"
                        onChange={e => setNote({ name: note.name, priority: e.target.value })}
                    >
                        <MenuItem value={"High"}>High</MenuItem>
                        <MenuItem value={"Medium"}>Medium</MenuItem>
                        <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                </FormControl>
                <Button type='submit' variant='outlined' color='primary' sx={{ height: '56px', width: '200px', margin: '25px' }}
                    onClick={() => {
                        setList([...list, { id: nextNote++, name: note.name, priority: note.priority }]); setNote({ name: '', priority: 'Medium' });
                    }} >
                    Submit
                </Button>
                <br></br>
                <div style={{ height: 500 }}>
                    <DataGrid rows={list} columns={columns} />
                </div>
                {/* <ListItemIcon>
                    <dl>
                        {list.map(list => (
                            <dt key={list.id}><KeyboardArrowRightIcon />{list.name}</dt>
                        ))}
                    </dl>
                </ListItemIcon> */}
            </List>
            <form action="/somewhere" >
                <FormGroup>
                    <Stack direction="row" spacing={4} name='note' sx={{ m: 1 }}>
                    </Stack>
                </FormGroup>
            </form>
        </Box>
    )
}