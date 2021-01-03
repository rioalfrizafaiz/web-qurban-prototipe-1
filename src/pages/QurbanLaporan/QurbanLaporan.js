/************************** Import library/fungsi ****************************/
import React, { Component } from 'react';
import { Redirect } from 'react-router'

//Header yang ada di semua layout di dalam halaman-halaman
import { MenuBar} from '../../components'

/************************ Deklarasi objek/variabel ***************************/

import './QurbanLaporan.css'

const menuBarInfo = {
  title: "Laporan Qurban",
  content: "Progress pelaksanaan qurban dapat terpantau melalui website",
  link: "Laporan"
}



/************************ Deklarasi kelas/komponen ***************************/
class QurbanLaporan extends Component{

  constructor(props){
    super(props)

    this.state = {
      id_registasi:"",
      opsi_qurban:"def",
      form_redirect: false
    }
  }

  handleIDRegistrasi = event =>{
    this.setState({
      id_registasi: event.target.value
    })
  }

  handleOpsiQurban = event =>{
    this.setState({
      opsi_qurban: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault()
    this.setState({
      form_redirect: true
    })
    //alert(`${this.state.id_registasi} ${this.state.opsi_qurban}`)
  }
  render(){
    
    //const { from } = this.props.location.state || '/'
    const { form_redirect } = this.state
    return (
      <div>
        <p>&nbsp;</p>
        <MenuBar menuBarInfo={menuBarInfo}/>
          <form onSubmit={this.handleSubmit}>
            <section className="laporan-container">
            <div className="laporan-div-adj">
              <p className="laporan-text">
              Fasilitas laporan qurban dirancang untuk melakukan monitoring progress pelaksanaan qurban.
              </p>
              <p className="laporan-text">
              Pilih kategori qurban yang anda ikuti, dan masukkan kode registrasi qurban.
              </p>
            </div>
            <div className="laporan-div-adj">
              <select 
                value={this.state.opsi_qurban} 
                onChange={this.handleOpsiQurban}
                className="laporan-opsi-qurban"
                >
                <option value="def" >Pilih Jenis Partisipasi Qurban Anda</option>
                <option value="Domba" >Domba</option>
                <option value="Sapi" >Sapi</option>
              </select>
            </div>
            <div className="laporan-div-adj">
              <input
              type="text"
              value={this.state.id_registasi}
              onChange={this.handleIDRegistrasi}
              placeholder="Masukkan ID Registrasi"
              className="laporan-registrasi"
              />
            </div>
            <div className="laporan-div-adj">
              <button 
              type="submit"
              className="laporan-submit"
              >
              CARI PROGRESS QURBAN
              </button>
            </div>
            
            </section>
          </form>
          {form_redirect && (
            <Redirect to={{
              pathname: "/user",
              state: {
                id_registasi: this.state.id_registasi,
                opsi_qurban: this.state.opsi_qurban,
              }
            }}/>
          )}
      </div>
    );
  }
}

export default QurbanLaporan;