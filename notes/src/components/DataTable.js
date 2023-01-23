// import React from "react";
// import { DataGridPro } from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';
// import { useEffect, useState} from "react";

  
// const columns = [
//   { field: 'id', headerName: 'User ID', width: 150 },
//   { field: 'name', headerName: 'Name', width: 150 },
//   { field: 'username', headerName: 'Username', width: 150 },
//   { field: 'email', headerName: 'E-mail', width: 200 },
// ];
// const userTableStyles = {
//   height: '650px',
// };

// export default function DataTable(){
//     const [user, setUser] = useState([]);
//     useEffect(() => 
//     {
//      fetch('https://jsonplaceholder.typicode.com/users')
//        .then((response )=> response.json())
//        .then((json) => setUser(json))
       
       
//     }, [])
    
//     const { data } = useDemoData({
//       dataSet: 'Commodity',
//       rowLength: 100000,
//       editable: true,
//     });
//     return (
//         <div style={{ height: 300, width: '50%' }}>
//           <DataGridPro  
//           {...data}  
//             rows={user}
//             columns={columns}
//             loading={!user.length}
//             sx={userTableStyles}
//             checkboxSelection
//             disableSelectionOnClick
//             experimentalFeatures={{ newEditingApi: true }} />
//         </div>
//       );
// }