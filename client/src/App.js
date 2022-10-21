import LandingPage from './components/LandingPage'
import Home from "./components/Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import CreateActivity from "./components/CreateActivity"


function App() {
  return (
    <BrowserRouter>
  <Switch> 
    <Route exact path ='/' component ={LandingPage}/>
    <Route exact path ='/createActivity' component ={CreateActivity}/>
    <Route exact path ='/home' component ={Home}/>
    <Route exact path ='/:id' component ={CountryDetail}/>
  </Switch>
 
</BrowserRouter>
  );
}

export default App;
