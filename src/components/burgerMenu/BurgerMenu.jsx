import React from 'react';
import css from './BurgerMenu.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      left: 320,
      top: 150,
      border: "none",
      outline: "none",
      width: 600,
      backgroundColor: "white",
      height: 400,
      padding: 30,
    },
 }));


function BurgerMenu(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return(
        <div>
            <img className={css.button} onClick={handleOpen} src="/img/burger.svg" alt="" />
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
             >  
                <div className={classes.paper}>
                  <div className={css.modal_box}>
                    <p className={css.modal_title}>Приложения</p>
                    <p onClick={handleClose}>X</p>
                  </div>
                  <div className={css.title}>
                    <div>
                      <a target="_blank" href="https://wa.me/996555505050"><img className={css.logotip} src="/img/whatsapp.svg" alt="" /></a>
                      <h3>Whatsapp</h3>
                    </div>
                    <div>
                      <a target="_blank" href="https://twitter.com/whitehouse"><img className={css.logo} src="/img/twitter.svg" alt="" /></a>
                      <h3>Twitter</h3>
                    </div>
                    <div>
                      <a target="_blank" href="https://www.instagram.com/direct/inbox/"><img className={css.logo} src="/img/instagram.svg" alt="" /></a>
                      <h3>Direct</h3>
                    </div>
                    <div>
                      <a target="_blank" href="https://t.me/goldenhouseuz"><img className={css.logotip} src="/img/telegram.svg" alt="" /></a>
                      <h3>Telegram</h3>
                    </div>
                  </div>
                  <div className={css.title}>
                    <div>
                        <a target="_blank" href="https://www.facebook.com/sfbuilding"><img className={css.logotip} src="/img/facebook.svg" alt="" /></a>
                        <h3>Facebook</h3>
                      </div>
                      <div>
                        <a target="_blank" href="marketing.alfastroy@gmail.com"><img className={css.logotip} src="/img/message.svg" alt="" /></a>
                        <h3>Message</h3>
                      </div>
                      <div>
                        <a target="_blank" href="https://mail.com/"><img className={css.logo} src="/img/gmail.svg" alt="" /></a>
                        <h3>Email</h3>
                      </div>
                      <div>
                        <a target="_blank" href="https://app.slack.com/client/TL04FFLV6/D028ANC39L4"><img className={css.logo} src="/img/slack.svg" alt="" /></a>
                        <h3>Slack</h3>
                      </div>
                    </div>
                </div>
            </Modal>
        </div>


        
    );
}

export default BurgerMenu;