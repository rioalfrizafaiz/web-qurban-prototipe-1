/************************** Import library/fungsi ****************************/
import React from 'react';

// modul-modul MaterialUI
// untuk styles
import { makeStyles } from '@material-ui/core/styles';

// AppBar dan komponen-komponen nya
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import MenuItem from '@material-ui/core/MenuItem';
//import Menu from '@material-ui/core/Menu';

// typography untuk tata letak teks
import Typography from '@material-ui/core/Typography';

// button dan group nya untuk tombol-tombol
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
//import MenuIcon from '@material-ui/icons/Menu';
//import AccountCircle from '@material-ui/icons/AccountCircle';

import { createMuiTheme } from '@material-ui/core/styles';

// gambar dummy
import Logoras from '../../../images/logoras.png';

/************************ Deklarasi objek/variabel ***************************/
const useStyles = makeStyles((theme) => ({
  grow: {
    width: "100%",
  },
  growSpace: {
    width: "75%",
  },
  menuButton: {
    marginRight: "0px",
  },
  titleSpace: {
    width: '700px',
  },
  sectionDesktop: {
    marginRight: "10px"
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

/************************ Deklarasi kelas/komponen ***************************/
export default function AppBarMaterial(props) {
  const classes = useStyles();
  /*
  const [anchorAccount, setAnchorAccount] = React.useState(null);
  const [anchorPageSelection, setAnchorPageSelection] = React.useState(null);
  */

  /*
  const isAccountOpen = Boolean(anchorAccount);
  const isPageSelectionOpen = Boolean(anchorPageSelection);

  const handleProfileMenuOpen = (event) => {
    setAnchorAccount(event.currentTarget);
  };

  const handlePageSelectionOpen = (event) => {
    setAnchorPageSelection(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorAccount(null);
    setAnchorPageSelection(null);
  };

  const AccountMenuId = 'primary-search-account-menu';
  const renderAccount = (
    <Menu
      anchorEl={anchorAccount}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={AccountMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isAccountOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const PageSelectionMenuId = 'primary-search-account-menu';
  const renderPageSelection = (
    <Menu
      anchorEl={anchorPageSelection}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={PageSelectionMenuId}
      keepMounted
      transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={isPageSelectionOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleMenuClose}>Event</MenuItem>
      <MenuItem onClick={handleMenuClose}>Status</MenuItem>
      <MenuItem onClick={handleMenuClose}>Parameter</MenuItem>
      <MenuItem onClick={handleMenuClose}>History</MenuItem>
    </Menu>
  );
  */

  return (
    <div className={classes.grow}>
      <AppBar color={theme.palette.primary.main}>
        <Toolbar>
          <Typography display="block" variant="h6" nowrap="true" className={classes.title}>
          <p><img src={Logoras} alt="logo RAS"/></p>
          </Typography>

          <div className={classes.grow} />
          <ButtonGroup variant="text" color={theme.palette.primary.light} aria-label="text primary button group">
            <Button>HOME</Button>
            <Button>PROFIL</Button>
            <Button>QURBAN</Button>
            <Button>KONTAK</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br />
    </div>
  );
}
