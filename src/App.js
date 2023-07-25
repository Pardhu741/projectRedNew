import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link,Routes} from "react-router-dom";
import Home from './Home';
import WhatWeDo from './WhatWeDo';
import WhoWeAre from './WhoWeAre';
import OurWork from './OurWork';
import JoinUs from './JoinUs';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route exact path={"/"} Component={Home}/>
            <Route exact path={"/whatWeDo"} Component={WhatWeDo}/>
            <Route exact path={"/whoWe"} Component={WhoWeAre}/>
            <Route exact path={"/ourWork"} Component={OurWork}/>
            <Route exact path={"/joinUs"} Component={JoinUs}/>
            {/* <Route exact path={"/ourWork"} Component={OurWork}/>
            // <Route exact path={"/whoWe"} Component={WhoWeAre}/>
            <Route exact path={"/joinUs"} Component={JoinUs}/> */}
        </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
