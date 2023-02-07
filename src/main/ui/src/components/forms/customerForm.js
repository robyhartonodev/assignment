import {useState} from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grid,
    TextField
} from "@mui/material";


export default function CustomerForm() {
    const [open, setOpen] = useState(false)

    const [customer, setCustomer] = useState({
        name: '',
        email: ''
    })

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

    const validateInputs = () => {
        // TODO
    }

    const createCustomer = () => {
        fetch("http://localhost:8080/api/v1/customers", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then((response) => {
                // TODO
            })
            .catch((error) => {
                console.log(error)
                // TODO
            })
        ;
    }

    const updateCustomer = () => {
        // TODO
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    New Customer
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
}