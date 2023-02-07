import Layout from "@/components/layout";
import {DataGrid} from '@mui/x-data-grid';
import {Box, Button, Typography} from "@mui/material";
import CustomerForm from "@/components/forms/customerForm";
import {useEffect} from "react";
import {useFlashStore} from "@/stores/flash";


const CustomerIndex = () => {
    const columns = [
            {field: 'id', headerName: 'ID', flex: 1},
            {field: 'name', headerName: 'Name', flex: 1},
            {field: 'email', headerName: 'Email', flex: 1},
            {
                field: 'action',
                headerName: 'Actions',
                flex: 1,
                renderCell: ({row}) => {
                    return (
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Button color="primary" onClick={() => {
                            }} variant="contained" sx={{mr: '4px'}}>
                                View
                            </Button>
                            <Button color="success" onClick={() => {
                            }} variant="contained" sx={{mr: '4px'}}>
                                Edit
                            </Button>
                            <Button color="error" onClick={() => {
                            }} variant="contained">
                                Delete
                            </Button>
                        </Box>
                    )
                }
            }
        ]
    ;

    const rows = [
        {id: 1, name: 'Snow', email: "test1@gmx.de"},
        {id: 2, name: 'Lannister', email: "test2@gmx.de"},
        {id: 3, name: 'Maria', email: "test3@gmx.de"},
        {id: 4, name: 'Stark', email: "test4@gmx.de"},
    ];

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/customers")
            .then((response) => {
                console.log(response.json())
            })
            .catch(() => {
                console.log("fetch error")
            })
    }, [])

    const updateIsOpen = useFlashStore((state) => state.updateIsOpen)

    return (
        <Layout>
            <Typography variant="h3" marginBottom={4}>
                Customers
            </Typography>

            <CustomerForm></CustomerForm>

            <Button color="secondary" variant="contained" sx={{mb: '8px'}}>
                Create
            </Button>

            <Button onClick={() => {
                updateIsOpen(true)
            }}>Test</Button>

            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </Layout>
    )
}

export default CustomerIndex