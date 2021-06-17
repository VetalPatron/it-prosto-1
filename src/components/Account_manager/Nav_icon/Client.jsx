import React from 'react';
import s from './Client.modal.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ControlButton from './../../ControlButtons/ControlButtons';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

export default function DenseTable() {
    // const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={s.table} >
                <TableHead>
                    <TableRow>
                        <TableCell>Название компании</TableCell>
                        <TableCell >Id чата</TableCell>
                        <TableCell >e-mail клиента</TableCell>
                        <TableCell >Акаунт менеджер</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.calories}</TableCell>
                            <TableCell >{row.fat}</TableCell>
                            <TableCell >{row.carbs}</TableCell>
                            <TableCell >{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <ControlButton />
            </Table>
        </TableContainer>

    );

}