import Layout from "@/components/layout";
import {useEffect, useState} from "react";
import {useFlashStore} from "@/stores/flash";
import {Box, Button, Typography} from "@mui/material";
import CustomerForm from "@/components/forms/customerForm";
import {DataGrid} from "@mui/x-data-grid";

const OrderIndex = () => {
    const [rows, setRows] = useState([])
    const showFlashMessage = useFlashStore((state) => state.showFlashMessage)

    const getOrders = () => {
        fetch("http://localhost:8080/api/v1/orders")
            .then((response) => response.json())
            .then((data) => setRows(data))
            .catch(() => {
                showFlashMessage({
                    type: 'danger',
                    message: 'Get orders failed',
                    isOpen: true
                })
            })
    }

    const deleteOrders = () => {
    }

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'subject', headerName: 'Name', flex: 1},
        {field: 'orderDate', headerName: 'Order Date', flex: 1},
        {
            field: 'status', headerName: 'Status', flex: 1, renderCell: ({row}) => {
                const val = (row.status === 0) ? "PROCESSING" :  (row.status === 1) ? "SUCCESS" : "FAILED";

                return (
                    <Typography>
                        {val}
                    </Typography>
                )
            }
        },
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
                    </Box>
                )
            }
        }
    ];

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <Layout>
            <Typography variant="h3" marginBottom={4}>
                Orders
            </Typography>

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

export default OrderIndex