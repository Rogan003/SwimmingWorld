import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/Home'
import Competitions from './components/Competitions'
import SocialNetwork from './components/SocialNetwork'
import Games from './components/Games'

function App() {
  return (
    <Router>
      <Route path = "/" exact component = {Home} />
      <Route path = "/competitions" exact component = {Competitions} />
      <Route path = "/socialnetwork" exact component = {SocialNetwork} />
      <Route path = "/games" exact component = {Games} />
    </Router>
  );
}

export default App;
