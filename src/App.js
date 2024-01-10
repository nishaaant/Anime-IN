import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Search  from './components/Search';
import Home from './components/Home';
import Mylist from './components/Mylist';
import Anime from './components/Anime';
import Episode from './components/Episode';
import Aside from './components/Homecomponent/Aside';
import Footer from './components/Footer';
import Topanime from './components/Topanime';
function App() {
  return (
    <div className="App"> 
     <Router>
      <Nav />
      <div className="container">
        <div className="aside">
           <Aside />
        </div>
        <div className="pages">
       
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search"  exact component={Search}/>
        <Route path="/mylist" exact component={Mylist}/>
        <Route path="/search/:any" exact component={Anime}/>
        <Route path="/episode/:any" component={Episode}/>
        </Switch>
       
        </div>
      </div>
      </Router>
      <Topanime />
  <Footer />
    </div>
  );}

export default App;
