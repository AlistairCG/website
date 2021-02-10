
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import * as ROUTES from './constants/routes';
/**Pages**/
import Home from './Pages/Home';

/**********/
const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
    
        <Route default exact path={ROUTES.Home} component={Home} />
   
        </Switch>
      </div>
  </Router>

    );
}

export default App;
