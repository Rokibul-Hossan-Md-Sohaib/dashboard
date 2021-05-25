
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
function App() {
  return (
    <div className="App">
      <UseProvider>
        <Router>
          <Switch>
          <Route path="/create">
              <Create/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
           
          </Switch>
        </Router>
      </UseProvider>
    </div>
  );
}

export default App;
