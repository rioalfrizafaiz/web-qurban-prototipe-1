/************************** Import library/fungsi ****************************/
import React, { Component } from 'react';

//Header yang ada di semua layout di dalam halaman-halaman
import { MenuBar } from '../../components';

// table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// button dan group nya untuk tombol-tombol
import Button from '@material-ui/core/Button';

// gambar dummy
import { Redirect } from 'react-router-dom';
import Foto1Sebelum from '../../images/qurban/1/P.Siregar2020-Sebelum.jpeg';
import Foto1Sesudah from '../../images/qurban/1/P.Siregar2020-Sesudah.jpeg';
import Foto2Sebelum from '../../images/qurban/2/R.Alfriza2020-Sebelum.jpg';
import Foto2Sesudah from '../../images/qurban/2/R.Alfriza2020-Sesudah.jpg';
import Foto3Sebelum from '../../images/qurban/3/User3-Sebelum.jpg';
import Foto3Sesudah from '../../images/qurban/3/User3-Sesudah.jpg';
import Foto4Sebelum from '../../images/qurban/4/User4-Sebelum.jpg';
import Foto4Sesudah from '../../images/qurban/4/User4-Sesudah.jpg';
import Foto5Sebelum from '../../images/qurban/5/User5-Sebelum.jpg';
import Foto5Sesudah from '../../images/qurban/5/User5-Sesudah.jpg';
import FotoError from '../../images/Error.png';
import './QurbanLaporanCekProgress.css';

const menuBarInfo = {
  title: "Progress Qurban Anda",
  content: "Berikut ini informasi mengenai progress pelaksanaan Qurban Anda",
  link: " Qurban/Laporan/Progress Pelaksanaan Qurban "
}



/************************ Deklarasi kelas/komponen ***************************/
class QurbanLaporanCekProgress extends Component {
  constructor(props){
    super(props)

    this.state = {
      id_registasi:"Hallo",
      opsi_qurban:"sapi",
      logout_redirect: false,
      foto_sebelum:'',
      foto_sesudah:'',
      lokasi:'',


      const_id_1:"P.Siregar2020",
      const_id_2:"R.Alfriza2020",
      const_id_3:"User3",
      const_id_4:"User4",
      const_id_5:"User5",
    }
  }

  componentDidMount(props){
    this.setState({
      id_registasi: this.props.location.state.id_registasi,
      opsi_qurban: this.props.location.state.opsi_qurban
    })
    this.checkOpsi(this.props.location.state.opsi_qurban)
    this.swithImage(this.props.location.state.id_registasi)
  }

  checkOpsi(params){
    if(params==="def"){
      this.setState({
        logout_redirect: true,
      })
      alert(`Mohon isi terlebih dahulu Jenis Partisipasi Qurban Anda`)
    }

  }
  swithImage(params){
    switch (params) {
      case this.state.const_id_1:
        this.setState({
          foto_sebelum:Foto1Sebelum,
          foto_sesudah:Foto1Sesudah,
          lokasi: "Mesjid Salman ITB, Bandung, Jawa Barat",
        })
        break;
      case this.state.const_id_2:
        this.setState({
          foto_sebelum:Foto2Sebelum,
          foto_sesudah:Foto2Sesudah,
          lokasi: "Mesjid Salman ITB, Bandung, Jawa Barat",
        })
        break;
      case this.state.const_id_3:
        this.setState({
          foto_sebelum:Foto3Sebelum,
          foto_sesudah:Foto3Sesudah,
          lokasi: "Mesjid User 3",
        })
        break;
      case this.state.const_id_4:
        this.setState({
          foto_sebelum:Foto4Sebelum,
          foto_sesudah:Foto4Sesudah,
          lokasi: "Mesjid User 4",
        })
        break;
      case this.state.const_id_5:
        this.setState({
          foto_sebelum:Foto5Sebelum,
          foto_sesudah:Foto5Sesudah,
          lokasi: "Mesjid User 5",
        })
        break;
    
      default:
        this.setState({
          foto_sebelum:FotoError,
          foto_sesudah:FotoError,
          lokasi: "Error, Tidak diketahui",
          logout_redirect: true,
        })
        alert(`ID Registrasi tidak diketahui`)
        break;
    }
  }

  handleLogout = event =>{
    event.preventDefault()
    this.setState({
      logout_redirect: true
    })
    //alert(`${this.state.id_registasi} ${this.state.opsi_qurban}`)
  }
  
  render(){
    const { logout_redirect } = this.state
    return (
      <div>
        <br /><br />
        <MenuBar menuBarInfo={menuBarInfo} />
        <br/>
        <br/>
        <div className="check-div-adj">
          <p className="check-text">
          ID Registrasi: {this.state.id_registasi}
          </p>
          <br/>
          <p className="check-text">
          Jenis Partisipasi: {this.state.opsi_qurban}
          </p>
        </div>
        <TableContainer >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Sebelum Pelaksanaan</TableCell>
                <TableCell align="center">Sesudah Pelaksanaan</TableCell>
                <TableCell align="center">Lokasi Pelaksanaan Qurban</TableCell>
                <TableCell align="center">Download Sertifikat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <img 
                  src={this.state.foto_sebelum} 
                  alt="Foto Sebelum"
                  className="foto-size"
                  />
                </TableCell>
                <TableCell align="center">
                  <img 
                  src={this.state.foto_sesudah} 
                  alt="Foto Sesudah"
                  className="foto-size"
                  />
                </TableCell >
                <TableCell align="center">{this.state.lokasi}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="primary">
                    Download Sertifikat Qurban
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <br/>
        <Button 
        variant="contained" 
        color="primary"
        onClick={this.handleLogout}
        >
          Logout
        </Button>

        {logout_redirect && (
            <Redirect to="/"/>
          )}
      </div>

    );
  }
}

export default QurbanLaporanCekProgress;