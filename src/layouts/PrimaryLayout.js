/************************** Import library/fungsi ****************************/
import React from 'react'

//Header yang ada di semua layout di dalam Halaman Admin
import { AppBarMaterial } from '../components'
import { Switch, Route} from 'react-router-dom'


//Page-page di dalam layout
import {QurbanLaporan, QurbanLaporanCekProgress} from '../pages';

/************************ Deklarasi kelas/komponen ***************************/
const PrimaryLayout = ({ match,history }) => (
  //<div className="primary-layout">
    <div>
    <main>
      <AppBarMaterial />
        <Switch>
          <Route path="/" exact component={QurbanLaporan} />
          <Route path="/user" render={(props)=> <QurbanLaporanCekProgress {...props}/>}/>
          {/*<Route path="/user" component={QurbanLaporanCekProgress} />*/}
        </Switch>
    </main>
  </div>
)


export default PrimaryLayout;