// import React from "react";
// import PropTypes from 'prop-types';
// import {Box, Button} from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';
// import {GridRowModes,DataGridPro,GridToolbarContainer,GridActionsCellItem,} from '@mui/x-data-grid-pro';
// import { randomId, randomUpdatedDate, randomArrayItem, randomDesk} from '@mui/x-data-grid-generator';

// const initialRows = [
//     {
//       id: randomId(),
//       Note: randomArrayItem(),
//       Skill: randomDesk(),
//       lastLogin: randomUpdatedDate(),
//     },
// ]
//     function EditToolbar(props) {
//         const { setRows, setRowModesModel } = props;
//         const handleClick = () => {
//             const id = randomId();
//             setRows((oldRows) => [...oldRows, { id, Note: '', Skill: '', isNew: true }]);
//             setRowModesModel((oldModel) => ({
//               ...oldModel,
//               [id]: { mode: GridRowModes.Edit, fieldToFocus: 'Note' },
//             }));
//           };

        
//         return (
//             <GridToolbarContainer>
//               <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//                 Add record
//               </Button>
//             </GridToolbarContainer>
//           );
//         }  
//         EditToolbar.propTypes = {
//             setRowModesModel: PropTypes.func.isRequired,
//             setRows: PropTypes.func.isRequired,
//           };
//           export default function Data() {
//             const [rows, setRows] = React.useState(initialRows);
//             const [rowModesModel, setRowModesModel] = React.useState({});
          
//             const handleRowEditStart = (params, event) => {
//               event.defaultMuiPrevented = true;
//             };
          
//             const handleRowEditStop = (params, event) => {
//               event.defaultMuiPrevented = true;
//             };
          
//             const handleEditClick = (id) => () => {
//               setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//             };
          
//             const handleSaveClick = (id) => () => {
//               setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//             };
          
//             const handleDeleteClick = (id) => () => {
//               setRows(rows.filter((row) => row.id !== id));
//             };
          
//             const handleCancelClick = (id) => () => {
//               setRowModesModel({
//                 ...rowModesModel,
//                 [id]: { mode: GridRowModes.View, ignoreModifications: true },
//               });
          
//               const editedRow = rows.find((row) => row.id === id);
//               if (editedRow.isNew) {
//                 setRows(rows.filter((row) => row.id !== id));
//               }
//             };
          
//             const processRowUpdate = (newRow) => {
//               const updatedRow = { ...newRow, isNew: false };
//               setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//               return updatedRow;
//             };
          
//             const columns = [
//               { field: 'note', headerName: 'Note', width: 180, editable: true },
//               { field: 'skill', headerName: 'Skill',  editable: true },
             
//              {
//       field: 'lastLogin', headerName: 'Last Login', type: 'dateTime', width: 220,editable: true, },
//               {
//                 field: 'actions',  type: 'actions', headerName: 'Actions', width: 100, cellClassName: 'actions',
//                 getActions: ({ id }) => {
//                   const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
          
//                   if (isInEditMode) {
//                     return [
//                       <GridActionsCellItem
//                         icon={<SaveIcon />}
//                         label="Save"
//                         onClick={handleSaveClick(id)}
//                       />,
//                       <GridActionsCellItem
//                         icon={<CancelIcon />}
//                         label="Cancel"
//                         className="textPrimary"
//                         onClick={handleCancelClick(id)}
//                         color="inherit"
//                       />,
//                     ];
//                   }
          
//                   return [
//                     <GridActionsCellItem
//                       icon={<EditIcon />}
//                       label="Edit"
//                       className="textPrimary"
//                       onClick={handleEditClick(id)}
//                       color="inherit"
//                     />,
//                     <GridActionsCellItem
//                       icon={<DeleteIcon />}
//                       label="Delete"
//                       onClick={handleDeleteClick(id)}
//                       color="inherit"
//                     />,
//                   ];
//                 },
//               },
//             ];
          
//             return (
//               <Box
//                 sx={{
//                   height: 500,
//                   width: '100%',
//                   '& .actions': {
//                     color: 'text.secondary',
//                   },
//                   '& .textPrimary': {
//                     color: 'text.primary',
//                   },
//                 }}
//               >
//                 <DataGridPro
//                   rows={rows}
//                   columns={columns}
//                   editMode="row"
//                   rowModesModel={rowModesModel}
//                   onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
//                   onRowEditStart={handleRowEditStart}
//                   onRowEditStop={handleRowEditStop}
//                   processRowUpdate={processRowUpdate}
//                   components={{
//                     Toolbar: EditToolbar,
//                   }}
//                   componentsProps={{
//                     toolbar: { setRows, setRowModesModel },
//                   }}
//                   experimentalFeatures={{ newEditingApi: true }}
//                 />
//               </Box>
//             );
//           }