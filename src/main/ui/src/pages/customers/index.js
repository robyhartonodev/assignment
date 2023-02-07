import Layout from "@/components/layout";
import {DataGrid} from '@mui/x-data-grid';
import {Box, Button, Typography} from "@mui/material";
import CustomerForm from "@/components/forms/customerForm";
import {useEffect, useState} from "react";
import {useFlashStore} from "@/stores/flash";


const CustomerIndex = () => {
    const [rows, setRows] = useState([])

    const getCustomers = () => {
        fetch("http://localhost:8080/api/v1/customers")
            .then((response) => response.json())
            .then((data) => setRows(data))
            .catch(() => {
                console.log("fetch get all error")
            })
    }

    const deleteCustomer = (row) => {
        const customerId = row.id;

        fetch(`http://localhost:8080/api/v1/customers/${customerId}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .catch(() => {
                console.log("fetch delete error")
            })
            .finally(() => {
                getCustomers()
            })
    }

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
                            {/*<Button color="primary" onClick={() => {*/}
                            {/*}} variant="contained" sx={{mr: '4px'}}>*/}
                            {/*    View*/}
                            {/*</Button>*/}
                            <Button color="success" onClick={() => {
                            }} variant="contained" sx={{mr: '4px'}}>
                                Edit
                            </Button>
                            <Button color="error" onClick={() => {
                                deleteCustomer(row)
                            }} variant="contained">
                                Delete
                            </Button>
                        </Box>
                    )
                }
            }
        ]
    ;

    useEffect(() => {
        getCustomers()
    }, [])

    const showFlashMessage = useFlashStore((state) => state.showFlashMessage)

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
                showFlashMessage({
                    type: 'error',
                    message: 'Error 322',
                    isOpen: true
                })
            }}>Test</Button>

            <div style={{width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    autoHeight={true}
                />
            </div>
        </Layout>
    )
}

export default CustomerIndex