import './App.css';
import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Blogs from './Blogs';
import Blog1 from './blogs/Blog1'
function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/blogs" exact component={Blogs}/>
     <Route path="/blogs/blog1" exact component={Blog1}/>
     </Switch>
     </Router>
    </div>
  );
}

export default App;
