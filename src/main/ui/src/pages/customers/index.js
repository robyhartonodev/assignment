import Layout from "@/components/layout";
import {DataGrid} from '@mui/x-data-grid';
import {Box, Button, Typography} from "@mui/material";
import CustomerForm from "@/components/forms/customerForm";
import {useEffect, useState} from "react";
import {useFlashStore} from "@/stores/flash";


const CustomerIndex = () => {
    const [rows, setRows] = useState([])
    const showFlashMessage = useFlashStore((state) => state.showFlashMessage)

    const getCustomers = () => {
        fetch("http://localhost:8080/api/v1/customers")
            .then((response) => response.json())
            .then((data) => setRows(data))
            .catch(() => {
                showFlashMessage({
                    type: 'danger',
                    message: 'Get customers failed',
                    isOpen: true
                })
            })
    }

    const deleteCustomer = (row) => {
        const customerId = row.id;

        fetch(`http://localhost:8080/api/v1/customers/${customerId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                showFlashMessage({
                    type: 'success',
                    message: 'Customer Deleted Successfuly',
                    isOpen: true
                })
            })
            .catch(() => {
                showFlashMessage({
                    type: 'danger',
                    message: 'Delete failed',
                    isOpen: true
                })
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
    ];

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <Layout>
            <Typography variant="h3" marginBottom={4}>
                Customers
            </Typography>

            <CustomerForm></CustomerForm>

            <Button color="secondary" variant="contained" sx={{mb: '8px'}}>
                Create
            </Button>

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