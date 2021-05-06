import './App.css';
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Blogs from './Blogs';
function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/blogs" exact component={Blogs}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
