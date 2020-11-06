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
    props.func(props.funcNum + 2);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container className={classes.container} maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography style={{marginBottom: 20}}variant="h5" component="h2">
              {props.num}
            </Typography>
            <Typography component="p">
              <Image imageStyle={{maxWidth: 530, height: 'auto'}} style={{paddingTop: '60%'}} src={props.img} />
            </Typography>
            <Typography style={{marginBottom: 10}}component="p">
              {props.keyword}
            </Typography>
          </CardContent>
          <Button color="success" fullWidth onClick={ handleClickOpen } variant="contained">
            開ける
          </Button>
        </Card>
      </Container>
        <>
          <Dialog className={classes.dia} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {props.name}
            </DialogTitle>
            <DialogContent dividers>
              <Typography className={classes.bgblue, classes.border} gutterBottom>
                <p><b>{props.name}へ</b></p><p><br />{props.message}<br /></p><br /><p style={{textAlign: 'right'}}>{props.myName}より</p>
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
    maxHeight: 'auto',
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
  bgblue: {
    lineHeight: '36px',
    margin: 0,
    padding: 0,
  },
  border: {
    border: '1px solid #dddddd',
    backgroundColor: '#f8fbfc',
    margin: '30px 0',
    padding: '20px 40px 20px',
  }
}));

export default CustomCard;
