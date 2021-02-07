import './App.css';
import Contacts from './components/contact/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddContact from './components/contact/addcontact'
import {Provider} from './context';
function App() {
  const name='lo';
  return (
    <Provider>
      <div className="App">
     <Header branding="Contact Manager"/>
     <div className="container">
       <AddContact></AddContact>
      <Contacts/>
     </div>
    </div>
    </Provider>
  );
}

export default App;
