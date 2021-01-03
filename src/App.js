/************************** Import library/fungsi ****************************/
//CSS untuk app
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Layouts
import PrimaryLayout from './layouts/PrimaryLayout';

/************************ Deklarasi objek/variabel ***************************/


/************************ Deklarasi kelas/komponen ***************************/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={PrimaryLayout}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
