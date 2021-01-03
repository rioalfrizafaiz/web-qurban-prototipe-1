/************************** Import library/fungsi ****************************/
import React from 'react';

// modul-modul MaterialUI
// untuk styles
import { makeStyles } from '@material-ui/core/styles';

// paper (setara container)
import Paper from '@material-ui/core/Paper';

// grid (untuk pengaturan posisi konten)
import Grid from '@material-ui/core/Grid';

// typography untuk tata letak teks
import Typography from '@material-ui/core/Typography';

// button dan group nya untuk tombol-tombol
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

/************************ Deklarasi objek/variabel ***************************/
const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 500,
    textAlign: 'left',
    alignItems: 'left',
    justifyContent: 'left',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: "#EFEFEF"
  },
  title: {
    fontSize: 30,
  },
  content: {
    fontSize: 14,
  },
  paperLeft: {
    width: '100%',
    padding: theme.spacing(5),
    alignSelf: 'left',
    backgroundColor: "#EFEFEF"
  },
  paperRight: {
    marginLeft: '0mm',
    paddingLeft: '0mm',
    width: '150%',
    textAlign: 'left',
    backgroundColor: "#EFEFEF"
  },
}));
/************************ Deklarasi kelas/komponen ***************************/

export default function MenuBar(props) {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={10}
      >
        <Grid item xs={5}>
          <Paper elevation={0} className={classes.paperLeft}>
            <Typography align="left" className={classes.title} gutterBottom>
              {props.menuBarInfo.title}
            </Typography>

            <Typography align="left" className={classes.content}>
              {props.menuBarInfo.content}
            </Typography>

          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper elevation={0} className={classes.paperRight}>
            <Typography align="right">
              <ButtonGroup variant="text" color="default" aria-label="text primary button group">
                <Button size="small">Home</Button>
                <Button size="small">{props.menuBarInfo.link}</Button>
              </ButtonGroup>
            </Typography>
          </Paper>
        </Grid>
      </Grid> {/* yang container */}
    </Paper>
  );
}