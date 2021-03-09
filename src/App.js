import './App.css';
import Country from './Component/Country/Country';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Component/CountryDetails/CountryDetails';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div>
    <Header></Header>
    
    <Router>
      <Switch>
        <Route path = "/country">
        <Country></Country>
        </Route>
        <Route path ="/name/:InsteadOfName">
        <CountryDetails></CountryDetails>
        </Route>
        <Route exact path ="/">
        <Country></Country>
        </Route>
        <Route path ="*">
       <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
