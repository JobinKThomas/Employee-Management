import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Employeelist from './components/Employeelist';
import Addemployee from './components/Addemployee';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Employeelist} />
        <Route path="/add" component={Addemployee} />
      </Switch>
    </Router>
  );
}

export default App;
