import React from 'react';
import css from './Youtube.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


    
const useStyles = makeStyles((theme) => ({
   paper: {
     position: 'absolute',
     left: 300,
     top: 160,
     border: "none",
     outline: "none",
     width: 600,
     backgroundColor: "white",
     height: "400px",
     padding: 30,
   },
}));


function Youtube(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
    setOpen(true);
};
const handleClose = () => {
    setOpen(false);
};
    return(
        <div className={css.container}>
           <iframe width="950" height="550" src="https://www.youtube.com/embed/xtA_oQyHZ7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
        </div>
    );
}

export default Youtube;