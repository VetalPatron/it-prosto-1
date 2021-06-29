import React from 'react';
import s from './ControlButton.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClickOpen3 = () => {
        setOpen3(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleClose3 = () => {
        setOpen3(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Создать
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Создать</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Название компании"
                        type="text"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="e-mail клиента"
                        type="email"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id="name"
                        label="Акаунт менеджер"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Создать
                    </Button>
                </DialogActions>
            </Dialog>

            <Button variant="outlined" color="primary" onClick={handleClickOpen2}>
                Редактировать
            </Button>

            <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Редактировать</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose2} color="primary">
                        Редактировать
                    </Button>
                </DialogActions>
            </Dialog>

            <Button variant="outlined" color="primary" onClick={handleClickOpen3}>
                Удалить
            </Button>

            <Dialog open={open3} onClose={handleClose3} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Удалить</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    <TextField

                        margin="dense"
                        id="name"
                        label="Укажите Id "
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose3} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose3} color="primary">
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}


