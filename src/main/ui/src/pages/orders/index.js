import Layout from "@/components/layout";
import {useEffect, useState} from "react";
import {useFlashStore} from "@/stores/flash";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {format} from 'date-fns'

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

    // For select customers
    const [customers, setCustomers] = useState([])
    const getCustomers = () => {
        fetch("http://localhost:8080/api/v1/customers")
            .then((response) => response.json())
            .then((data) => setCustomers(data))
    }

    const deleteOrder = (row) => {
        const orderId = row.id;

        fetch(`http://localhost:8080/api/v1/orders/${orderId}`, {
            method: 'DELETE',
        })
            .then((response) => {
                showFlashMessage({
                    type: 'success',
                    message: 'Order Deleted Successfuly',
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
                getOrders()
            })
    }

    const columns = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'subject', headerName: 'Name', flex: 1},
        {field: 'orderDate', headerName: 'Order Date', flex: 1},
        {
            field: 'status', headerName: 'Status', flex: 1, renderCell: ({row}) => {
                const val = (row.status === 0) ? "PROCESSING" : (row.status === 1) ? "SUCCESS" : "FAILED";

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
                            setSelectedOrder(row)
                            setViewOpen(true)
                        }} variant="contained" sx={{mr: '4px'}}>
                            View
                        </Button>
                        <Button color="error" onClick={() => {
                            deleteOrder(row)
                        }} variant="contained">
                            Delete
                        </Button>
                    </Box>
                )
            }
        }
    ];

    useEffect(() => {
        getOrders()
        getCustomers()
    }, [])

    // Form stuffs
    const [open, setOpen] = useState(false)

    const [subject, setSubject] = useState('')
    const [customerId, setCustomerId] = useState('')
    const [orderDate, setOrderDate] = useState(new Date())
    const [status, setStatus] = useState(0)
    const [files, setFiles] = useState([])

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
        setSubject('')
        setStatus(0)
        setCustomerId('')
        setOrderDate(new Date())
        setFiles([])
    };

    const convertFileListToGrayscale = (fileList) => {
        return Promise.all(Array.from(fileList).map(file => convertToGrayscale(file)));
    }

    const convertToGrayscale = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function (event) {
                const image = new Image();
                image.src = event.target.result;

                image.onload = function () {
                    const canvas = document.createElement('canvas');
                    canvas.width = image.width;
                    canvas.height = image.height;
                    const context = canvas.getContext('2d');
                    context.drawImage(image, 0, 0);
                    const imageData = context.getImageData(0, 0, image.width, image.height);
                    const data = imageData.data;

                    for (let i = 0; i < data.length; i += 4) {
                        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                        data[i] = avg;
                        data[i + 1] = avg;
                        data[i + 2] = avg;
                    }
                    context.putImageData(imageData, 0, 0);

                    canvas.toBlob(blob => {
                        resolve(new File([blob], file.name, {
                            type: file.type,
                            lastModified: file.lastModified
                        }));
                    }, file.type);
                };
            };

            reader.onerror = function (error) {
                reject(error);
            };
        });
    }

    const createOrder = () => {
        const formData = new FormData()
        formData.append('subject', subject)
        formData.append('status', '0')
        formData.append('customerId', customerId)

        if (orderDate) {
            formData.append('orderDate', format(orderDate, 'dd-MM-yyyy'))
        }

        files.forEach((file) => {
            formData.append('multipartFiles', file)
        })

        for (const pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        fetch("http://localhost:8080/api/v1/orders", {
            method: "post",
            body: formData
        })
            .then((response) => {
                if (response.status >= 200 && response.status <= 300) {
                    showFlashMessage({
                        type: 'success',
                        message: 'Order Created Successfuly',
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
                getOrders()
            });
    }

    const dialogOrderForm = (
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
                    Form Order
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Subject"
                                variant="filled"
                                fullWidth
                                value={subject}
                                onChange={(event) => {
                                    setSubject(event.target.value)
                                }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="customer-select">Customer</InputLabel>
                                <Select
                                    labelId="customer-select"
                                    label="Customer"
                                    onChange={(event) => {
                                        setCustomerId(event.target.value)
                                    }}
                                    value={customerId}
                                    fullWidth
                                >
                                    {
                                        customers.map((customer) => (
                                            <MenuItem value={customer.id}
                                                      key={customer.id}>
                                                {customer.name}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Order Date"
                                    value={orderDate}
                                    minDate={new Date()}
                                    onChange={(newValue) => {
                                        setOrderDate(newValue)
                                        console.log(format(newValue, 'dd-MM-yyyy HH:mm:ss'))
                                    }}
                                    renderInput={(params) => <TextField {...params} fullWidth/>}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Upload Files
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={(event) => {
                                        convertFileListToGrayscale(event.target.files)
                                            .then((convertedFileList) => {
                                                const array = Array.from(convertedFileList)
                                                setFiles(array)
                                            })
                                    }}
                                    multiple
                                />
                            </Button>
                        </Grid>
                        {
                            files
                                .map((file) =>
                                    <Grid item xs={3} key={file.name}>
                                        <img
                                            height="100%"
                                            width="100%"
                                            src={URL.createObjectURL(file)}
                                            alt="123"
                                        />
                                    </Grid>
                                )
                        }
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>CANCEL</Button>
                    <Button onClick={createOrder} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )

    // View dialog
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [viewOpen, setViewOpen] = useState(false)

    const handleViewClose = () => {
        setSelectedOrder(null)
        setViewOpen(false)
    }

    const dialogViewOrder = (
        <Dialog
            open={viewOpen}
            onClose={handleViewClose}
            aria-labelledby="alert-dialog-title"
        >
            <DialogTitle id="alert-dialog-title">
                Order ID: {selectedOrder ? selectedOrder.id : ''}
            </DialogTitle>
            <DialogContent>
                <div>Subject: {selectedOrder ? selectedOrder.subject : ''}</div>
                <div>Order Date: {selectedOrder ? selectedOrder.orderDate : ''}</div>
                <div>Customer Name: {selectedOrder ? selectedOrder.customer.name : ''}</div>
                <div>Customer Email: {selectedOrder ? selectedOrder.customer.email : ''}</div>
                <div>Images: {selectedOrder ? selectedOrder.orderFiles?.length : ''}</div>
            </DialogContent>
            <DialogActions>
                <Button color="error" onClick={() => {
                    deleteOrder(selectedOrder)
                    handleViewClose()
                }}>
                    Delete
                </Button>
                <Button onClick={handleViewClose} autoFocus>
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    )

    return (
        <Layout>
            <Typography variant="h3" marginBottom={4}>
                Orders
            </Typography>

            <div>
                {dialogOrderForm}
            </div>

            <div>
                {dialogViewOrder}
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

export default OrderIndex