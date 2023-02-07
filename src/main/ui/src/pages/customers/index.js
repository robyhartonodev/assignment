import Layout from "@/components/layout";
import { DataGrid } from '@mui/x-data-grid';
import {Typography} from "@mui/material";

const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 1  },
    { field: 'email', headerName: 'Email', flex: 1  },
];

const rows = [
    { id: 1, name: 'Snow', email: "test1@gmx.de" },
    { id: 2, name: 'Lannister', email: "test2@gmx.de" },
    { id: 3, name: 'Maria', email: "test3@gmx.de" },
    { id: 4, name: 'Stark', email: "test4@gmx.de" },
];

const CustomerIndex = () => {

    return (
        <Layout>
            <Typography variant="h3" marginBottom={4}>
                Customers
            </Typography>

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </Layout>
    )
}

export default CustomerIndex