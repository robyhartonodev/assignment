import Layout from "@/components/layout";
import {DataGrid} from '@mui/x-data-grid';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    TextField,
    Typography
} from "@mui/material";
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
                        {/*<Button color="success" onClick={() => {*/}
                        {/*}} variant="contained" sx={{mr: '4px'}}>*/}
                        {/*    Edit*/}
                        {/*</Button>*/}
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

    // Dialog form handling below
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setName('');
        setEmail('');
    };

    const createCustomer = () => {
        fetch("http://localhost:8080/api/v1/customers", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((response) => {
                if (response.status >= 200 && response.status <= 300) {
                    showFlashMessage({
                        type: 'success',
                        message: 'Customer Created Successfuly',
                        isOpen: true
                    })
                    handleClose()
                }
                if (response.status >= 400 && response.status <= 500) {
                    showFlashMessage({
                        type: 'error',
                        message: 'Create failed. Please check your inputs',
                        isOpen: true
                    })
                }
            })
            .finally(() => {
                getCustomers()
            });
    }

    // Dialog Component Customer Form
    const dialogCustomerForm = (
        <div>
            <Button color="secondary" variant="contained" onClick={handleClickOpen}>
                Create
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    Form Customer
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name" variant="filled"
                                fullWidth
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="filled"
                                fullWidth
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value)
                                }}/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={createCustomer} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

    return (
        <Layout>
            <Typography variant="h3" marginBottom={4}>
                Customers
            </Typography>

            <div style={{marginBottom:'8px'}}>
                {dialogCustomerForm}
            </div>

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