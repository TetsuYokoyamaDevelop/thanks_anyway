import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Image from 'material-ui-image';

const CustomCard = (props) =>  {

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.name}へ
            </Typography>
              <CardContent style={{ marginLeft: 20  }}>
                <Image imageStyle={{width: 'auto',maxHeight: 200}} src={props.img} />
              </CardContent>
            <Typography variant="body2" component="p">
              {props.myName}
            </Typography>
          </CardContent>
        </Card>
        <Button color="secondary" fullWidth onClick={ handleClickOpen } variant="contained">
          show modal
        </Button>
      </Container>
        <>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {props.name}へ
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                {props.message}
              </Typography>
              <Typography gutterBottom>
                {props.myName}より
              </Typography>
            </DialogContent>
          </Dialog>
        </>
      </>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  root: {
    minWidth: 275,
    maxHeight: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default CustomCard;
