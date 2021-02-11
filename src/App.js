
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import * as ROUTES from './constants/routes';
/**Pages**/
import Home from './ComponentPages/Home/Home';
import Projects from './ComponentPages/Projects/Projects';
import Education from './ComponentPages/Education/Education';
import About from './ComponentPages/About/About';
import Work from './ComponentPages/Work/Work';
/**********/
const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
    
        <Route default exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.PROJECTS} component={Projects} />
        <Route exact path={ROUTES.EDUCATION} component={Education} />
        <Route exact path={ROUTES.WORK} component={Work} />
        <Route exact path={ROUTES.ABOUT} component={About} />

        </Switch>
      </div>
  </Router>

    );
}

export default App;
