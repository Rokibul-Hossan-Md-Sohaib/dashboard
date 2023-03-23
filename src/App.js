
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home';
import { UseProvider } from './Component/UseContext';
import Create from './Component/Create';
import Delete from './Component/Delete';
import Details from './Component/Details';
import Edit from './Component/Edit';
import Main from './Component/Main';
import MainCreate from './Component/MainCreate';
function App() {
  return (
    <div className="App">
      <UseProvider>
        <Router>
          <Switch>
          <Route path="/create">
              <Create/>
            </Route>
            <Route path="/delete/:id">
              <Delete/>
            </Route>
            <Route path="/details/:id">
              <Details/>
            </Route>
            <Route path="/edit/:id">
              <Edit/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
        
            <Route exact path="/">
            <Home />
            </Route>
           
          </Switch>
        </Router>
      </UseProvider>
    </div>
  );
}

export default App;
