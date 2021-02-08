import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contact/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/contact/addcontact";
import { Provider } from "./context";
import About from "./components/pages/about";
import NotFound from "./components/pages/notfound";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
